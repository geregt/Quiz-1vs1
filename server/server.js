const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { getQuestionsByLevel } = require('./questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const path = require('path');

const clientPath = path.join(__dirname, '../client');
app.use(express.static(clientPath));


// roomId: { players: [ { socketId, level, correctInLevel, wrongStreak, questionQueues } ] }
const rooms = {};

app.use(express.static('../client'));

io.on('connection', (socket) => {
  console.log('Neuer Client verbunden', socket.id);

  // --------- Räume ---------

  socket.on('createRoom', () => {
    let roomId;
    do {
      roomId = generateRoomId();
    } while (rooms[roomId]);

    const playerState = {
      socketId: socket.id,
      level: 1,
      correctInLevel: 0,
      wrongStreak: 0,
      questionQueues: initPlayerQueues()
    };

    rooms[roomId] = { players: [playerState] };

    socket.join(roomId);
    socket.roomId = roomId;
    socket.playerState = playerState;

    socket.emit('roomCreated', { roomId });
  });

  socket.on('joinRoom', ({ roomId }) => {
    const room = rooms[roomId];
    if (!room) {
      socket.emit('roomJoined', { roomId: null, error: 'Raum existiert nicht' });
      return;
    }
    if (room.players.length >= 2) {
      socket.emit('roomJoined', { roomId: null, error: 'Raum ist voll' });
      return;
    }

    const playerState = {
      socketId: socket.id,
      level: 1,
      correctInLevel: 0,
      wrongStreak: 0,
      questionQueues: initPlayerQueues()
    };
    room.players.push(playerState);

    socket.join(roomId);
    socket.roomId = roomId;
    socket.playerState = playerState;

    socket.emit('roomJoined', { roomId });

    io.to(roomId).emit('roomState', {
      roomId,
      players: room.players.map(p => ({
        socketId: p.socketId,
        level: p.level
      }))
    });

    if (room.players.length === 2) {
      io.to(roomId).emit('gameStart', { roomId });
    }
  });

  // --------- Fragen / Antworten ---------

  socket.on('needQuestion', () => {
    if (!socket.playerState) return; // noch in keinem Raum

    const level = socket.playerState.level;
    const q = getNextQuestionForLevel(socket.playerState.questionQueues, level);
    socket.currentQuestion = q;

    socket.emit('question', {
      ...q,
      level: socket.playerState.level
    });
  });

  socket.on('answer', (data) => {
    const q = socket.currentQuestion;
    if (!q || q.id !== data.questionId) return;

    const correct = (data.answerIndex === q.correctIndex);

    // Level vor dem Update merken
    const previousLevel = socket.playerState.level;

    updateLevelState(socket.playerState, correct);

    // Feedback an den antwortenden Spieler
    socket.emit('answerResult', {
      correct,
      level: socket.playerState.level,
      correctInLevel: socket.playerState.correctInLevel,
      wrongStreak: socket.playerState.wrongStreak
    });

    const roomId = socket.roomId;
    const room = rooms[roomId];

    if (room) {
      // roomState für beide
      io.to(roomId).emit('roomState', {
        roomId,
        players: room.players.map(p => ({
          socketId: p.socketId,
          level: p.level
        }))
      });

      // Siegbedingung:
      // Spieler war schon auf Level 5 und beantwortet dort eine Frage korrekt
      if (correct && previousLevel === 5) {
        io.to(roomId).emit('gameOver', {
          winnerId: socket.id
        });

        // Raum „beenden“: Spieler aus Raum entfernen
        room.players.forEach(p => {
          const s = io.sockets.sockets.get(p.socketId);
          if (s) {
            s.leave(roomId);
            s.roomId = null;
            s.playerState = null;
          }
        });
        delete rooms[roomId];
      }
    }
  });

  // TODO: disconnect später sauber behandeln
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log('Server läuft auf http://localhost:' + PORT);
});

// --------- Hilfsfunktionen ---------

function initPlayerQueues() {
  const queues = {};
  for (let level = 1; level <= 5; level++) {
    const questions = getQuestionsByLevel(level);
    queues[level] = shuffle([...questions]); // Kopie!
  }
  return queues;
}

function getNextQuestionForLevel(queues, level) {
  if (!queues[level] || queues[level].length === 0) {
    const questions = getQuestionsByLevel(level);
    queues[level] = shuffle([...questions]);
  }
  const q = queues[level].pop();
  console.log('Frage gewählt für Level', level, q && q.id);
  return q;
}

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function updateLevelState(state, correct) {
  if (correct) {
    state.correctInLevel++;
    state.wrongStreak = 0;
    if (state.correctInLevel >= 3 && state.level < 5) {
      state.level++;
      state.correctInLevel = 0;
    }
  } else {
    state.wrongStreak++;
    state.correctInLevel = 0;
    if (state.wrongStreak >= 2 && state.level > 1) {
      state.level--;
      state.wrongStreak = 0;
    }
  }
}

function generateRoomId(length = 5) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const idx = Math.floor(Math.random() * chars.length);
    result += chars[idx];
  }
  return result;
}