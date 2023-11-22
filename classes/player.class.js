import {
  Sitting,
  Running,
  Jumping,
  Falling,
  Rolling,
  Diving,
  Hit,
} from "./playerStates.class.js";
import { CollisionAnimation } from "./collision-Animation.class.js";

export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = 0;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.vy = 0;
    this.weight = 1;
    this.image = document.getElementById("player");
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame;
    this.fps = 40;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.speed = 0;
    this.maxSpeed = 10;
    this.states = [
      new Sitting(this.game),
      new Running(this.game),
      new Jumping(this.game),
      new Falling(this.game),
      new Rolling(this.game),
      new Diving(this.game),
      new Hit(this.game),
    ];
  }

  /**
   * Updates the player position and sprite animation
   * @param {String} input 
   * @param {Num} deltaTime 
   */
  update(input, deltaTime) {
    this.checkCollision();
    this.currentState.handleInput(input);
    this.horizontalMovement(input);
    this.verticalMovement();
    this.spriteAnimation(deltaTime);
  }

  /**
   * Updates the horizontal position of the player
   * @param {String} input 
   */
  horizontalMovement(input) {
    if (input.includes("d") && this.currentState !== this.states[6])
      this.speed = this.maxSpeed;
    else if (input.includes("a") && this.currentState !== this.states[6])
      this.speed = -this.maxSpeed;
    else this.speed = 0;
    if (this.x < 0) this.x = 0;
    if (this.x > this.game.width - this.width)
      this.x = this.game.width - this.width;
    this.x += this.speed;
  }

  /**
   * Updates the vertical position of the player
   */
  verticalMovement() {
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;
    if (this.y > this.game.height - this.height - this.game.groundMargin)
      this.y = this.game.height - this.height - this.game.groundMargin;
  }

  /**
   * Updates the spriteAnimation for the player
   * @param {Num} deltaTime 
   */
  spriteAnimation(deltaTime) {
    if (this.frameTimer > this.frameInterval) {
      this.frameTimer = 0;
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    } else {
      this.frameTimer += deltaTime;
    }
  }

  /**
   * Draws the player and a debug rectangle if game is set to debug
   * @param {ctx} context 
   */
  draw(context) {
    context.strokeStyle = "white";
    if (this.game.debug)
      context.strokeRect(this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  /**
   * Checks if player is on the ground
   * @returns true or false
   */
  onGround() {
    return this.y >= this.game.height - this.height - this.game.groundMargin;
  }

  /**
   * Sets the states of the player corresponding to active player states and adjusts game speed
   * @param {Obj} state 
   * @param {Num} speed 
   */
  setState(state, speed) {
    this.currentState = this.states[state];
    this.game.speed = this.game.maxSpeed * speed;
    this.currentState.enter();
  }

  /**
   * Check if player is colliding with any enemy 
   */
  checkCollision() {
    this.game.enemies.forEach((enemy, i) => {
      if (
        enemy.x < this.x + this.width &&
        enemy.x + enemy.width > this.x &&
        enemy.y < this.y + this.height &&
        enemy.y + enemy.height > this.y
      ) {
        this.isColliding(enemy);
        if (
          this.currentState === this.states[4] ||
          this.currentState === this.states[5]
        ) {
          this.game.score++;
        } else {
          this.setState(6, 0);
          this.game.score -= 5;
        }
      }
    });
  }

  /**
   * Markes enemies for deletion if colliding with the player and pushes a new collision animation into collisions array
   * @param {Obj} enemy 
   */
  isColliding(enemy) {
    enemy.markedForDeletion = true;
    this.game.collisions.push(
      new CollisionAnimation(
        this.game,
        enemy.x + enemy.width * 0.5,
        enemy.y + enemy.height * 0.5
      )
    );
  }
}
