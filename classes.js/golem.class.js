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
  currentImage = 0;
  minSpeed = 0.1;
  maxSpeed = 0.4;
  otherDirection = true;

  constructor(x, y, character, height = 230, width = 210) {
    super(x, y).loadImage('img/3_enemies_golem/golem_normal/1_walk/1_w.png');
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ATTACK);
    this.speed = this.minSpeed + Math.random() * this.maxSpeed;
    this.height = height;
    this.width = width;
    this.character = character;
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.isColliding(this.character) || this.attacking) {
        this.playAnimation(this.IMAGES_ATTACK, this.attackframe);
        this.isAttacking();
      } else {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
      }
    }, 1000 / 30);
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
}
