const { Worker } = require("worker_threads");
const worker = new Worker("./nw.js");

var BaseGrid = [
  [
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "PP",
    "|",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
  ],
  [
    "p",
    "1",
    "2",
    "p",
    "1",
    "2",
    "p",
    "1",
    "-",
    "-",
    "2",
    "p",
    "|",
    "p",
    "1",
    "-",
    "-",
    "2",
    "p",
    "1",
    "2",
    "p",
    "1",
    "2",
    "p",
  ],

  [
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    "",
    "",
    ":|",
    "p",
    "|",
    "p",
    "|:",
    "",
    "",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
  ],

  [
    "p",
    "4",
    "3",
    "p",
    "4",
    "3",
    "p",
    "4",
    "-",
    "-",
    "3",
    "p",
    "|",
    "p",
    "4",
    "-",
    "-",
    "3",
    "p",
    "4",
    "3",
    "p",
    "4",
    "3",
    "p",
  ],
  [
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "_",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
  ],
  [
    "p",
    "[",
    "]",
    "p",
    "[",
    "-",
    "-",
    "-",
    "-",
    "-",
    "]",
    "p",
    "p",
    "p",
    "[",
    "-",
    "-",
    "-",
    "-",
    "-",
    "]",
    "p",
    "[",
    "]",
    "p",
  ],

  [
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
  ],
  [
    "p",
    "1",
    "-:",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "]",
    "p",
    "[",
    "-",
    "]",
    "p",
    "[",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-:",
    "2",
    "p",
  ],
  [
    "p",
    "|:",
    ":|",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "|:",
    ":|",
    "p",
  ],
  [
    "p",
    "|:",
    ":|",
    "p",
    "1",
    "-:",
    "-:",
    "-:",
    "-:",
    "-:",
    "2",
    "p",
    "^",
    "p",
    "1",
    "-:",
    "-:",
    "-:",
    "-:",
    "-:",
    "2",
    "p",
    "|:",
    ":|",
    "p",
  ],
  [
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    "",
    "",
    "",
    "",
    ":-",
    "3",
    "p",
    "_",
    "p",
    "4",
    ":-",
    "",
    "",
    "",
    "",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
  ],
  [
    "p",
    "4",
    "3",
    "p",
    "4",
    ":-",
    ":-",
    ":-",
    "3",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "4",
    ":-",
    ":-",
    ":-",
    "3",
    "p",
    "4",
    "3",
    "p",
  ],

  [
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "[",
    "-",
    "-",
    "-",
    "]",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
  ],

  [
    "p",
    "1",
    "2",
    "p",
    "1",
    "-:",
    "-:",
    "-:",
    "2",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "1",
    "-:",
    "-:",
    "-:",
    "2",
    "p",
    "1",
    "2",
    "p",
  ],
  [
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    "",
    "",
    "",
    "",
    "-:",
    "2",
    "p",
    "^",
    "p",
    "1",
    "-:",
    "",
    "",
    "",
    "",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
  ],
  [
    "p",
    "|:",
    ":|",
    "p",
    "4",
    ":-",
    ":-",
    ":-",
    ":-",
    ":-",
    "3",
    "p",
    "_",
    "p",
    "4",
    ":-",
    ":-",
    ":-",
    ":-",
    ":-",
    "3",
    "p",
    "|:",
    ":|",
    "p",
  ],
  [
    "p",
    "|:",
    ":|",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "|:",
    ":|",
    "p",
  ],
  [
    "p",
    "4",
    ":-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "]",
    "p",
    "[",
    "-",
    "]",
    "p",
    "[",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    ":-",
    "3",
    "p",
  ],
  [
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
  ],
  [
    "p",
    "[",
    "]",
    "p",
    "[",
    "-",
    "-",
    "-",
    "-",
    "-",
    "]",
    "p",
    "p",
    "p",
    "[",
    "-",
    "-",
    "-",
    "-",
    "-",
    "]",
    "p",
    "[",
    "]",
    "p",
  ],
  [
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "^",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
  ],
  [
    "p",
    "1",
    "2",
    "p",
    "1",
    "2",
    "p",
    "1",
    "-",
    "-",
    "2",
    "p",
    "|",
    "p",
    "1",
    "-",
    "-",
    "2",
    "p",
    "1",
    "2",
    "p",
    "1",
    "2",
    "p",
  ],
  [
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    "",
    "",
    ":|",
    "p",
    "|",
    "p",
    "|:",
    "",
    "",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
    "|:",
    ":|",
    "p",
  ],
  [
    "p",
    "4",
    "3",
    "p",
    "4",
    "3",
    "p",
    "4",
    "-",
    "-",
    "3",
    "p",
    "|",
    "p",
    "4",
    "-",
    "-",
    "3",
    "p",
    "4",
    "3",
    "p",
    "4",
    "3",
    "p",
  ],
  [
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "|",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
    "p",
  ],
];
var BaseGrid2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],

  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],

  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],

  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],

  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

  [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],

  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],

  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],

  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
let INDEXGLOBAL = 0;
let intervalID = null;
let score = 0;
let myGameOffline;
let scoreP1 = 0;
let scoreP2 = 0;
let rooms = [];
let games = [];
let roomToEmitTo;

let clients = new Map();
function generateRandomId(idLength) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < idLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const io = require("socket.io")({
  cors: {
    origin: "*",
  },
});

