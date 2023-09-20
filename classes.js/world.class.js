class World {
  character = new Character(150, 200);
  enemies = [];
  clouds = [new Cloud()];
  backgroundObjects = [
    new BackgroundObject('img/5_background/layers/air.png', 0),
    new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0)
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
    this.generateEnemies(3, Chicken);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.addObjectsToMap(this.backgroundObjects);
    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);
    this.addToMap(this.character);

    let self = this;
    requestAnimationFrame(function () {
      globalThis.frame++;
      self.draw();
      // console.log(globalThis.frame % 4);
    });
  }

  generateEnemies(count, enemyClass) {
    for (let i = 0; i < count; i++) {
      const positionX = Math.random() * 500 + 400;
      this.enemies.push(new enemyClass(positionX, 374));
    }
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }
  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
