class Cloud extends MovableObject {
  x = 300;
  y = 30;
  height = 350;
  width = 600;


  constructor() {
    super().loadImage('img/5_background/layers/4_clouds/1.png');

    this.x = Math.random() * 500;
    this.animate();
  }
  animate() {
    this.moveLeft();
  }



}
