class Chicken extends MovableObject {
  IMAGES_WALK = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
  ];
  currentImage = 0;
  minSpeed = 0.1;
  maxSpeed = 0.4;

  constructor(x, y, height = 50, width = 50) {
    super(x, y).loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALK);
    this.speed = this.minSpeed + Math.random() * this.maxSpeed;
    this.height = height;
    this.width = width;
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_WALK.length;
      let path = this.IMAGES_WALK[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 1000 / 8);
    this.moveLeft();
  }

  chickenDie() {
    console.log('Chicken dieing');
  }
}
