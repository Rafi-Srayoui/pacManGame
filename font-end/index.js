var canvasGlobal = document.getElementById("myCanvas");
var ctxGlobal = canvasGlobal.getContext("2d");
let scoreL = document.getElementById("scoreLabel");
let scoreL2 = document.getElementById("scoreLabel2");
scoreL2.hidden = true;
let pcML = document.getElementById("labelPM");
let createGameButton = document.getElementById("cgb");
let lOR = document.getElementById("labelOR");
let gameCodeInput = document.getElementById("gameCodeInput");
let joinGameButton = document.getElementById("jgb");
let displayGameCode = document.getElementById("displayGameCode");
let displayGameCodeHeader = document.getElementById("GCDH");

let pacManEatsPelletSound = new Audio("./sounds/munch_1.mp3");
pacManEatsPelletSound.volume = 0.1;
pacManEatsPelletSound.playbackRate = 1;
let pacManDiesSound = new Audio("./sounds/pacman_death.mp3");
pacManDiesSound.volume = 0.1;
let pacManEatsGhostSound = new Audio("./sounds/pacman_eatghost.mp3");
pacManEatsGhostSound.volume = 0.1;

let canvas = canvasGlobal;
let ctx = ctxGlobal;
//const socket = io("http://localhost:3000");
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

createGameButton.addEventListener("click", newGame);
joinGameButton.addEventListener("click", joinGame);

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
let myID = generateRandomId(7);

function newGame() {
  socket.emit("newGameOnline", myID);
  socket.on("gameState", handleGameState);
  socket.on("gameCode", handleGameCode);
}
function joinGame() {
  let code = gameCodeInput.value;
  socket.emit("joinGame", code, myID);
  socket.on("gameState", handleGameState);

  onlineMenuHide();
}

function handleUnkownGame() {
  alert("unknow game error ");
}

function handleLimitExceeded() {
  alert("player limit exceeded");
}

function handleGameCode(gameCode) {
  displayGameCode.innerText = gameCode;
}

let canDrawBoundaries = false;

let imageBlock = new Image();
imageBlock.src = "./images/block.png";

let imagecapLeft = new Image();
imagecapLeft.src = "./images/capLeft.png";

let imagecapRight = new Image();
imagecapRight.src = "./images/capRight.png";

let imagecapTop = new Image();
imagecapTop.src = "./images/capTop.png";

let imagecapBottom = new Image();
imagecapBottom.src = "./images/capBottom.png";

let imagePipeHorizontal = new Image();
imagePipeHorizontal.src = "./images/pipeHorizontal.png";

let imagePipeVertical = new Image();
imagePipeVertical.src = "./images/pipeVertical.png";

let imagePipeHorizontalSi = new Image();
imagePipeHorizontalSi.src = "./images/pipeHorizontalSi.png";

let imagePipeVerticalSi = new Image();
imagePipeVerticalSi.src = "./images/pipeVerticalSi.png";

let imagePipeHorizontalSiB = new Image();
imagePipeHorizontalSiB.src = "./images/pipeHorizontalSiB.png";

let imagePipeVerticalSiR = new Image();
imagePipeVerticalSiR.src = "./images/pipeVerticalSiR.png";

let imagePipeCorner1 = new Image();
imagePipeCorner1.src = "./images/pipeCorner1.png";

let imagePipeCorner2 = new Image();
imagePipeCorner2.src = "./images/pipeCorner2.png";

let imagePipeCorner3 = new Image();
imagePipeCorner3.src = "./images/pipeCorner3.png";

let imagePipeCorner4 = new Image();
imagePipeCorner4.src = "./images/pipeCorner4.png";

let imagePipeCross = new Image();
imagePipeCross.src = "./images/pipeCross.png";

let imagePipeConnectorTop = new Image();
imagePipeConnectorTop.src = "./images/pipeConnectorTop.png";
let imagePipeConnectorBottom = new Image();
imagePipeConnectorBottom.src = "./images/pipeConnectorBottom.png";