io.on("connection", (client) => {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = null;
  }
  client.on("startOfflineGame", handleOfflineGame);

  function handleOfflineGame(clientID) {
    console.log("offline start");
    let roomID = generateRandomId(5);
    rooms.push(roomID);
    client.join(roomID);
    let myGameSolo = new Game(roomID, roomID, true, clientID);
    games.push(myGameSolo);
  }

  client.emit("init", { data: "test" });
  client.on("keydown", handleKeyDown);
  client.on("keyup", handleKeyUp);

  function sendGameState(gameObject) {
    let hpaths = [];
    for (let i = 0; i < gameObject.ghosts.length; i++) {
      hpaths.push(gameObject.ghosts[i].hpath);
      delete gameObject.ghosts[i].hpath;
    }
    let gameToSend = JSON.parse(JSON.stringify(gameObject));
    for (let i = 0; i < gameObject.ghosts.length; i++) {
      gameObject.ghosts[i].hpath = hpaths[i];
    }

    io.to(gameObject.roomID).emit("gameState", { data: gameToSend });
  }

  client.on("newGameOnline", handleNewGameOnline);
  client.on("joinGame", handleJoinOnlineGame);
  function handleNewGameOnline(clientID) {
    let roomID = generateRandomId(5);
    client.join(roomID);
    rooms.push(roomID);
    let myGameOnline = new Game(roomID, roomID, false, clientID);
    games.push(myGameOnline);
    console.log(`Socket in NEW GAME ${clientID} joined room ${roomID}`);
    client.emit("gameCode", roomID);
  }
  function handleJoinOnlineGame(gameID, clientID) {
    let roomExist = false;
    let gameObjectO;
    for (var i = 0; i < rooms.length; i++) {
      if (gameID === rooms[i]) {
        roomExist = true;
      }
    }
    if (roomExist) {
      client.join(gameID);
      for (let i = 0; i < games.length; i++) {
        console.log("game ids ", gameID, games[i].gameID);
        if (gameID == games[i].gameID) {
          gameObjectO = games[i];
        }
      }
    }

    gameObjectO.pacMansArray[1].clientID = clientID;
    gameObjectO.gameID = gameID;
    clients.set(clientID, gameObjectO.pacMansArray[1]);
  }

  function handleKeyDown(key, clientID) {
    key = parseInt(key);
    let pacManPlayer = clients.get(clientID);
    if (!pacManPlayer) {
      return;
    }

    if (key == 87) {
      //w
      pacManPlayer.wPressed = true;
      for (var i = 0; i < boundaries.length; i++) {
        if (
          pacManPlayer.checkCollision(boundaries[i], 0, -pacManPlayer.speed)
        ) {
          pacManPlayer.velocity.y = 0;
          break;
        } else {
          pacManPlayer.velocity.y = -pacManPlayer.speed;
          pacManPlayer.direction = "up";
        }
      }
    }
    if (key == 65) {
      //a
      pacManPlayer.aPressed = true;
      for (var i = 0; i < boundaries.length; i++) {
        if (
          pacManPlayer.checkCollision(boundaries[i], -pacManPlayer.speed, 0)
        ) {
          pacManPlayer.velocity.x = 0;
          break;
        } else {
          pacManPlayer.velocity.x = -pacManPlayer.speed;
          pacManPlayer.direction = "left";
        }
      }
    }
    if (key == 83) {
      //s
      pacManPlayer.sPressed = true;

      for (var i = 0; i < boundaries.length; i++) {
        if (pacManPlayer.checkCollision(boundaries[i], 0, pacManPlayer.speed)) {
          pacManPlayer.velocity.y = 0;

          break;
        } else {
          pacManPlayer.velocity.y = pacManPlayer.speed;
          pacManPlayer.direction = "down";
        }
      }
    }
    if (key == 68) {
      //d
      pacManPlayer.dPressed = true;
      for (var i = 0; i < boundaries.length; i++) {
        if (pacManPlayer.checkCollision(boundaries[i], pacManPlayer.speed, 0)) {
          pacManPlayer.velocity.x = 0;
          break;
        } else {
          pacManPlayer.velocity.x = pacManPlayer.speed;
          pacManPlayer.direction = "right";
        }
      }
    }
  }

  function handleKeyUp(key, clientID) {
    let pacManPlayer = clients.get(clientID);
    if (!pacManPlayer) {
      return;
    }
    switch (key) {
      case 87: //w
        pacManPlayer.wPressed = false;
        break;
      case 65: //a
        pacManPlayer.aPressed = false;
        break;
      case 83: //s
        pacManPlayer.sPressed = false;
        break;
      case 68: //d
        pacManPlayer.dPressed = false;
        break;
    }
  }

  function gameEngineLoop() {
    for (let i = 0; i < games.length; i++) {
      if (!games[i].solo) {
        if (games[i].pacMansArray[1].clientID == -1) {
          continue;
        }
      }
      games[i].update();
      games[i].draw();
      sendGameState(games[i]);
      if (games[i].playerDiedToGhost || games[i].done) {
        games.splice(i, 1);
      }
    }
  }
  intervalID = setInterval(() => {
    gameEngineLoop();
  }, 1000 / 60);
});

io.listen(3000);
/** Game code */
class Game {
  constructor(roomID, gameID, solo, clientID1) {
    // this.canvas = document.getElementById("myCanvas");
    // this.ctx = this.canvas.getContext("2d");
    this.roomID = roomID;
    this.gameID = gameID;
    this.clientID1 = clientID1;
    this.sprites = [];
    this.canvasWidth = 1200;
    this.canvasHeight = 1200;
    this.sc = 0;
    this.playerDiedToGhost = false;
    this.playerWin1 = false;
    this.playerWin2 = false;
    this.done = false;
    this.solo = solo;
    this.pelletsArray = [];
    this.boundaries = [];
    this.ghosts = [];
    this.pacMansArray = [];
    if (solo) {
      this.startNewGameSolo();
    } else {
      this.startNewGameOnline();
    }
  }
  update() {
    for (var i = 0; i < this.sprites.length; i++) {
      this.playerDiedToGhost = this.sprites[i].update(
        this.sprites,
        this.solo,
        this.pacMansArray,
        this.ghosts
      );
      if (this.playerDiedToGhost) {
        this.done = true;
        this.win = false;
        break;
      }
    }

    //this.playerWins = true;
    for (let i = 0; i < this.sprites.length; i++) {
      if (
        (this.sprites[i] instanceof Pellet ||
          this.sprites[i] instanceof PowerUpPellet) &&
        this.sprites[i].destroyed
      ) {
        // worker.postMessage(this.sc);
        // worker.on("message", (score) => {
        //   this.sc = score;
        //   //this.sc += 10;
        // });
        this.sprites.splice(i, 1);
        break;
      }
      // } else if (
      //   (this.sprites[i] instanceof Pellet ||
      //     this.sprites[i] instanceof PowerUpPellet) &&
      //   !this.sprites[i].destroyed
      // ) {
      //   pellets.push(this.sprites[i]);
      // }

      if (this.sprites[i] instanceof Ghost && this.sprites[i].alive == false) {
        this.sprites.splice(i, 1);
      }
    }

    if (this.solo) {
      if (this.pacMansArray[0].score >= 3230) {
        this.playerWin1 = true;
        this.done = true;
      }
    } else {
      if (this.pacMansArray[0].score >= 1610) {
        this.playerWin1 = true;
        this.done = true;
      } else if (this.pacMansArray[1].score >= 1610) {
        this.playerWin2 = true;
        this.done = true;
      }
    }
    //}
  }
  draw() {
    // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight); //clear canvas to re-draw

    // for (var i = 0; i < this.sprites.length; i++)
    //   this.sprites[i].draw(this.ctx);

    for (var i = 0; i < this.sprites.length; i++) {
      if (this.sprites[i] instanceof PackMan) {
        this.sprites[i].draw(this.ctx);
      }
    }

    //pacManPlayer.draw();
  }
  addSprite(pSprite) {
    this.sprites.push(pSprite);
  }

