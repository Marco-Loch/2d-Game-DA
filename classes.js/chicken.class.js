class Chicken extends MovableObject {
  y = 250;
  IMAGES_WALK = [
    'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/4_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/5_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/6_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/7_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/8_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/9_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/10_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/11_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/12_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/13_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/14_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/15_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/16_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/17_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/18_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/19_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/20_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/21_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/22_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/23_w.png',
    'img/3_enemies_chicken/chicken_normal/1_walk/24_w.png'
  ];
  currentImage = 0;
  minSpeed = 0.1;
  maxSpeed = 0.4;
  otherDirection = true;

  constructor(x, y, height = 200, width = 180) {
    super(x, y).loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALK);
    this.speed = this.minSpeed + Math.random() * this.maxSpeed;
    this.height = height;
    this.width = width;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALK);
    }, 1000 / 20);
    this.moveLeft();
  }

  chickenDie() {
    console.log('Chicken dieing');
  }
}
