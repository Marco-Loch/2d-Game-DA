class Ground extends MovableObject {
  world;
  
  y = 15;
  height = 480;
  width = 720;
  speed = 5;
  keyboard;

  constructor(x, keyboard) {
    super(x).loadImage('img/5_background/layers/1_first_layer/Ground.png');
    this.keyboard = keyboard;
    // this.x = x;
    this.animate();
  }

  //funktioniert noch nicht (kann nicht auf keyboard.class.js zugreifen)
  animate() {
    setInterval(() => {
      //Char moving right
      if (globalThis.keyboard.RIGHT) {
        this.x -= this.speed -2;
      }
      //Char moving left
      if (globalThis.keyboard.LEFT) {
        this.x += this.speed +2;
      }
    }, 1000 / 60);
  }
}
