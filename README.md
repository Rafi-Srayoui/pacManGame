# BTBSSGame – Break the Bricks Side-Scrolling Game

## Overview

**BTBSSGame** is a browser-based JavaScript arcade game where the player controls a paddle to bounce a ball and break all bricks on the screen. Inspired by classic games like *Breakout*, this version introduces **bullet-time power-ups**, a custom game engine, and retro-style game logic written entirely in vanilla JavaScript with no dependencies.

The game is fully rendered on an HTML5 `<canvas>` and showcases:
- Collision detection
- Power-up mechanics
- Sprite system with object-oriented design
- Real-time updates using `requestAnimationFrame`

## How to Play

### Controls

| Key        | Action                                 |
|------------|----------------------------------------|
| ← / →      | Move paddle left / right               |
| Space      | Pause / Unpause game                   |
| S          | Fire bullets (when powered up)         |
| Enter      | Restart game after win or loss         |

### Gameplay Features

- Break all the bricks to win.
- If the ball touches the bottom of the canvas, you lose.
- Random bricks may drop a **power-up**, allowing the paddle to shoot bullets (press `S`).
- Score is shown in the top-left corner.

