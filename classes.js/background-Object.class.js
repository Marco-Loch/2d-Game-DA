class BackgroundObject extends MovableObject {
  y = 0;
  height = 480;
  width = 720;
  speed = 4;
  animateInterval;

  constructor(x) {
    super(x).loadImage('img/5_background/layers/4_fourth_layer/BG_Decor.png');

    this.animate();
  }

  animate() {
    this.animateInterval = setInterval(() => {
      if (globalThis.keyboard.RIGHT) {
        this.x += this.speed * 0.6;
      }

      if (globalThis.keyboard.LEFT) {
        this.x -= this.speed * 0.6;
      }
    }, 1000 / 60);
  }

  stopAnimation() {
    clearInterval(this.animateInterval);
  }
}
