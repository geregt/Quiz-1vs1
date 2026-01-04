const socket = io();

// UI-Elemente
const createRoomBtn   = document.getElementById('createRoomBtn');
const joinRoomBtn     = document.getElementById('joinRoomBtn');
const roomIdInput     = document.getElementById('roomIdInput');
const roomInfoDiv     = document.getElementById('roomInfo');
const myLevelDiv      = document.getElementById('myLevel');
const oppLevelDiv     = document.getElementById('opponentLevel');
const feedbackBox     = document.getElementById('feedbackBox');
const gameOverBox     = document.getElementById('gameOverBox');
const usernameScreen  = document.getElementById('usernameScreen');
const usernameInput   = document.getElementById('usernameInput');
const usernameBtn     = document.getElementById('usernameSubmitBtn');
const lobbyControls   = document.getElementById('lobbyControls');
const creditsBtn = document.getElementById('creditsBtn');
const creditsBox = document.getElementById('creditsBox');
const impressumBtn  = document.getElementById('impressumBtn');
const impressumBox  = document.getElementById('impressumBox');


creditsBtn.addEventListener('click', () => {
  const computed = getComputedStyle(creditsBox).display;
  const isHidden = computed === 'none';
  creditsBox.style.display = isHidden ? 'block' : 'none';
});

impressumBtn.addEventListener('click', () => {
  const computed = getComputedStyle(impressumBox).display;
  const isHidden = computed === 'none';
  impressumBox.style.display = isHidden ? 'block' : 'none';
});


let username = null;

// ---------- Username nur einmal abfragen ----------
usernameBtn.addEventListener('click', () => {
  const value = usernameInput.value.trim();
  if (!value) return;

  username = value;

  // Username-UI ausblenden
  usernameScreen.style.display = 'none';

  // Lobby-UI einblenden
  lobbyControls.style.display = 'block';

  // Namen an den Server schicken
  socket.emit('registerName', { username });
});

// ---------- Lobby-Aktionen ----------
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

// ---------- Spielstart ----------
socket.on('gameStart', ({ roomId }) => {
  gameOverBox.textContent = '';
  gameOverBox.className = 'game-over';
  
  lobbyControls.style.display = 'none';
  document.getElementById('gameArea').style.display = 'block';
  console.log('Spiel startet in Raum', roomId);
  socket.emit('needQuestion');
});

// ---------- Level-Themes ----------
function applyLevelTheme(level) {
  const c = document.querySelector('.container');
  const b = document.body;

  b.className = '';
  c.className = 'container';

  b.classList.add(`level-bg${level}`);
  c.classList.add(`level${level}`);
}

// ---------- Raumzustand ----------
socket.on('roomState', ({ roomId, players }) => {
  console.log('roomState', roomId, players);

  const myId = socket.id;
  const me   = players.find(p => p.socketId === myId);
  const opp  = players.find(p => p.socketId !== myId);

  if (me) {
    myLevelDiv.textContent = 'Dein Level: ' + me.level;
    applyLevelTheme(me.level);
  }

  if (opp) {
    const name = opp.username || 'Gegner';
    oppLevelDiv.textContent = `${name}: Level ${opp.level}`;
  } else {
    oppLevelDiv.textContent = 'Gegner: wartet...';
  }
});

// ---------- Frage anzeigen ----------
socket.on('question', (q) => {
  renderQuestion(q);
});

function renderQuestion(q) {
  console.log('Credits gesetzt:', q.id, creditsBox.textContent);

  const qDiv = document.getElementById('question');   // <- FEHLTE
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

  if (q.credits) {
    creditsBox.textContent = q.credits;
  } else {
    creditsBox.textContent = '';
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


// ---------- Rückmeldung ----------
socket.on('answerResult', (result) => {
  feedbackBox.textContent = result.correct ? 'Richtig!' : 'Falsch!';
  feedbackBox.className   = result.correct ? 'feedback correct' : 'feedback wrong';

  myLevelDiv.textContent =
    'Dein Level: ' + result.level +
    ' | Richtige in diesem Level: ' + result.correctInLevel +
    ' | Fehler-Serie: ' + result.wrongStreak;

  console.log('Antwort erhalten, fordere neue Frage an');
  socket.emit('needQuestion');
});

// ---------- Spielende ----------
socket.on('gameOver', ({ winnerId, winnerName }) => {
  const selfWon = winnerId === socket.id;
  const text = selfWon
    ? 'Du hast gewonnen!'
    : (winnerName ? `${winnerName} hat gewonnen.` : 'Du hast verloren. Der Gegner hat gewonnen.');

  gameOverBox.textContent = text;
  gameOverBox.className   = 'game-over visible';

  document.getElementById('question').innerHTML = '';
  document.getElementById('answers').innerHTML  = '';

  setTimeout(() => {
    myLevelDiv.textContent  = 'Dein Level: 1';
    oppLevelDiv.textContent = 'Gegner: ?';
    roomInfoDiv.textContent = 'Spiel beendet. Erstelle einen neuen Raum oder trete einem bei.';

    document.getElementById('gameArea').style.display   = 'none';
    lobbyControls.style.display                         = 'block';
  }, 5000);
});
