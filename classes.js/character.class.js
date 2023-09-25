class Character extends MovableObject {
  y = 150;
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
    'img/2_character_pepe/1_idle/idle/I-10.png',
    'img/2_character_pepe/1_idle/idle/I-11.png',
    'img/2_character_pepe/1_idle/idle/I-12.png',
    'img/2_character_pepe/1_idle/idle/I-13.png',
    'img/2_character_pepe/1_idle/idle/I-14.png',
    'img/2_character_pepe/1_idle/idle/I-15.png',
    'img/2_character_pepe/1_idle/idle/I-16.png',
    'img/2_character_pepe/1_idle/idle/I-17.png'
  ];
  IMAGES_WALK = [
    'img/2_character_pepe/2_walk/W-21.png',
    'img/2_character_pepe/2_walk/W-22.png',
    'img/2_character_pepe/2_walk/W-23.png',
    'img/2_character_pepe/2_walk/W-24.png',
    'img/2_character_pepe/2_walk/W-25.png',
    'img/2_character_pepe/2_walk/W-26.png',
    'img/2_character_pepe/2_walk/W-27.png',
    'img/2_character_pepe/2_walk/W-28.png',
    'img/2_character_pepe/2_walk/W-29.png',
    'img/2_character_pepe/2_walk/W-30.png',
    'img/2_character_pepe/2_walk/W-31.png',
    'img/2_character_pepe/2_walk/W-32.png',
    'img/2_character_pepe/2_walk/W-33.png',
    'img/2_character_pepe/2_walk/W-34.png',
    'img/2_character_pepe/2_walk/W-35.png',
    'img/2_character_pepe/2_walk/W-36.png',
    'img/2_character_pepe/2_walk/W-37.png',
    'img/2_character_pepe/2_walk/W-38.png',
    'img/2_character_pepe/2_walk/W-39.png',
    'img/2_character_pepe/2_walk/W-40.png',
    'img/2_character_pepe/2_walk/W-41.png',
    'img/2_character_pepe/2_walk/W-42.png',
    'img/2_character_pepe/2_walk/W-43.png',
    'img/2_character_pepe/2_walk/W-44.png'
  ];
  currentImage = 0;
  world;
  IDLE;
  speed = 4;
  walking_sound = new Audio('audio/walking.mp3');

  constructor(x, y, height = 200, width = 180) {
    super(x, y).loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
    this.height = height;
    this.width = width;
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_WALK);
    this.applyGravity();
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
      this.walking_sound.pause();
      //Char moving right
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.x += this.speed;
        this.otherDirection = false;
        // this.walking_sound.play();
      }
      //Char moving left
      if (this.world.keyboard.LEFT && this.x > -100) {
        this.x -= this.speed;
        this.otherDirection = true;
        // this.walking_sound.play();
      }
      this.world.camara_x = -this.x + 200;
    }, 1000 / 60);
    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        //WALK animation
        this.playAnimation(this.IMAGES_WALK);
      }
    }, 1000 / 50);
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
