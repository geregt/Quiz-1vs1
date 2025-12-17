const socket = io();

// UI-Elemente
const createRoomBtn = document.getElementById('createRoomBtn');
const joinRoomBtn   = document.getElementById('joinRoomBtn');
const roomIdInput   = document.getElementById('roomIdInput');
const roomInfoDiv   = document.getElementById('roomInfo');
const myLevelDiv    = document.getElementById('myLevel');
const oppLevelDiv   = document.getElementById('opponentLevel');

createRoomBtn.onclick = () => {
  socket.emit('createRoom');
};

joinRoomBtn.onclick = () => {
  const roomId = roomIdInput.value.trim();
  if (roomId) {
    socket.emit('joinRoom', { roomId });
  }
};

socket.on('roomCreated', ({ roomId }) => {
  roomInfoDiv.textContent = 'Du hast Raum erstellt: ' + roomId;
  roomIdInput.value = roomId;
});

socket.on('roomJoined', ({ roomId, error }) => {
  if (error || !roomId) {
    roomInfoDiv.textContent = 'Fehler: ' + error;
  } else {
    roomInfoDiv.textContent = 'Du bist in Raum: ' + roomId;
  }
});

socket.on('connect', () => {
  console.log('Verbunden mit Server, ID:', socket.id);
});

// Spielstart, wenn 2 Spieler im Raum
socket.on('gameStart', ({ roomId }) => {
  document.getElementById('lobbyControls').style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  console.log('Spiel startet in Raum', roomId);
  socket.emit('needQuestion');
});

function applyLevelTheme(level) {
  const c = document.querySelector('.container');
  const b = document.body;

  b.className = '';          // alte Themes weg
  c.className = 'container'; // Basis

  b.classList.add(`level-bg${level}`);
  c.classList.add(`level${level}`);
}

// Raumzustand (Level von dir und Gegner)
socket.on('roomState', ({ roomId, players }) => {
  console.log('roomState', roomId, players); // Debug

  const myId = socket.id;
  const me  = players.find(p => p.socketId === myId);
  const opp = players.find(p => p.socketId !== myId);
  if (me) {
  myLevelDiv.textContent = 'Dein Level: ' + me.level;
  applyLevelTheme(me.level);
}


  if (me) {
    myLevelDiv.textContent = 'Dein Level: ' + me.level;
  }

  if (opp) {
    oppLevelDiv.textContent = 'Gegner: Level ' + opp.level;
  } else {
    oppLevelDiv.textContent = 'Gegner: wartet...';
  }
});

// Frage anzeigen
socket.on('question', (q) => {
  renderQuestion(q);
});

function renderQuestion(q) {
  const qDiv = document.getElementById('question');
  const aDiv = document.getElementById('answers');
  qDiv.innerHTML = '';
  aDiv.innerHTML = '';

  const text = document.createElement('p');
  text.textContent = q.question;
  qDiv.appendChild(text);

  if (q.type === 'image') {
    const img = document.createElement('img');
    img.src = q.mediaUrl;
    img.className = 'question-image';
    qDiv.appendChild(img);
  } else if (q.type === 'audio') {
    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = q.mediaUrl;
    qDiv.appendChild(audio);
  }

  q.answers.forEach((ans, index) => {
    const btn = document.createElement('button');
    btn.textContent = ans;
    btn.onclick = () => {
      socket.emit('answer', {
        questionId: q.id,
        answerIndex: index
      });
    };
    aDiv.appendChild(btn);
  });
}


// Rückmeldung vom Server
socket.on('answerResult', (result) => {
  alert(result.correct ? 'Richtig!' : 'Falsch!');

  myLevelDiv.textContent =
    'Dein Level: ' + result.level +
    ' | Richtige in diesem Level: ' + result.correctInLevel +
    ' | Fehler-Serie: ' + result.wrongStreak;

  console.log('Antwort erhalten, fordere neue Frage an');
  socket.emit('needQuestion');
});
socket.on('gameOver', ({ winnerId }) => {
  const text =
    winnerId === socket.id
      ? 'Du hast gewonnen!'
      : 'Du hast verloren. Der Gegner hat gewonnen.';

  alert(text);

  // UI zurücksetzen
  document.getElementById('question').innerHTML = '';
  document.getElementById('answers').innerHTML = '';

  // Level-Anzeigen zurücksetzen
  myLevelDiv.textContent  = 'Dein Level: 1';
  oppLevelDiv.textContent = 'Gegner: ?';
  roomInfoDiv.textContent = 'Spiel beendet. Erstelle einen neuen Raum oder trete einem bei.';

  // zurück zum Startbildschirm
  document.getElementById('gameArea').style.display = 'none';
  document.getElementById('lobbyControls').style.display = 'block';
});
