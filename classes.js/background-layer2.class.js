class Foreground extends MovableObject {
  
  y = 0;
  height = 480;
  width = 720;
  // speed = 0;
  

  constructor(x) {
    super(x).loadImage('img/5_background/layers/2_second_layer/Foreground.png');
    
   
    // this.animate();
  }

  
  // animate() {
  //   setInterval(() => {
      
  //     if (globalThis.keyboard.RIGHT) {
  //       this.x += this.speed +0;
  //     }
      
  //     if (globalThis.keyboard.LEFT) {
  //       this.x -= this.speed -0;
  //     }
  //   }, 1000 / 60);
  // }
}