  startNewGameSolo() {
    for (var i = 0; i < 25; i++) {
      for (var j = 0; j < 25; j++) {
        switch (BaseGrid[i][j]) {
          case "-":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeHorizontal.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "|":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeVertical.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "-:":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeHorizontalSi.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "|:":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeVerticalSi.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;

          case ":-":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeHorizontalSiB.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case ":|":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeVerticalSiR.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;

          case "1":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner1.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "2":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner2.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "3":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner3.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "4":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner4.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "b":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/block.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "[":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capLeft.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "]":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capRight.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "_":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capBottom.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "^":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capTop.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "+":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCross.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "5":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorTop.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "6":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorRight.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "7":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorBottom.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "8":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorLeft.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "p":
            this.pelletsArray.push(
              new Pellet(
                j * boundaryWidth + boundaryWidth / 2,
                i * boundaryHeight + boundaryHeight / 2,
                3,
                false
              )
            );
            this.addSprite(this.pelletsArray.slice(-1)[0]);
            break;
          case "PP":
            this.pelletsArray.push(
              new PowerUpPellet(
                j * boundaryWidth + boundaryWidth / 2,
                i * boundaryHeight + boundaryHeight / 2,
                8,
                false
              )
            );
            this.addSprite(this.pelletsArray.slice(-1)[0]);
            break;
        }
        if (BaseGrid2[i][j] != 1) {
          grid[i][j] = new node(i, j, false, 0, false, true, false);
        } else {
          grid[i][j] = new node(i, j, true, 0, true, false, false);
        }
      }
    }
    let pacManP1 = new PackMan(
      24,
      24,
      21,
      "none",
      true,
      0,
      {
        velocity: { x: 0, y: 0 },
      },
      this.clientID1
    );
    this.pacMansArray.push(pacManP1);
    clients.set(this.clientID1, pacManP1);

    let blinkyGhost = new Ghost(
      552,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "blinky",

      44,
      44
    );

    let pinkyGhost = new Ghost(
      600,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "pinky",

      44,
      44
    );

    let inkyGhost = new Ghost(
      648,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "inky",

      44,
      44
    );
    let clydeGhost = new Ghost(
      696,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "clyde",

      44,
      44
    );
    this.addSprite(pacManP1);

    this.addSprite(clydeGhost);
    this.addSprite(pinkyGhost);
    this.addSprite(inkyGhost);
    this.addSprite(blinkyGhost);
    this.ghosts.push(blinkyGhost);
    this.ghosts.push(inkyGhost);
    this.ghosts.push(pinkyGhost);
    this.ghosts.push(clydeGhost);
  }

  startNewGameOnline(clientID1) {
    for (var i = 0; i < 25; i++) {
      for (var j = 0; j < 25; j++) {
        switch (BaseGrid[i][j]) {
          case "-":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeHorizontal.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "|":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeVertical.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "-:":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeHorizontalSi.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "|:":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeVerticalSi.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;

          case ":-":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeHorizontalSiB.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case ":|":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeVerticalSiR.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;

          case "1":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner1.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "2":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner2.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);
            break;
          case "3":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner3.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "4":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCorner4.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "b":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/block.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "[":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capLeft.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "]":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capRight.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "_":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capBottom.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "^":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/capTop.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "+":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeCross.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "5":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorTop.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "6":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorRight.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "7":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorBottom.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "8":
            this.boundaries.push(
              new Boundary(j, i, true, "./images/pipeConnectorLeft.png")
            );
            this.addSprite(this.boundaries.slice(-1)[0]);

            break;
          case "p":
            this.pelletsArray.push(
              new Pellet(
                j * boundaryWidth + boundaryWidth / 2,
                i * boundaryHeight + boundaryHeight / 2,
                3,
                false
              )
            );
            this.addSprite(this.pelletsArray.slice(-1)[0]);
            break;
          case "PP":
            this.pelletsArray.push(
              new PowerUpPellet(
                j * boundaryWidth + boundaryWidth / 2,
                i * boundaryHeight + boundaryHeight / 2,
                8,
                false
              )
            );
            this.addSprite(this.pelletsArray.slice(-1)[0]);
            break;
        }
        if (BaseGrid2[i][j] != 1) {
          grid[i][j] = new node(i, j, false, 0, false, true, false);
        } else {
          grid[i][j] = new node(i, j, true, 0, true, false, false);
        }
      }
    }

    let pacManP1 = new PackMan(
      24,
      24,
      21,
      "none",
      true,
      0,
      {
        velocity: { x: 0, y: 0 },
      },
      this.clientID1
    );

    let pacManP2 = new PackMan(
      1176,
      24,
      21,
      "none",
      true,
      0,
      {
        velocity: { x: 0, y: 0 },
      },
      -1
    );
    this.pacMansArray.push(pacManP1);
    this.pacMansArray.push(pacManP2);

    clients.set(this.clientID1, pacManP1);

    blinkyGhost = new Ghost(
      552,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "blinky",

      44,
      44
    );

    pinkyGhost = new Ghost(
      600,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "pinky",

      44,
      44
    );