let imagePipeConnectorLeft = new Image(48, 48);
imagePipeConnectorLeft.src = "./images/pipeConnectorLeft.png";
let imagePipeConnectorRight = new Image(48, 48);
imagePipeConnectorRight.src = "./images/pipeConnectorRight.png";
imagePipeConnectorRight.onload = function () {
  canDrawBoundaries = true;
  console.log("loadedImages");
};
let canDrawGhosts = false;

let imageGhostBlinky = new Image();
imageGhostBlinky.src = "./GhostSprites/G1S.png";

let imageGhostPinky = new Image();
imageGhostPinky.src = "./GhostSprites/G2S.png";

let imageGhostInky = new Image();
imageGhostInky.src = "./GhostSprites/G3S.png";

let imageGhostClyde = new Image();
imageGhostClyde.src = "./GhostSprites/G4S.png";
let imageGhostScared1 = new Image();
imageGhostScared1.src = "./GhostSprites/SGB.png";
imageGhostScared1.onload = function () {
  canDrawGhosts = true;
  console.log("loaded Ghosts");
};

function handleKeyDown(e) {
  socket.emit("keydown", e.keyCode, myID);
}

function handleKeyUp(e) {
  socket.emit("keyup", e.keyCode, myID);
}
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

function drawGhost(
  positionX,
  positionY,
  name,
  direction,
  switchFrame,
  width,
  height,
  radius,
  scared
) {
  let startPoint = 0;
  if (direction == "right") {
    startPoint = 0;
  } else if (direction == "left") {
    startPoint = 32;
  } else if (direction == "up") {
    startPoint = 64;
  } else if (direction == "down") {
    //try just else
    startPoint = 96;
  }

  let frameIndex = 0;
  if (switchFrame) {
    frameIndex = 16;
  }

  if (scared) {
    startPoint = 0;
    ctx.drawImage(
      imageGhostScared1,
      startPoint + frameIndex,
      0,
      14,
      14,
      positionX - radius,
      positionY - radius,
      width,
      height
    );
    return;
  }
  switch (name) {
    case "blinky":
      ctx.drawImage(
        imageGhostBlinky,
        startPoint + frameIndex,
        0,
        14,
        14,
        positionX - radius,
        positionY - radius,
        width,
        height
      );
      break;
    case "pinky":
      ctx.drawImage(
        imageGhostPinky,
        startPoint + frameIndex,
        0,
        14,
        14,
        positionX - radius,
        positionY - radius,
        width,
        height
      );
      break;
    case "inky":
      ctx.drawImage(
        imageGhostInky,
        startPoint + frameIndex,
        0,
        14,
        14,
        positionX - radius,
        positionY - radius,
        width,
        height
      );
      break;
    case "clyde":
      ctx.drawImage(
        imageGhostClyde,
        startPoint + frameIndex,
        0,
        14,
        14,
        positionX - radius,
        positionY - radius,
        width,
        height
      );
      break;
  }
}

