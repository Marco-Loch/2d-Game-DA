class Character extends MovableObject {
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
  IMAGES_JUMP = [
    'img/2_character_pepe/3_jump_start/000.png',
    'img/2_character_pepe/3_jump_start/001.png',
    'img/2_character_pepe/3_jump_start/002.png',
    'img/2_character_pepe/3_jump_start/003.png',
    'img/2_character_pepe/3_jump_start/004.png',
    'img/2_character_pepe/3_jump_start/005.png'
  ];
  IMAGES_FALL = [
    'img/2_character_pepe/32_falling/000.png',
    'img/2_character_pepe/32_falling/001.png',
    'img/2_character_pepe/32_falling/002.png',
    'img/2_character_pepe/32_falling/003.png',
    'img/2_character_pepe/32_falling/004.png',
    'img/2_character_pepe/32_falling/005.png'
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
  IMAGES_DEAD = [
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_000.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_001.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_002.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_003.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_004.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_005.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_006.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_007.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_008.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_009.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_010.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_011.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_012.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_013.png',
    'img/2_character_pepe/5_dead/0_Reaper_Man_Dying_014.png'
  ];
  IMAGES_HURT = [
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_000.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_001.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_002.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_003.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_004.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_005.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_006.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_007.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_008.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_009.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_010.png',
    'img/2_character_pepe/4_hurt/0_Reaper_Man_Hurt_011.png'
  ];
  IMAGES_ATTACK = [
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_000.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_001.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_002.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_003.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_004.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_005.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_006.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_007.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_008.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_009.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_010.png',
    'img/2_character_pepe/6_attack/0_Reaper_Man_Slashing_011.png'
  ];
  y = 245;
  currentImage = 0;
  IDLE;
  speed = 4;
  walking_sound = new Audio('audio/walking.mp3');
  energy = 100;
  mana = 0;
  isAlive = true;

  constructor(x, y, height = 250, width = 250) {
    super(x, y).loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
    this.world = world;
    this.height = height;
    this.width = width;
    this.loadImages(this.IMAGES_IDLE);
    this.loadImages(this.IMAGES_JUMP);
    this.loadImages(this.IMAGES_FALL);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_ATTACK);
    this.weapon = new Weapon(x, y, 20, 0);
    this.weapon.active = false;
    this.applyGravity();
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.walking_sound.pause();
      //Char moving right
      if (this.isAlive && this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight();
        // this.walking_sound.play();
      }
      //Char moving left
      if (this.isAlive && this.world.keyboard.LEFT && this.x > -100) {
        this.moveLeft();
        // this.walking_sound.play();
      }
      if (this.isAlive && this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
      }
      this.world.camara_x = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isAlive && this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAlive && this.isAboveGround() && this.speedY > 0) {
        this.playAnimation(this.IMAGES_JUMP);
      } else if (this.isAlive && this.isAboveGround() && this.speedY < 0) {
        this.playAnimation(this.IMAGES_FALL);
      } else if (this.isAlive && this.isAttacking()) {
        this.playAnimation(this.IMAGES_ATTACK, this.attackframe);
      } else if ((this.isAlive && this.world.keyboard.RIGHT) || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_WALK);
      } else {
        this.playAnimation(this.isAlive && this.IMAGES_IDLE);
      }
    }, 1000 / 30);
  }

  // animate() {
  //   const moveCharacter = () => {
  //     this.walking_sound.pause();
  //     // Char moving right
  //     if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
  //       this.moveRight();
  //       // this.walking_sound.play();
  //     }
  //     // Char moving left
  //     if (this.world.keyboard.LEFT && this.x > -100) {
  //       this.moveLeft();
  //       // this.walking_sound.play();
  //     }
  //     if (this.world.keyboard.SPACE && !this.isAboveGround()) {
  //       this.jump();
  //     }
  //     this.world.camara_x = -this.x + 100;

  //     requestAnimationFrame(moveCharacter);
  //   };

  //   const updateAnimation = () => {
  //     if (this.isDead()) {
  //       this.playAnimation(this.IMAGES_DEAD);
  //     } else if (this.isHurt()) {
  //       this.playAnimation(this.IMAGES_HURT);
  //     } else if (this.isAboveGround() && this.speedY > 0) {
  //       this.playAnimation(this.IMAGES_JUMP);
  //     } else if (this.isAboveGround() && this.speedY < 0) {
  //       this.playAnimation(this.IMAGES_FALL);
  //     } else if (this.isAttacking()) {
  //       this.playAnimation(this.IMAGES_ATTACK, this.attackframe);
  //     } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
  //       this.playAnimation(this.IMAGES_WALK);
  //     } else {
  //       this.playAnimation(this.IMAGES_IDLE);
  //     }

  //     requestAnimationFrame(updateAnimation);
  //   };

  //   moveCharacter();
  //   updateAnimation();
  // }

  // Angriffsanimation bis zum Ende abspielen
  isAttacking() {
    if (this.world.keyboard.ENTER && !this.attacking) {
      this.attacking = true;
      this.attackframe = 0;
    }

    this.attackframe++;

    if (this.attackframe >= this.IMAGES_ATTACK.length) {
      this.attacking = false;
      this.attackframe = null;
    }
    return this.attacking;
  }

  attack() {
    if (!this.isAttacking) {
      this.isAttacking = true;
      this.weapon.active = true; // Aktiviere die Waffe
      this.world.checkWeaponCollision();
    }
  }

  endAttack() {
    this.isAttacking = false;
    this.weapon.active = false; // Deaktiviere die Waffe nach dem Angriff
    // ...
  }

  charDieing() {
    this.isAlive = false;
  }
}
