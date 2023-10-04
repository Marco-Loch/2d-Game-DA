class World {
  character = new Character(150, 200);
  ground;
  foreground;
  middleDecor;

  level = LEVEL1;
  // gui = new StatusBarBackground();
  canvas;
  keyboard;
  ctx;
  camara_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.ground = new Ground(0);
    this.foreground = new Foreground(0);
    this.middleDecor = new MiddleDecor(0);
    this.draw();
    this.generateEnemies(4, Golem, this.character);
    this.generateEnemies(1, Endboss, this.character);
    this.setWorld();
    this.checkCollisions();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camara_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.middleDecor);
    this.addObjectsToMap(this.level.foregrounds);

    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.grounds);
    // this.addObjectsToMap(this.gui);

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

  generateEnemies(count, enemyClass, character = null) {
    for (let i = 0; i < count; i++) {
      const positionX = Math.random() * 500 + 800;
      this.level.enemies.push(new enemyClass(positionX, 374, character));
    }
  }

  setWorld() {
    this.character.world = this;
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

    mo.drawFrame(this.ctx); // CollisionFrame zum Debuggen

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