    inkyGhost = new Ghost(
      648,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "inky",

      44,
      44
    );
    clydeGhost = new Ghost(
      696,
      552,
      21,
      false,
      true,
      "none",
      { velocity: { x: 0, y: 0 } },
      "clyde",

      44,
      44
    );

    this.addSprite(pacManP1);
    this.addSprite(pacManP2);

    this.addSprite(clydeGhost);
    this.addSprite(pinkyGhost);
    this.addSprite(inkyGhost);
    this.addSprite(blinkyGhost);
    this.ghosts.push(blinkyGhost);
    this.ghosts.push(inkyGhost);
    this.ghosts.push(pinkyGhost);
    this.ghosts.push(clydeGhost);
  }
}

//Sprite
class Sprite {
  constructor() {
    this.canvasWidth = 1200;
    this.canvasHeight = 1200;
  }
  update() {}
  draw(ctx) {}
}

class PackMan extends Sprite {
  constructor(
    positionX,
    positionY,
    radius,
    poweredUp,
    alive,
    direction,
    { velocity },
    clientID
  ) {
    super();
    this.velocity = velocity;
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.poweredUp = poweredUp;
    this.alive = alive;
    this.direction = direction;
    this.speed = 5;
    this.wPressed = false;
    this.aPressed = false;
    this.sPressed = false;
    this.dPressed = false;
    this.mouthOpen = false;
    this.mouthAngle = 0;
    this.rt = 0;
    this.clientID = clientID;
    this.score = 0;
  }

  checkCollision(rectangle, velocityX, velocityY) {
    if (
      this.positionX - this.radius + velocityX <= 0 ||
      this.positionX + this.radius + velocityX >= this.canvasWidth ||
      this.positionY - this.radius + velocityY <= 0 ||
      this.positionY + this.radius + velocityY >= this.canvasHeight
    ) {
      return true;
    }

    for (var i = 0; i < boundaries.length; i++) {
      if (
        this.positionY - this.radius + velocityY <=
          rectangle.positionY + rectangle.height &&
        this.positionX + this.radius + velocityX >= rectangle.positionX &&
        this.positionY + this.radius + velocityY >= rectangle.positionY &&
        this.positionX - this.radius + velocityX <=
          rectangle.positionX + rectangle.width
      ) {
        return true;
      }
    }
    return false;
  }

  update(spritesArray) {
    if (this.wPressed) {
      for (var i = 0; i < boundaries.length; i++) {
        if (this.checkCollision(boundaries[i], 0, -this.speed)) {
          this.velocity.y = 0;
          break;
        } else {
          this.velocity.y = -this.speed;
          //this.velocity.x = 0;
          this.direction = "up";
        }
      }
    }
    if (this.aPressed) {
      for (var i = 0; i < boundaries.length; i++) {
        if (this.checkCollision(boundaries[i], -this.speed, 0)) {
          this.velocity.x = 0;
          break;
        } else {
          this.velocity.x = -this.speed;
          // this.velocity.y = 0;
          this.direction = "left";
        }
      }
    }
    if (this.sPressed) {
      for (var i = 0; i < boundaries.length; i++) {
        if (this.checkCollision(boundaries[i], 0, this.speed)) {
          this.velocity.y = 0;
          break;
        } else {
          this.velocity.y = this.speed;
          //  this.velocity.x = 0;
          this.direction = "down";
        }
      }
    }
    if (this.dPressed) {
      for (var i = 0; i < boundaries.length; i++) {
        if (this.checkCollision(boundaries[i], this.speed, 0)) {
          this.velocity.x = 0;
          break;
        } else {
          this.velocity.x = this.speed;
          // this.velocity.y = 0;
          this.direction = "right";
        }
      }
    }

    for (let i = 0; i < boundaries.length; i++) {
      if (
        this.checkCollision(boundaries[i], this.velocity.x, this.velocity.y)
      ) {
        this.velocity.x = 0;
        this.velocity.y = 0;
        return;
      }
    }
    this.positionX += this.velocity.x;
    this.positionY += this.velocity.y;
    if (this.velocity.x > 0) {
      this.rt = 0;
    } else if (this.velocity.x < 0) {
      this.rt = Math.PI;
    } else if (this.velocity.y < 0) {
      this.rt = Math.PI * 1.5;
    } else if (this.velocity.y > 0) {
      this.rt = Math.PI / 2;
    }
  }

  draw(ctx) {
    // ctx.save();
    // ctx.translate(this.positionX, this.positionY);
    // ctx.rotate(this.rt);
    // ctx.translate(-this.positionX, -this.positionY);

    // Calculate the angle of Pac-Man's mouth based on whether it's open or closed
    if (this.mouthOpen) {
      this.mouthAngle += 0.14;
      if (this.mouthAngle >= Math.PI / 4) {
        this.mouthOpen = false;
      }
    } else {
      this.mouthAngle -= 0.14;
      if (this.mouthAngle <= 0) {
        this.mouthOpen = true;
      }
    }

    // Draw Pac-Man with his mouth open or closed

    // ctx.beginPath();
    // ctx.arc(
    //   this.positionX,
    //   this.positionY,
    //   this.radius,
    //   1.25 * this.mouthAngle,
    //   1 * (Math.PI * 2 - this.mouthAngle)
    // );
    // ctx.lineTo(this.positionX, this.positionY);
    // ctx.fillStyle = "yellow";
    // ctx.fill();
    // ctx.closePath();
    // ctx.restore();
  }
}
class Pellet extends Sprite {
  constructor(positionX, positionY, radius, destroyed) {
    super();
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.destroyed = destroyed;
  }