function drawBoundary(positionX, positionY, image) {
  switch (image) {
    case "./images/block.png":
      ctx.drawImage(imageBlock, positionX, positionY, 48, 48);

      break;
    case "./images/capLeft.png":
      ctx.drawImage(imagecapLeft, positionX, positionY, 48, 48);

      break;
    case "./images/capRight.png":
      ctx.drawImage(imagecapRight, positionX, positionY, 48, 48);

      break;
    case "./images/capTop.png":
      ctx.drawImage(imagecapTop, positionX, positionY, 48, 48);

      break;
    case "./images/capBottom.png":
      ctx.drawImage(imagecapBottom, positionX, positionY, 48, 48);

      break;
    case "./images/pipeHorizontal.png":
      ctx.drawImage(imagePipeHorizontal, positionX, positionY, 48, 48);

      break;
    case "./images/pipeVertical.png":
      ctx.drawImage(imagePipeVertical, positionX, positionY, 48, 48);

      break;
    case "./images/pipeHorizontalSi.png":
      ctx.drawImage(imagePipeHorizontal, positionX, positionY, 48, 48);

      break;
    case "./images/pipeHorizontalSiB.png":
      ctx.drawImage(imagePipeHorizontalSiB, positionX, positionY, 48, 48);

      break;
    case "./images/pipeVerticalSi.png":
      ctx.drawImage(imagePipeVerticalSi, positionX, positionY, 48, 48);

      break;
    case "./images/pipeVerticalSiR.png":
      ctx.drawImage(imagePipeVerticalSiR, positionX, positionY, 48, 48);

      break;
    case "./images/pipeCorner1.png":
      ctx.drawImage(imagePipeCorner1, positionX, positionY, 48, 48);

      break;
    case "./images/pipeCorner2.png":
      ctx.drawImage(imagePipeCorner2, positionX, positionY, 48, 48);

      break;
    case "./images/pipeCorner3.png":
      ctx.drawImage(imagePipeCorner3, positionX, positionY, 48, 48);

      break;
    case "./images/pipeCorner4.png":
      ctx.drawImage(imagePipeCorner4, positionX, positionY, 48, 48);

      break;
    case "./images/pipeCross.png":
      ctx.drawImage(imagePipeCross, positionX, positionY, 48, 48);

      break;
    case "./images/pipeConnectorTop.png":
      ctx.drawImage(
        imagePipeConnectorTop,
        positionX * 48,
        positionY * 48,
        48,
        48
      );

      break;
    case "./images/pipeConnectorBottom.png":
      ctx.drawImage(
        imagePipeConnectorBottom,
        positionX * 48,
        positionY * 48,
        48,
        48
      );

      break;
    case "./images/pipeConnectorLeft.png":
      ctx.drawImage(
        imagePipeConnectorLeft,
        positionX * 48,
        positionY * 48,
        48,
        48
      );

      break;
    case "./images/pipeConnectorRight.png":
      ctx.drawImage(
        imagePipeConnectorRight,
        positionX * 48,
        positionY * 48,
        48,
        48
      );

      break;
  }
  // myImage.onload = function () {
  //   ctx.drawImage(myImage, positionX * 48, positionY * 48, 48, 48);
  // };

  // let myImage = new Image();
  // myImage.src = image;
  // myImage.onload = function () {
  //   ctx.drawImage(myImage, positionX * 48, positionY * 48, 48, 48);
  // };
}

function drawPlayer(positionX, positionY, radius, mouthAngle, rt) {
  ctx.save();
  ctx.translate(positionX, positionY);
  ctx.rotate(rt);
  ctx.translate(-positionX, -positionY);
  // Draw Pac-Man with his mouth open or closed
  ctx.beginPath();
  ctx.arc(
    positionX,
    positionY,
    radius,
    1.25 * mouthAngle,
    1 * (Math.PI * 2 - mouthAngle)
  );
  ctx.lineTo(positionX, positionY);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
  ctx.restore();
  //  ctx.beginPath();
  playerPrevX = positionX;
  playerPrevY = positionY;
}
function drawPellet(positionX, positionY, radius) {
  ctx.beginPath();
  ctx.arc(positionX, positionY, radius, 0, Math.PI * 2);
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();
}
function drawPowerUpPellet(positionX, positionY, radius) {
  ctx.beginPath();
  ctx.arc(positionX, positionY, radius, 0, Math.PI * 2);
  ctx.fillStyle = "Green";
  ctx.fill();
  ctx.closePath();
}

function drawGameOver(player1win, player2win, gameSolo) {
  if (gameSolo) {
    if (player1win) {
      ctx.font = "100px  sans";
      ctx.fillStyle = "red";

      ctx.fillText("You", 250, 510);
      ctx.fillText("Win", 700, 510);
      return;
    }
  }

  if (player1win || player2win) {
    ctx.font = "100px  sans";
    ctx.fillStyle = "green";
    let plN = 0;
    if (player1win) {
      plN = "1";
    } else {
      plN = "2";
    }

    ctx.fillText("Player " + plN, 250, 510);
    ctx.fillText("Wins", 700, 510);
  } else {
    ctx.font = "100px  sans";
    ctx.fillStyle = "red";

    ctx.fillText("You", 250, 510);
    ctx.fillText("Lose", 700, 510);
  }
}

