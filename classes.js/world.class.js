class World {
  character = new Character(150, 200);
  ground = new Ground();
  level = LEVEL1;

  canvas;
  keyboard;
  ctx;
  camara_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.generateEnemies(3, Golem);
    this.generateEnemies(1, Endboss);
    this.setWorld();
    this.checkCollisions();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camara_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.grounds);

    this.ctx.translate(-this.camara_x, 0);

    let self = this;
    requestAnimationFrame(function () {
      globalThis.frame++;
      self.draw();
      // console.log(globalThis.frame % 4);
    });
  }

  checkCollisions() {
    setInterval(() => {
      this.level.enemies.forEach((enemy) => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();

          console.log('Collision with Character', enemy, this.character.energy);
        }
      });
    }, 100);
  }

  generateEnemies(count, enemyClass) {
    for (let i = 0; i < count; i++) {
      const positionX = Math.random() * 500 + 400;
      this.level.enemies.push(new enemyClass(positionX, 374));
    }
  }

  setWorld() {
    this.character.world = this;
    this.ground.world = this;
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    if (mo.otherDirection) {
      this.flipImage(mo);
    }

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipImageBack(mo);
    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  flipImageBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