  update(spritesArray, gameSolo, pacMansArray) {
    let pacManPlayer = pacMansArray[0];
    let a = this.positionX - pacManPlayer.positionX;
    let b = this.positionY - pacManPlayer.positionY;
    let distance = a * a + b * b;
    if (
      distance <=
      this.radius + pacManPlayer.radius + pacManPlayer.speed * 10 //10 works?
    ) {
      if (!this.destroyed) {
        worker.postMessage({ id: "p1", value: pacManPlayer.score });
        worker.on("message", (message) => {
          if (message.id == "p1") {
            pacManPlayer.score = message.value;
          }
        });
      }
      this.destroyed = true;
    }

    if (!gameSolo) {
      let pacManPlayer2 = pacMansArray[1];
      // console.log("SECOND PAC MAN IS ", pacManPlayer);
      a = this.positionX - pacManPlayer2.positionX;
      b = this.positionY - pacManPlayer2.positionY;
      distance = a * a + b * b;
      if (
        distance <=
        this.radius + pacManPlayer2.radius + pacManPlayer2.speed * 10 //10 works?
      ) {
        if (!this.destroyed) {
          worker.postMessage({ id: "p2", value: pacManPlayer2.score });
          worker.on("message", (message) => {
            if (message.id == "p2") {
              pacManPlayer2.score = message.value;
            }
          });
        }
        this.destroyed = true;
      }
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }
}

class PowerUpPellet extends Sprite {
  constructor(positionX, positionY, radius, destroyed) {
    super();
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.destroyed = destroyed;
  }

  update(spritesArray, solo, pacMansArray, ghostsArray) {
    let pacManPlayer = pacMansArray[0];
    let a = this.positionX - pacManPlayer.positionX;
    let b = this.positionY - pacManPlayer.positionY;
    let distance = a * a + b * b;
    if (
      distance <=
      this.radius + pacManPlayer.radius + pacManPlayer.speed * 10 //10 works?
    ) {
      this.destroyed = true;

      for (let i = 0; i < ghostsArray.length; i++) {
        ghostsArray[i].scared = true;
        setTimeout(() => {
          ghostsArray[i].scared = false;
        }, 4000);
      }
    }

    if (!solo) {
      let pacManPlayer = pacMansArray[1];
      let a = this.positionX - pacManPlayer.positionX;
      let b = this.positionY - pacManPlayer.positionY;
      let distance = a * a + b * b;
      if (
        distance <=
        this.radius + pacManPlayer.radius + pacManPlayer.speed * 10 //10 works?
      ) {
        this.destroyed = true;

        for (let i = 0; i < ghostsArray.length; i++) {
          ghostsArray[i].scared = true;
          setTimeout(() => {
            ghostsArray[i].scared = false;
          }, 4000);
        }
      }
    }
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "Green";
    ctx.fill();
    ctx.closePath();
  }
}

class Ghost extends Sprite {
  constructor(
    positionX,
    positionY,
    radius,
    poweredUp,
    alive,
    direction,
    { velocity },
    name,
    width,
    height
  ) {
    super();
    this.velocity = velocity;
    this.positionX = positionX;
    this.positionY = positionY;
    this.radius = radius;
    this.poweredUp = poweredUp;
    this.alive = alive;
    this.direction = "";
    this.speed = 5;
    this.collisions = [];
    this.previousCollisions = [];
    this.name = name;
    let s =
      grid[Math.floor(this.positionY / 48)][Math.floor(this.positionX / 48)];
    this.hpath = aStar(s, grid[0][0]);
    this.timeSinceHpathUpdated = 0;
    this.width = width;
    this.height = height;
    this.tickCountF = 5;
    this.tickCount = 0;
    this.switchFrame = false;
    this.scared = false;
    this.timePassed = 60;
  }
  checkCollisionG(rectangle, velocityX, velocityY) {
    for (var i = 0; i < boundaries.length; i++) {
      if (
        this.positionY - this.radius + velocityY <=
          rectangle.positionY + rectangle.height &&
        this.positionX + this.radius + velocityX >= rectangle.positionX &&
        this.positionY + this.radius + velocityY >= rectangle.positionY &&
        this.positionX - this.radius + velocityX <=
          rectangle.positionX + rectangle.width
      ) {
        return true;
      }
    }
    return false;
  }

  update(spritesarray, gameSolo, pacMansArray) {
    this.timeSinceHpathUpdated++;
    let pacManPlayer;
    let pacManPlayer2;
    for (var i = 0; i < spritesarray.length; i++) {
      if (spritesarray[i] instanceof PackMan) {
        pacManPlayer = spritesarray[i];
        if (!gameSolo) {
          pacManPlayer2 = spritesarray[i + 1];
        }
        break;
      }
    }

    this.tickCount++;
    if (this.tickCount >= this.tickCountF) {
      if (this.switchFrame) {
        this.switchFrame = false;
      } else {
        this.switchFrame = true;
      }
      this.tickCount = 0;
    }

    if (this.velocity.x > 0) {
      this.direction = "right";
    } else if (this.velocity.x < 0) {
      this.direction = "left";
    }
    if (this.velocity.y > 0) {
      this.direction = "down";
    } else if (this.velocity.y < 0) {
      this.direction = "up";
    }

    if (
      Math.hypot(
        this.positionX - pacManPlayer.positionX,
        this.positionY - pacManPlayer.positionY
      ) <
      this.radius + pacManPlayer.radius
    ) {
      console.log("collision ghost player", this.name);

      if (this.scared) {
        this.alive = false;
        console.log("ghost dies");
      } else {
        return true;
      }
    }

    if (!gameSolo) {
      if (
        Math.hypot(
          this.positionX - pacManPlayer2.positionX,
          this.positionY - pacManPlayer2.positionY
        ) <
        this.radius + pacManPlayer2.radius
      ) {
        if (this.scared) {
          this.alive = false;
          console.log("ghost dies");
        } else {
          return true;
        }
      }
    }

    this.previousCollisions = this.collisions;
    this.collisions = [];

    for (var i = 0; i < boundaries.length; i++) {
      if (
        !this.collisions.includes("left") &&
        (this.checkCollisionG(boundaries[i], -this.speed, 0) ||
          this.positionX - this.radius - this.speed <= 0)
      ) {
        this.collisions.push("left");
      }

      if (
        !this.collisions.includes("right") &&
        (this.checkCollisionG(boundaries[i], this.speed, 0) ||
          this.positionX + this.radius + this.speed >= this.canvasWidth)
      ) {
        this.collisions.push("right");
      }
      if (
        !this.collisions.includes("down") &&
        (this.checkCollisionG(boundaries[i], 0, this.speed) ||
          this.positionY + this.radius + this.speed >= this.canvasHeight)
      ) {
        this.collisions.push("down");
      }
      if (
        !this.collisions.includes("up") &&
        (this.checkCollisionG(boundaries[i], 0, -this.speed) ||
          this.positionY - this.radius - this.speed <= 0)
      ) {
        this.collisions.push("up");
      }
    }

    if (
      JSON.stringify(this.previousCollisions) !==
      JSON.stringify(this.collisions)
    ) {
      let directionsToGo = ["up", "down", "left", "right"];
      for (var i = 0; i < directionsToGo.length; i++) {
        for (var j = 0; j < this.collisions.length; j++) {
          if (this.collisions[j] == directionsToGo[i]) {
            directionsToGo[i] = "n";
          }
        }
      }

      let dtg = [];
      for (let i = 0; i < directionsToGo.length; i++) {
        if (directionsToGo[i] != "n") {
          dtg.push(directionsToGo[i]);
        }
      }
      var directionToTake = "";

      //choose direction to move
      if (this.scared) {
        directionToTake = this.clydeBehavior(dtg); //if ghost scared move randomly
      } else {
        switch (this.name) {
          case "clyde":
            directionToTake = this.clydeBehavior(dtg);
            break;
          case "blinky":
            directionToTake = this.blinkyBehavior(dtg, pacManPlayer);
            break;
          case "pinky":
            directionToTake = this.pinkyBehavior(dtg, pacManPlayer);
            break;
          case "inky":
            directionToTake = this.clydeBehavior(dtg, pacManPlayer);
            break;
        }
      }

      switch (directionToTake) {
        case "up":
          this.velocity.y = -this.speed;
          this.velocity.x = 0;
          break;
        case "down":
          this.velocity.y = this.speed;
          this.velocity.x = 0;
          break;
        case "right":
          this.velocity.x = this.speed;
          this.velocity.y = 0;
          break;
        case "left":
          this.velocity.x = -this.speed;
          this.velocity.y = 0;
          break;
      }
    }

    this.positionX += this.velocity.x;
    this.positionY += this.velocity.y;
    this.timePassed++;
    this.previousCollisions = [];
  }

