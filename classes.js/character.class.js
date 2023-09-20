class Character extends MovableObject {
  x = 100;
  y = 230;
  IMAGES_IDLE = [
    'img/2_character_pepe/1_idle/idle/I-1.png',
    'img/2_character_pepe/1_idle/idle/I-2.png',
    'img/2_character_pepe/1_idle/idle/I-3.png',
    'img/2_character_pepe/1_idle/idle/I-4.png',
    'img/2_character_pepe/1_idle/idle/I-5.png',
    'img/2_character_pepe/1_idle/idle/I-6.png',
    'img/2_character_pepe/1_idle/idle/I-7.png',
    'img/2_character_pepe/1_idle/idle/I-8.png',
    'img/2_character_pepe/1_idle/idle/I-9.png',
    'img/2_character_pepe/1_idle/idle/I-10.png'
  ];
  currentImage = 0;

  constructor(x, y, height = 200, width = 100) {
    super(x, y).loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
    this.loadImages(this.IMAGES_IDLE);
    this.height = height;
    this.width = width;
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_IDLE.length;
      let path = this.IMAGES_IDLE[i];
      this.img = this.imgCache[path];
      this.currentImage++;
    }, 1000/6 );
  }

  jump() {
    console.log('Jumping');
  }

  attack() {
    console.log('Attacking');
  }

  hurt() {
    console.log('Ouch!');
  }

  die() {
    console.log('You died!');
  }
}
