class Golem extends MovableObject {
  y = 265;
  IMAGES_WALK = [
    'img/3_enemies_golem/golem_normal/1_walk/1_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/2_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/3_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/4_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/5_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/6_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/7_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/8_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/9_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/10_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/11_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/12_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/13_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/14_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/15_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/16_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/17_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/18_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/19_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/20_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/21_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/22_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/23_w.png',
    'img/3_enemies_golem/golem_normal/1_walk/24_w.png'
  ];
  IMAGES_ATTACK = [
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_000.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_001.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_002.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_003.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_004.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_005.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_006.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_007.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_008.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_009.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_010.png',
    'img/3_enemies_golem/golem_normal/3_attack/0_Golem_Slashing_011.png'
  ];

  IMAGES_HURT = [
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_000.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_001.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_002.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_003.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_004.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_005.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_006.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_007.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_008.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_009.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_010.png',
    'img/3_enemies_golem/golem_normal/4_hurt/0_Golem_Hurt_011.png'
  ];

  IMAGES_DEAD = [
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_000.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_001.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_002.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_003.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_004.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_005.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_006.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_007.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_008.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_009.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_010.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_011.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_012.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_013.png',
    'img/3_enemies_golem/golem_normal/2_dead/0_Golem_Dying_014.png'
  ];

  currentImage = 0;
  minSpeed = 0.3;
  maxSpeed = 0.8;
  otherDirection = true;
  hp = 100;
  isAlive = true;

  constructor(x, y, character, height = 230, width = 210) {
    super(x, y).loadImage('img/3_enemies_golem/golem_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_DEAD);
    this.speed = this.minSpeed + Math.random() * this.maxSpeed;
    this.height = height;
    this.width = width;
    this.character = character;
    this.animate();
  }

  animate() {
    const animateFrame = () => {
      if (this.isColliding(this.character) || this.attacking) {
        this.playAnimation(this.IMAGES_ATTACK, this.attackframe);
        this.isAttacking();
      } else if (this.isColliding(this.character.weapon) && this.hp > 0) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isColliding(this.character.weapon) && this.hp === 0) {
        
        this.golemDieing();
        this.stopAnimation(); // Rufen Sie die Stop-Methode auf, wenn der Golem stirbt
      } else {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
      }

      if (!this.isAlive) {
        this.stopAnimation(); // Rufen Sie die Stop-Methode auf, wenn der Golem tot ist
      }

      requestAnimationFrame(animateFrame);
    };

    animateFrame();
  }

  isAttacking() {
    if (!this.attacking) {
      this.attacking = true;
      this.attackframe = 0;
    }

    this.attackframe++;

    if (this.attackframe >= this.IMAGES_ATTACK.length) {
      this.attacking = false;
      this.attackframe = 0;
    }
    return this.attacking;
  }

  takeDamage(damage) {
    this.hp -= damage;
  }

  isDead() {
    return this.hp === 0;
  }

  stopAnimation() {
    cancelAnimationFrame(this.animationFrame);
  }

  golemDieing() {
    if (this.isAlive) {
      this.isAlive = false;
      this.playAnimation(this.IMAGES_DEAD); // Starte die Sterbeanimation

      // setTimeout zum Beenden der Sterbeanimation nach der festgelegten Anzahl von Frames
      setTimeout(() => {
        this.stopAnimation();
      }, this.IMAGES_DEAD.length * 1000 / 60);
    }
  }
}