  clydeBehavior(dtg) {
    //choose random direction to move
    var rndDrirection = dtg[Math.floor(Math.random() * dtg.length)];
    return rndDrirection;
  }

  blinkyBehavior(dtg, pacManPlayer) {
    // Find the shortest path to the target tile
    return this.shortestPath(
      Math.floor(pacManPlayer.positionY / 48),
      Math.floor(pacManPlayer.positionX / 48),
      dtg
    );
  }

  pinkyBehavior(dtg, pacManPlayer) {
    let pacManDx = 0;
    let pacManDy = 0;
    if (pacManPlayer.velocity.x > 0) {
      pacManDx = 1;
    } else if (pacManPlayer.velocity.x < 0) {
      pacManDx = -1;
    }
    if (pacManPlayer.velocity.y > 0) {
      pacManDy = -1;
    } else if (pacManPlayer.velocity.y < 0) {
      pacManDy = 1;
    }

    // Calculate the target tile based on Pac-Man's position
    let targetX = pacManPlayer.positionX + 4 * pacManDx * 48;
    let targetY = pacManPlayer.positionY + 4 * pacManDy * 48;

    return this.shortestPath(
      Math.floor(targetY / 48),
      Math.floor(targetX / 48),
      dtg
    );
  }

  inkyBehavior(dtg, pacManPlayer) {
    let pacManDx = 0;
    let pacManDy = 0;
    if (pacManPlayer.velocity.x > 0) {
      pacManDx = 1;
    } else if (pacManPlayer.velocity.x < 0) {
      pacManDx = -1;
    }
    if (pacManPlayer.velocity.y > 0) {
      pacManDy = -1;
    } else if (pacManPlayer.velocity.y < 0) {
      pacManDy = 1;
    }

    // Calculate the target tile based on Pac-Man's position
    let targetX = pacManPlayer.positionX + 2 * pacManDx * 48;
    let targetY = pacManPlayer.positionY + 2 * pacManDy * 48;

    var diffX = targetX - blinkyGhost.positionX;
    var diffY = targetY - blinkyGhost.positionY;
    targetX += 2 * diffX;
    targetY += 2 * diffY;

    return this.shortestPath(
      Math.floor(targetY / 48),
      Math.floor(targetX / 48),
      dtg
    );
  }

  draw(ctx) {
    // ctx.beginPath();
    // ctx.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    // ctx.fillStyle = this.color;
    let frameIndex = 0;
    if (this.switchFrame) {
      frameIndex = 16;
    }
    let startPoint = 0;
    if (this.direction == "right") {
      startPoint = 0;
    } else if (this.direction == "left") {
      startPoint = 32;
    } else if (this.direction == "up") {
      startPoint = 64;
    } else if (this.direction == "down") {
      //try just else
      startPoint = 96;
    }
    if (this.scared) {
      startPoint = 0;
      let imS = new Image();
      imS.src = "./GhostSprites/SGB.png";
      ctx.drawImage(
        imS,
        startPoint + frameIndex,
        0,
        14,
        14,
        this.positionX - this.radius,
        this.positionY - this.radius,
        this.width,
        this.height
      );
    } else {
      ctx.drawImage(
        this.image,
        startPoint + frameIndex,
        0,
        14,
        14,
        this.positionX - this.radius,
        this.positionY - this.radius,
        this.width,
        this.height
      );
    }

    // for (var i = 0; i < this.hpath.length; i++) {
    //   ctx.rect(this.hpath[i].posY * 48, this.hpath[i].posX * 48, 20, 20);
    // }
    // ctx.fill();

    ctx.closePath();
  }

