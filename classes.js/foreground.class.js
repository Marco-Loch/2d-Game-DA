class Ground extends MovableObject {
  world;
  y = 15;
  height = 480;
  width = 720;
  speed = 5;

  constructor(x) {
    super(x).loadImage('img/5_background/layers/1_first_layer/Ground.png');

    this.x = x;
    // this.animate();
  }

  //funktioniert noch nicht (kann nicht auf keyboard.class.js zugreifen)
  animate() {
    setInterval(() => {
      //Char moving right
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
      }
      //Char moving left
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
      }
    }, 1000 / 60);
  }
}
