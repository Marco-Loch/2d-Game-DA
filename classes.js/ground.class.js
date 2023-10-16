class Ground extends MovableObject {
 
  y = 15;
  height = 480;
  width = 720;
  speed = 5;
  

  constructor(x) {
    super(x).loadImage('img/5_background/layers/1_first_layer/Ground.png');
    
    
    this.animate();
  }

  
  animate() {
    setInterval(() => {
      
      if (globalThis.keyboard.RIGHT) {
        this.x -= this.speed -2;
      }
      
      if (globalThis.keyboard.LEFT) {
        this.x += this.speed +2;
      }
    }, 1000 / 60);
  }
}