let playerPrevX = 0;
let playerPrevY = 0;
let play1PrevS = 0;
let play2PrevS = 0;
function drawUpdate(gameState) {
  let pellets = gameState.data.pelletsArray;
  let boundaries = gameState.data.boundaries;
  // console.log("game,", gameState.data.pacManPlayer);
  let player = gameState.data.pacMansArray[0];
  let player2;
  if (gameState.data.pacMansArray.length > 1) {
    player2 = gameState.data.pacMansArray[1];
  }

  //console.log(boundaries[0]);
  if (canDrawBoundaries) {
    for (let i = 0; i < boundaries.length; i++) {
      drawBoundary(
        boundaries[i].positionX,
        boundaries[i].positionY,
        boundaries[i].imagesrc
      );
    }
    if (player2) {
      if (play1PrevS != player.score) {
        pacManEatsPelletSound.play();
      }
      if (play2PrevS != player2.score) {
        pacManEatsPelletSound.play();
      }
      scoreL.innerHTML = "Score 1 : " + player.score;
      scoreL2.hidden = false;
      scoreL2.innerHTML = "Score 2 : " + player2.score;
      play1PrevS = player.score;
      play2PrevS = player2.score;
    } else {
      if (play1PrevS != player.score) {
        pacManEatsPelletSound.play();
      }
      scoreL.innerHTML = "Score : " + player.score;
      play1PrevS = player.score;
    }
  }

  if (canDrawGhosts) {
    for (let i = 0; i < gameState.data.ghosts.length; i++) {
      if (gameState.data.ghosts[i].alive) {
        drawGhost(
          gameState.data.ghosts[i].positionX,
          gameState.data.ghosts[i].positionY,
          gameState.data.ghosts[i].name,
          gameState.data.ghosts[i].direction,
          gameState.data.ghosts[i].switchFrame,
          gameState.data.ghosts[i].width,
          gameState.data.ghosts[i].height,
          gameState.data.ghosts[i].radius,
          gameState.data.ghosts[i].scared
        );
      }
    }
  }
  pacManEatsPelletSound.play();

  for (let i = 0; i < pellets.length; i++) {
    if (!pellets[i].destroyed) {
      drawPellet(pellets[i].positionX, pellets[i].positionY, pellets[i].radius);
    }
  }
  drawPlayer(
    player.positionX,
    player.positionY,
    player.radius,
    player.mouthAngle,
    player.rt
  );
  if (player2) {
    drawPlayer(
      player2.positionX,
      player2.positionY,
      player2.radius,
      player2.mouthAngle,
      player2.rt
    );
  }
  if (gameState.data.done) {
    if (player2) {
      drawGameOver(gameState.data.playerWin1, gameState.data.playerWin2);
    } else {
      drawGameOver(gameState.data.playerWin1, false, true);
    }
  }
}

function drawUpdateOnline(gameStateO) {
  console.log(gameStateO[0]);
  let pellets = gameStateO[0].pellets;
  let boundaries = gameStateO[0].boundaries;
  //console.log("game,", gameStateO[0].pacManPlayer1.boundaries);
  let playerP1 = gameStateO[0].pacManPlayer1;
  let playerP2 = gameStateO[1].pacManPlayer2;

  //console.log(boundaries[0]);
  if (canDrawBoundaries) {
    for (let i = 0; i < boundaries.length; i++) {
      drawBoundary(
        boundaries[i].positionX,
        boundaries[i].positionY,
        boundaries[i].imagesrc
      );
    }
    //scoreL.innerHTML = "Score : " + gameStateO.data.score;
  }

  for (let i = 0; i < pellets.length; i++) {
    if (!pellets[i].destroyed) {
      drawPellet(pellets[i].positionX, pellets[i].positionY, pellets[i].radius);
    }
  }

  drawPlayer(
    playerP1.positionX,
    playerP1.positionY,
    playerP1.radius,
    playerP1.mouthAngle,
    playerP1.rt
  );

  drawPlayer(
    playerP2.positionX,
    playerP2.positionY,
    playerP2.radius,
    playerP2.mouthAngle,
    playerP2.rt
  );
}