  /**
   * Uses Astar algorithm to get the shortest path
   * to pacMan, and calls the moveG() method to move the
   * ghost there.
   */
  shortestPath(targetX, targetY, dtg) {
    //this.hpath = [];
    if (targetX < 0) {
      targetX = targetX * -1;
    }
    if (targetY < 0) {
      targetY = targetY * -1;
    }

    if (targetX >= 25) {
      targetX = 24;
    }
    if (targetY >= 25) {
      targetY = 24;
    }

    if (grid[targetX][targetY].isWall) {
      for (let i = targetX; i < grid.length; i++) {
        for (let j = targetY; j < grid[i].length; j++) {
          if (!grid[i][j].isWall) {
            targetX = i;
            targetY = j;
            break;
          }
        }
      }
    }

    let s =
      grid[Math.floor(this.positionY / 48)][Math.floor(this.positionX / 48)];
    let g = grid[targetX][targetY];

    if (this.timeSinceHpathUpdated > 5) {
      this.hpath = aStar(s, g);
      this.timeSinceHpathUpdated = 0;
    }
    let ls = 0;

    if (this.hpath.length > 1) {
      ls = this.hpath.length - 2;
    } else {
      ls = 0;
    }

    let chosenPrev = false;
    let difference = [];
    let d = "";

    if (this.hpath.length == 0) {
      return this.clydeBehavior(dtg);
    }
    if (this.hpath[ls].posX * 48 + 24 < this.positionY) {
      //there's some issue with these if statements     23 308
      chosenPrev = true;
      difference.push(Math.abs(this.hpath[ls].posX * 48 + 24 - this.positionY));
      d = "up";
    }
    if (this.hpath[ls].posY * 48 + 24 < this.positionX) {
      difference.push(Math.abs(this.hpath[ls].posY * 48 + 24 - this.positionX));

      if (chosenPrev) {
        if (difference[0] < difference[1]) {
          d = "left";
        }
      } else {
        d = "left";
        chosenPrev = true;
      }
    }
    if (this.hpath[ls].posY * 48 + 24 > this.positionX) {
      difference.push(Math.abs(this.hpath[ls].posY * 48 + 24 - this.positionX));
      let rDifference = Math.abs(
        this.hpath[ls].posY * 48 + 24 - this.positionX
      );
      let thereExistsBigger = false;
      if (chosenPrev) {
        for (let i = 0; i < difference.length; i++) {
          if (rDifference < difference[i]) {
            thereExistsBigger = true;
            break;
          }
        }
        if (!thereExistsBigger) {
          d = "right";
        }
      } else {
        d = "right";
        chosenPrev = true;
      }
    }
    if (this.hpath[ls].posX * 48 + 24 > this.positionY) {
      difference.push(Math.abs(this.hpath[ls].posX * 48 + 24 - this.positionY));
      let dDifference = Math.abs(
        this.hpath[ls].posX * 48 + 24 - this.positionY
      );
      let thereExistsBigger = false;
      if (chosenPrev) {
        for (let i = 0; i < difference.length; i++) {
          if (dDifference < difference[i]) {
            thereExistsBigger = true;
            break;
          }
        }
        if (thereExistsBigger == false) {
          d = "down";
        }
      } else {
        d = "down";
      }
    }

    for (var i = 0; i < dtg.length; i++) {
      if (d == dtg[i]) {
        this.hpath.pop();
        return d;
      }
    }
    return "";
  }
}

class node {
  constructor(posX, posY, open, parent, hasPellete, isWall, powerUpPellet) {
    this.posX = posX;
    this.posY = posY;
    this.open = open;
    this.parent = parent;
    this.hasPellete = hasPellete;
    this.isWall = isWall;
    if (hasPellete) {
      this.powerUpPellet = powerUpPellet;
    }
  }
}
class Boundary {
  constructor(positionX, positionY, takeImag, image) {
    this.width = 48;
    this.height = 48;
    this.positionX = positionX * this.width;
    this.positionY = positionY * this.height;
    this.imagesrc = image;
    this.takeImag = takeImag;
  }

  update() {}

  draw(ctx) {
    if (this.takeImag) {
      ctx.drawImage(
        this.image,
        this.positionX,
        this.positionY,
        this.width,
        this.height
      ); // experiment with different sizes later
    } else {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
    }
  }
}

let boundaries = [];
let boundaryWidth = 48;
let boundaryHeight = 48;
let grid = new Array(25);
for (var i = 0; i < 25; i++) {
  grid[i] = new Array(25);
}

/**Game mode 1 */
function startGameRegular() {
  pellets = [];
  boundaries = [];
  for (var i = 0; i < 25; i++) {
    for (var j = 0; j < 25; j++) {
      switch (BaseGrid[i][j]) {
        case "-":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeHorizontal.png")
          );
          break;
        case "|":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeVertical.png")
          );
          break;
        case "-:":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeHorizontalSi.png")
          );
          break;
        case "|:":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeVerticalSi.png")
          );
          break;

        case ":-":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeHorizontalSiB.png")
          );
          break;
        case ":|":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeVerticalSiR.png")
          );
          break;

        case "1":
          boundaries.push(new Boundary(j, i, true, "./images/pipeCorner1.png"));

          break;
        case "2":
          boundaries.push(new Boundary(j, i, true, "./images/pipeCorner2.png"));
          break;
        case "3":
          boundaries.push(new Boundary(j, i, true, "./images/pipeCorner3.png"));

          break;
        case "4":
          boundaries.push(new Boundary(j, i, true, "./images/pipeCorner4.png"));

          break;
        case "b":
          boundaries.push(new Boundary(j, i, true, "./images/block.png"));

          break;
        case "[":
          boundaries.push(new Boundary(j, i, true, "./images/capLeft.png"));

          break;
        case "]":
          boundaries.push(new Boundary(j, i, true, "./images/capRight.png"));

          break;
        case "_":
          boundaries.push(new Boundary(j, i, true, "./images/capBottom.png"));

          break;
        case "^":
          boundaries.push(new Boundary(j, i, true, "./images/capTop.png"));

          break;
        case "+":
          boundaries.push(new Boundary(j, i, true, "./images/pipeCross.png"));

          break;
        case "5":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeConnectorTop.png")
          );

          break;
        case "6":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeConnectorRight.png")
          );

          break;
        case "7":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeConnectorBottom.png")
          );

          break;
        case "8":
          boundaries.push(
            new Boundary(j, i, true, "./images/pipeConnectorLeft.png")
          );

          break;
        case "p":
          pellets.push(
            new Pellet(
              j * boundaryWidth + boundaryWidth / 2,
              i * boundaryHeight + boundaryHeight / 2,
              3,
              false
            )
          );
          break;
        case "PP":
          pellets.push(
            new PowerUpPellet(
              j * boundaryWidth + boundaryWidth / 2,
              i * boundaryHeight + boundaryHeight / 2,
              8,
              false
            )
          );
          break;
      }
      if (BaseGrid2[i][j] != 1) {
        grid[i][j] = new node(i, j, false, 0, false, true, false);
      } else {
        grid[i][j] = new node(i, j, true, 0, true, false, false);
      }
    }
  }

  blinkyGhost = new Ghost(
    552,
    552,
    21,
    false,
    true,
    "none",
    { velocity: { x: 0, y: 0 } },
    "blinky",

    44,
    44
  );

  pinkyGhost = new Ghost(
    600,
    552,
    21,
    false,
    true,
    "none",
    { velocity: { x: 0, y: 0 } },
    "pinky",

    44,
    44
  );

  inkyGhost = new Ghost(
    648,
    552,
    21,
    false,
    true,
    "none",
    { velocity: { x: 0, y: 0 } },
    "inky",

    44,
    44
  );
  clydeGhost = new Ghost(
    696,
    552,
    21,
    false,
    true,
    "none",
    { velocity: { x: 0, y: 0 } },
    "clyde",

    44,
    44
  );
  ghosts = [blinkyGhost, pinkyGhost, inkyGhost, clydeGhost];
}
startGameRegular();

