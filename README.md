# Pac-Man Multiplayer (With a Twist)

## 🎮 Overview

**Pac-Man Multiplayer** is a custom-built, multiplayer-ready, browser-based arcade game inspired by the classic Pac-Man, with added modern twists. Built using **vanilla JavaScript** on the frontend and **Node.js with Socket.IO** on the backend, the game features:

- 🎭 Two-player simultaneous play  
- 🧠 Ghost AI  
- 🍒 Power-up mechanics  
- 💬 Real-time WebSocket communication  
- ⚙️ Multithreading for backend computations using `worker_threads`

---

## 🌐 Features

- **Multiplayer mode:** Players can create or join games using a room code system.
- **Ghost interactions:** AI-controlled ghosts chase players.
- **Power pellets:** Temporarily enable Pac-Man to eat ghosts.
- **Real-time updates:** Game state is synced across clients using Socket.IO.
- **Worker thread example:** Simple offloaded computation demo in `nw.js`.

---

## 🛠️ Tech Stack

| Layer      | Tech Used                          |
|------------|------------------------------------|
| Frontend   | HTML5 Canvas, JavaScript, CSS      |
| Backend    | Node.js, Socket.IO                 |
| Worker     | Node.js `worker_threads` module    |
| Multiplayer| WebSockets (Socket.IO)             |

---
🎮 Gameplay Instructions
Create Game: Click "Create Game" to start a new session. A game code will be shown.

Join Game: Enter the game code in another tab/device to join as Player 2.

Controls:

Player 1: W A S D

Player 2: Arrow keys

Goal: Eat all the pellets and avoid ghosts. Power pellets allow you to eat ghosts temporarily.

Pictures:
![image](https://github.com/user-attachments/assets/a7fc5505-7140-4c25-9b73-812dcd7d3d61)
![image](https://github.com/user-attachments/assets/06d149ea-c329-48a7-96ce-282068ae31f9)
![image](https://github.com/user-attachments/assets/531bc65c-f110-4ecb-9a31-91c938a8bc78)
![image](https://github.com/user-attachments/assets/04af4edc-9c89-400c-8e62-7d244cbee9c6)

Installation:
Clone the repo and run npm install in the backend. Open the front-end index.html in a browser using live server.


