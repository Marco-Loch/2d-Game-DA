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
    // 'img/2_character_pepe/1_idle/idle/I-11.png',
    // 'img/2_character_pepe/1_idle/idle/I-12.png',
    // 'img/2_character_pepe/1_idle/idle/I-13.png',
    // 'img/2_character_pepe/1_idle/idle/I-14.png',
    // 'img/2_character_pepe/1_idle/idle/I-15.png',
    // 'img/2_character_pepe/1_idle/idle/I-16.png',
    // 'img/2_character_pepe/1_idle/idle/I-17.png',
  ];
  IMAGES_WALK = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png'
  ];
  currentImage = 0;
  world;
  IDLE;
  speed = 4;

  constructor(x, y, height = 200, width = 100) {
    super(x, y).loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_WALK);
    this.height = height;
    this.width = width;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (IDLE) {
        let i = this.currentImage % this.IMAGES_IDLE.length;
        let path = this.IMAGES_IDLE[i];
        this.img = this.imgCache[path];
        this.currentImage++;
      }
    }, 1000 / 6);
  }

  animate() {
    setInterval(() => {
      //Char moving right
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
        this.otherDirection = false;
      }
      //Char moving left
      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
        this.otherDirection = true;
      }
      this.world.camara_x = -this.x +300;
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //WALK animation
        let i = this.currentImage % this.IMAGES_WALK.length;
        let path = this.IMAGES_WALK[i];
        this.img = this.imgCache[path];
        this.currentImage++;
      }
    }, 100);
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