let gMouseX = 0;
let gMouseY = 0;
document.addEventListener("mousemove", function (event) {
  // Get the mouse coordinates relative to the document
  var rect = canvasGlobal.getBoundingClientRect();
  gMouseX = event.pageX - rect.left;
  gMouseY = event.pageY - rect.top;
});

function onlineMenuHide() {
  displayGameCode.hidden = true;
  displayGameCodeHeader.hidden = true;
  pcML.hidden = true;
  createGameButton.hidden = true;
  lOR.hidden = true;
  gameCodeInput.hidden = true;
  joinGameButton.hidden = true;
}
onlineMenuHide();
function onlineMenuShow() {
  pcML.hidden = false;
  createGameButton.hidden = false;
  lOR.hidden = false;
  gameCodeInput.hidden = false;
  joinGameButton.hidden = false;
  displayGameCode.hidden = false;
  displayGameCodeHeader.hidden = false;
}

class GameMenu {
  constructor(positionX, positionY, numberOfButtons, color) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.numberOfButtons = numberOfButtons;
    this.color = color;
    this.height = 130;
    this.width = 650;
    this.textColorD = "#777777";
    this.b1selected = false;
    this.b2selected = false;
    this.b3selected = false;
    this.gcImage = new Image();
    this.gcImage.src = "./images/characteresPG.png";
  }

  update() {
    if (this.isMouseWithinRect(this.lx1, this.ly1, this.width, this.height)) {
      this.b1selected = true;
    } else {
      this.b1selected = false;
    }
    if (this.isMouseWithinRect(this.lx2, this.ly2, this.width, this.height)) {
      this.b2selected = true;
    } else {
      this.b2selected = false;
    }
    if (this.isMouseWithinRect(this.lx3, this.ly3, this.width, this.height)) {
      this.b3selected = true;
    } else {
      this.b3selected = false;
    }
    document.onmousedown = (event) => {
      if (this.b1selected) {
        console.log("test");
        this.b1selected = false;
        startGameOffline();

        clearInterval(lgInterval);
      } else if (this.b2selected) {
        onlineMenuShow();
        this.b2selected = false;
        startOnline = true;
      } else if (this.b3selected) {
      }
    };
  }

  isMouseWithinRect(startX, startY, width, height) {
    // Add an event listener to the document to track mouse movement
    let mousewithin = false;
    // Get the mouse coordinates relative to the document
    // Check if the mouse is within the rectangle
    if (
      gMouseX >= startX &&
      gMouseX <= startX + width &&
      gMouseY >= startY &&
      gMouseY <= startY + height
    ) {
      mousewithin = true;
    } else {
      mousewithin = false;
    }
    return mousewithin;
  }

  draw(ctx) {
    ctx.beginPath();

    ctx.font = "100px Sans-Serif";
    ctx.fillStyle = "white";
    ctx.fillText("Pac-Man Game", 280, 100);
    ctx.font = "50px Sans-Serif";
    ctx.fillStyle = "white";
    ctx.fillText("The Characters", 450, 200);

    ctx.drawImage(this.gcImage, 455, 270, 350, 50);

    this.drawB1(ctx);
    this.drawB2(ctx);
    this.drawB3(ctx);

    ctx.closePath();
  }

  drawB1(ctx) {
    ctx.beginPath();
    if (this.b1selected) {
      ctx.fillStyle = "white";
      this.line1w = 2;
    } else {
      ctx.fillStyle = this.textColorD;
      this.line1w = 0.5;
    }

    this.lx1 = 300;
    this.ly1 = 400;
    ctx.lineWidth = this.line1w;
    ctx.moveTo(this.lx1, this.ly1);
    ctx.lineTo(this.lx1, this.ly1 + 130);
    ctx.moveTo(this.lx1, this.ly1);
    ctx.lineTo(this.lx1 + 650, this.ly1);
    ctx.lineTo(this.lx1 + 650, this.ly1 + 130);
    ctx.lineTo(this.lx1, this.ly1 + 130);
    ctx.strokeStyle = "red";
    ctx.font = "50px Sans-Serif";
    ctx.fillText("Play Game", this.lx1 + 650 / 3.1, this.ly1 + 75);
    ctx.stroke();
    ctx.closePath();
  }
  drawB2(ctx) {
    ctx.beginPath();
    this.lx2 = 300;
    this.ly2 = 600;
    if (this.b2selected) {
      ctx.fillStyle = "white";

      this.line2w = 2;
    } else {
      ctx.fillStyle = this.textColorD;
      this.line2w = 0.5;
    }

    ctx.lineWidth = this.line2w;
    ctx.moveTo(this.lx2, this.ly2);
    ctx.lineTo(this.lx2, this.ly2 + 130);
    ctx.moveTo(this.lx2, this.ly2);
    ctx.lineTo(this.lx2 + 650, this.ly2);
    ctx.lineTo(this.lx2 + 650, this.ly2 + 130);
    ctx.lineTo(this.lx2, this.ly2 + 130);
    ctx.strokeStyle = "red";
    ctx.font = "50px  Sans-Serif";
    ctx.fillText("Online Mode", this.lx2 + 650 / 3.1, this.ly2 + 75);
    ctx.stroke();
    ctx.closePath();
  }

  drawB3(ctx) {
    ctx.beginPath();
    this.lx3 = 300;
    this.ly3 = 800;
    if (this.b3selected) {
      ctx.fillStyle = "white";
      this.line3w = 2;
    } else {
      ctx.fillStyle = this.textColorD;
      this.line3w = 0.5;
    }

    ctx.lineWidth = this.line3w;
    ctx.moveTo(this.lx3, this.ly3);
    ctx.lineTo(this.lx3, this.ly3 + 130);
    ctx.moveTo(this.lx3, this.ly3);
    ctx.lineTo(this.lx3 + 650, this.ly3);
    ctx.lineTo(this.lx3 + 650, this.ly3 + 130);
    ctx.lineTo(this.lx3, this.ly3 + 130);
    ctx.strokeStyle = "red";
    ctx.font = "50px Sans-Serif";
    ctx.fillText("Credits", this.lx3 + 650 / 2.5, this.ly3 + 75);
    ctx.stroke();
    ctx.closePath();
  }
}

