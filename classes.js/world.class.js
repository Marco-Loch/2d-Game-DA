class World {
  character = new Character(150, 200);
  ground;
  foreground;
  middleDecor;
  level = LEVEL1;
  gui = new StatusBarBackground();
  statusBar = new StatusBar();
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
    // this.generateEnemies(1, Endboss, this.character);
    this.setWorld();
    this.run();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camara_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addObjectsToMap(this.level.middleDecor);
    this.addObjectsToMap(this.level.foregrounds);
    this.addObjectsToMap(this.level.healthCoin);
    this.addObjectsToMap(this.level.manaCoin);
    this.addObjectsToMap(this.level.enemies);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.grounds);

    this.ctx.translate(-this.camara_x, 0);

    this.addToMap(this.gui);
    this.addToMap(this.statusBar);

    let self = this;
    requestAnimationFrame(function () {
      globalThis.frame++;
      self.draw();
      // console.log(globalThis.frame % 4);
    });
  }

  run() {
    setInterval(() => {
      this.checkCollisions();
    }, 100);
  }

  checkCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        console.log('Collision with Character', enemy, 'hp: ', this.character.energy);
      }
    });
    this.level.healthCoin.forEach((healthCoin) => {
      if (this.character.isColliding(healthCoin)) {
        if (this.character.energy < 100) {
          this.character.energy += 20;
          this.statusBar.setPercentage(this.character.energy);
        }
        console.log('Collision with Character', healthCoin, 'hp: ', this.character.energy);
        this.level.healthCoin.splice(this.level.healthCoin.indexOf(this.level.healthCoin), 1); //Das Objekt muss aus dem Array gelöscht werden
      }
    });
    this.level.manaCoin.forEach((manaCoin) => {
      if (this.character.isColliding(manaCoin)) {
        if (this.character.mana < 100) {
          this.character.mana += 20;
          this.statusBar.setPercentage(this.character.mana);
        }
        console.log('Collision with Character', manaCoin, 'mana: ', this.character.mana);
        this.level.manaCoin.splice(this.level.manaCoin.indexOf(this.level.manaCoin), 1); //Das Objekt muss aus dem Array gelöscht werden
      }
    });
  }

  generateEnemies(count, enemyClass, character = null) {
    for (let i = 0; i < count; i++) {
      const positionX = Math.random() * 3000 + 400;
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

    // mo.drawFrame(this.ctx); // CollisionFrame zum Debuggen

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
