import { GameAudio } from "./audio.class.js";

/**
 * Creates a particle class
 */
class Particle {
  constructor(game) {
    this.game = game;
    this.markedForDeletion = false;
    // this.instantiateAudio();
  }

  /**
   * General update function for each particle and marks them for deletion, after it has reached a certain minimum size
   */
  update() {
    this.x -= this.speedX + this.game.speed;
    this.y -= this.speedY;
    this.size *= 0.97;
    if (this.size < 0.5) this.markedForDeletion = true;
  }
}

////////////////////////////DUST///////////////////////////////

export class Dust extends Particle {
  constructor(game, x, y) {
    super(game);
    this.x = x;
    this.y = y;
    this.size = Math.random() * 10 + 10;
    this.speedX = Math.random();
    this.speedY = Math.random();
    this.color = "rgba(0,0,0,0.6)";
  }

  /**
   * Draws the dust particles
   * @param {ctx} context
   */
  draw(context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    context.fill();
  }
}

//////////////////////////////SPLASH////////////////////////////

export class Splash extends Particle {
  constructor(game, x, y) {
    super(game);
    this.size = Math.random() * 100 + 150;
    this.x = x - this.size * 0.4;
    this.y = y - this.size * 0.5;
    this.speedX = Math.random() * 6 - 4;
    this.speedY = Math.random() * 2 + 2;
    this.gravity = 0;
    this.image = document.getElementById("fire");
  }

  /**
   * Specialised update method for splash particles to fall back down to the ground using gravity
   */
  update() {
    super.update();
    this.gravity += 0.1;
    this.y += this.gravity;
  }

  /**
   * Simple method to draw splash particles
   * @param {ctx} context
   */
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.size, this.size);
  }
}

////////////////////////////////FIRE///////////////////////////

export class Fire extends Particle {
  constructor(game, x, y) {
    super(game);
    this.image = document.getElementById("fire");
    this.size = Math.random() * 100 + 50;
    this.x = x;
    this.y = y;
    this.speedX = 1;
    this.speedY = 1;
    this.angle = 0;
    this.va = Math.random() * 0.2 - 0.1;
  }

  /**
   * Update method for fire particles using math to randomize each particle
   */
  update() {
    super.update();
    this.angle += this.va;
    this.x += Math.sin(this.angle * 5);
  }

  /**
   * Draw method for each fire particle
   * @param {ctx} context
   */
  draw(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.drawImage(
      this.image,
      -this.size * 0.5,
      -this.size * 0.5,
      this.size,
      this.size
    );
    context.restore();
  }
}