/**
 * Takes the parameters curr, which is a node and finds
 * the distance between it and the goal node as an integer.
 */
function heuristic(curr, goal) {
  var dX = Math.abs(curr.posX - goal.posX);
  var dY = Math.abs(curr.posY - goal.posY);
  return dX + dY;
}

/**
 * Takes a parameter curr, which is a node and returns
 * its distance from the start node as an integer.
 */
function distanceFromStart(curr, start) {
  var dX = Math.abs(curr.posX - start.posX);
  var dY = Math.abs(curr.posY - start.posY);

  return dX + dY;
}

/**
 * Takes a parameter curr, a node, calls both methods heurstic and
 * distanceFromStart, returns their results added together.
 */
function totalCost(curr, goal, start) {
  var h = heuristic(curr, goal);
  var dF = distanceFromStart(curr, start);
  return h + dF;
}

/**
 * Take a node object as parameter and gets 4  neigboring nodes to it
 * at most and returns them in a list.
 */
function neighbours(curr) {
  var neighbors = []; //list to hold node objects
  var x = curr.posX; // indices of current node in the grid 2d array
  var y = curr.posY;

  if (x - 1 >= 0) {
    //get node at x -1 if it's valid
    if (!grid[x - 1][y].isWall) neighbors.push(grid[x - 1][y]); //add node to list if it is
  }

  if (x + 1 < 25) {
    if (!grid[x + 1][y].isWall) neighbors.push(grid[x + 1][y]);
  }

  if (y - 1 >= 0) {
    if (!grid[x][y - 1].isWall) neighbors.push(grid[x][y - 1]);
  }

  if (y + 1 < 25) {
    if (!grid[x][y + 1].isWall) neighbors.push(grid[x][y + 1]);
  }

  return neighbors;
}

/**
 * A star search algorithm finds the path between the start
 * node and goal node if possible.
 */
function aStar(start, goal) {
  var openList = []; //Open list that holds nodes to be, or already traversed.
  var lowestTotal = Infinity; //lowestTotal to find the lowest totalCost of a node between a list of nodes
  var curr = start; // node curr that is equal to start when running the first search
  var neighbourNodes = []; //list to hold neighboring nodes of a node, gets all its input from calling the method neighbors.
  var MaximumNodes = 6000; //Open List can't have more than 1200 nodes as each node can have 4 others only, we have 300 nodes so 300 x 4 = 1200

  /* Added new list that holds all nodes iterated on (nodes that become closed) so that we don't need to reset all
       the grid's node to open since we call aStar algorithm multiple times here, and we only reset the ones in this list to open */
  var nodesPartOfPath = [];

  while (openList.length < MaximumNodes) {
    neighbourNodes = neighbours(curr); //add neighboring nodes of current node to list
    for (var i = 0; i < neighbourNodes.length; i++) {
      // iterate through neighbours and add each node to the openList
      if (neighbourNodes[i] && neighbourNodes[i].open) {
        //if node is open we make the current node its parent
        neighbourNodes[i].parent = curr;
      }
      openList.push(neighbourNodes[i]);
    }

    for (var i = 0; i < openList.length; i++) {
      //Iterate through the open list and find the node with the lowest totalCost
      if (openList[i]) {
        var tCost = totalCost(openList[i], goal, start);
        if (openList[i].open == true && tCost < lowestTotal) {
          //Make the node with lowest total cost the current node
          curr = openList[i];
          lowestTotal = tCost; //update lowestTotal
        }
      }
    }
    nodesPartOfPath.push(curr);
    curr.open = false; //current node will be traversed so it becomes closed
    lowestTotal = Infinity; // update lowestToal to infinity again

    if (curr == goal) {
      // if the current node is the goal node, we have the path
      p = []; //list that holds the path nodes
      p = tracePath(start, goal, nodesPartOfPath); //call tracePath that gives the shortest path and draws it on the grid and returns it
      return p; //return the path
    }
  }
  for (var i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      if (!grid[i][j].isWall) {
        grid[i][j].open = true;
      }
    }
  }
  return [];
}
/**
 * Traces the path given using each nodes parents backwards from goal to start
 * and draws it on the grid by coloring the shortest path cells yellow.
 */
function tracePath(start, goal, nodesPartOfPath) {
  var nodes = goal; //We work from the goal node backwards
  var pathRev = []; //takes in all nodes to display them in order
  var lastIndex = -1; //we use this as to iterate backwards through pathRev instead of spending time to reverse the list

  while (nodes.parent != start) {
    // We keep going through parent nodes until we reach the start node
    nodes = nodes.parent;
    pathRev.push(nodes);
    lastIndex++;
  }
  pathRev.push(start);
  for (var i = 0; i < nodesPartOfPath.length; i++) {
    nodesPartOfPath[i].open = true;
  }
  return pathRev;
}