let gameMenu = new GameMenu(0, 0, 2, "white");

let playerNumber;

function handleInit(plNumber) {
  console.log("data ", plNumber);
  playerNumber = plNumber;
}
let startOffline = true;
let startOnline = false;

function handleGameState(gameState) {
  if (!joinGameButton.hidden) {
    onlineMenuHide();
  }
  // gameState = JSON.parse(gameState);
  ctxGlobal.clearRect(0, 0, 1400, 1400);
  drawUpdate(gameState);
}

function handleGameStateOnline(gameStateO) {
  onlineMenuHide();

  ctxGlobal.clearRect(0, 0, 1400, 1400);
  drawUpdateOnline(gameStateO);
}
let socket;
socket = io("http://localhost:3000");

function startGameOffline() {
  // socket = io("http://localhost:3000");
  console.log("startgame of");
  socket.emit("startOfflineGame", myID);

  socket.on("init", handleInit);
  socket.on("gameState", handleGameState);
}

function startGameOnline() {
  socket.emit("newGameOnline");
  socket.on("gameCode", handleGameCode);
  socket.on("gameState", handleGameState);

  socket.on("gameStateO", handleGameStateOnline);

  socket.on("unkownGame", handleUnkownGame);
  socket.on("limitExceeded", handleLimitExceeded);
}

function lg() {
  gameMenu.update();
  gameMenu.draw(ctx);
}
let lgInterval;
lgInterval = setInterval(() => {
  ctxGlobal.clearRect(0, 0, 1400, 1400);
  if (!startOnline) {
    lg();
  } else {
    clearInterval(lgInterval);
  }
}, 1000 / 60);
