class MiddleDecor extends MovableObject {
  
  y = 0;
  height = 480;
  width = 720;
  speed = 4;
  

  constructor(x) {
    super(x).loadImage('img/5_background/layers/3_third_layer/Middle_Decor.png');
    
   
    this.animate();
  }

  
  animate() {
    setInterval(() => {
      
      if (globalThis.keyboard.RIGHT) {
        this.x += this.speed *0.5;
      }
      
      if (globalThis.keyboard.LEFT) {
        this.x -= this.speed *0.5;
      }
    }, 1000 / 60);
  }
}
