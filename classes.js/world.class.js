class World {
  character = new Character(150, 200, world);
  ground;
  foreground;
  middleDecor;
  level = LEVEL1;
  gui = new StatusBarBackground();
  statusBar = new StatusBar();
  manaBar = new ManaBar();
  fsControl = new FullscreenControl();
  canvas;
  keyboard;
  ctx;
  camara_x = 0;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;

    this.draw();
    this.generateEnemies(4, Golem, this.character);
    // this.generateEnemies(1, Endboss, this.character);
    this.setWorld();
    this.run();
    console.log('Current Mana: ', this.character.mana);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //Movable Objects
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
    //Static Objects
    this.addToMap(this.gui);
    this.addToMap(this.statusBar);
    this.addToMap(this.fsControl);
    this.addToMap(this.manaBar);

    let self = this;
    requestAnimationFrame(function () {
      globalThis.frame++;
      self.draw();
      // console.log(globalThis.frame % 4);
    });
  }

  run() {
    setInterval(() => {
      this.checkEnemyCollisions();
      this.checkHealthCoinCollision();
      this.checkManaCoinCollision();
      this.checkWeaponCollision();
    }, 100);
  }

  checkEnemyCollisions() {
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit();
        this.statusBar.setPercentage(this.character.energy);
        console.log('Collision with Character', enemy, 'hp: ', this.character.energy);
      }
    });
  }

  checkHealthCoinCollision() {
    this.level.healthCoin.forEach((healthCoin, index) => {
      if (
        this.character.energy < 100 &&
        this.character.x +
          this.character.offsetX +
          this.character.width -
          this.character.offsetWidth >=
          healthCoin.x + healthCoin.offsetX &&
        this.character.x + this.character.offsetX <=
          healthCoin.x + healthCoin.offsetX + healthCoin.width - healthCoin.offsetWidth &&
        this.character.y +
          this.character.offsetY +
          this.character.height -
          this.character.offsetHeight >=
          healthCoin.y + healthCoin.offsetY &&
        this.character.y + this.character.offsetY <=
          healthCoin.y + healthCoin.height - healthCoin.offsetHeight
      ) {
        if (this.character.energy < 100) {
          this.character.energy += 20;
          this.statusBar.setPercentage(this.character.energy);
        }
        console.log('Collision with Character', healthCoin, 'hp: ', this.character.energy);
        this.level.healthCoin.splice(index, 1);
      }
    });
  }

  checkManaCoinCollision() {
    this.level.manaCoin.forEach((manaCoin, index) => {
      if (
        this.character.x +
          this.character.offsetX +
          this.character.width -
          this.character.offsetWidth >=
          manaCoin.x + manaCoin.offsetX &&
        this.character.x + this.character.offsetX <=
          manaCoin.x + manaCoin.offsetX + manaCoin.width - manaCoin.offsetWidth &&
        this.character.y +
          this.character.offsetY +
          this.character.height -
          this.character.offsetHeight >=
          manaCoin.y + manaCoin.offsetY &&
        this.character.y + this.character.offsetY <=
          manaCoin.y + manaCoin.height - manaCoin.offsetHeight
      ) {
        if (this.character.mana < 6) {
          this.character.mana += 1;
          this.manaBar.resolveManaImageIndex(this.character.mana);
        }
        console.log('Collision with Character', manaCoin, 'mana: ', this.character.mana);
        this.level.manaCoin.splice(index, 1);
      }
    });
  }

  checkWeaponCollision() {
    if (this.character.weapon && this.character.weapon.active) {
      this.level.enemies.forEach((enemy, index) => {
        if (this.character.weapon.isColliding(enemy)) {
          enemy.takeDamage(this.character.weapon.damage);
          // Überprüft, ob der Feind tot ist und entfernt ihn aus der Liste
          if (enemy.isDead()) {
            this.level.enemies.splice(index, 1);
          }
        }
      });
      this.character.endAttack(); // Beende den Angriff nach der Kollision
    }
  }

  /**
   *
   * @param {Anzahl} count
   * @param {Gegnertyp} enemyClass
   * @param {Character} character
   */
  generateEnemies(count, enemyClass, character = null) {
    for (let i = 0; i < count; i++) {
      const positionX = Math.random() * 3000 + 400;
      this.level.enemies.push(new enemyClass(positionX, 374, character));
    }
  }

  setWorld() {
    this.character.world = this;
  }

  /**
   *
   * @param {Objekte aus Arrays} objects
   */
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

  characterDied(){
    
    // Iteriere durch die Hintergrundobjekte und stoppe ihre Animation
    this.level.backgroundObjects.forEach((bgObject) => {
      bgObject.stopAnimation();
    });
    // Iteriere durch die MiddleDecorobjekte und stoppe ihre Animation
    this.level.middleDecor.forEach((mdObject) => {
      mdObject.stopAnimation();
    });
    // Iteriere durch die Vordergrundobjekte und stoppe ihre Animation
    this.level.grounds.forEach((fgObject) => {
      fgObject.stopAnimation();
    });
  }
}
