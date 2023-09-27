class Endboss extends MovableObject {
  IMAGES_ALERT = [];

  IMAGES_WALK = [
    'img/4_enemie_boss_minotaur/1_walk/G1.png',
    'img/4_enemie_boss_minotaur/1_walk/G2.png',
    'img/4_enemie_boss_minotaur/1_walk/G3.png',
    'img/4_enemie_boss_minotaur/1_walk/G4.png',
    'img/4_enemie_boss_minotaur/1_walk/G5.png',
    'img/4_enemie_boss_minotaur/1_walk/G6.png',
    'img/4_enemie_boss_minotaur/1_walk/G7.png',
    'img/4_enemie_boss_minotaur/1_walk/G8.png',
    'img/4_enemie_boss_minotaur/1_walk/G9.png',
    'img/4_enemie_boss_minotaur/1_walk/G10.png',
    'img/4_enemie_boss_minotaur/1_walk/G11.png',
    'img/4_enemie_boss_minotaur/1_walk/G12.png',
    'img/4_enemie_boss_minotaur/1_walk/G13.png',
    'img/4_enemie_boss_minotaur/1_walk/G14.png',
    'img/4_enemie_boss_minotaur/1_walk/G15.png',
    'img/4_enemie_boss_minotaur/1_walk/G16.png',
    'img/4_enemie_boss_minotaur/1_walk/G17.png',
    'img/4_enemie_boss_minotaur/1_walk/G18.png',
    'img/4_enemie_boss_minotaur/1_walk/G19.png',
    'img/4_enemie_boss_minotaur/1_walk/G20.png',
    'img/4_enemie_boss_minotaur/1_walk/G21.png',
    'img/4_enemie_boss_minotaur/1_walk/G22.png',
    'img/4_enemie_boss_minotaur/1_walk/G23.png',
    'img/4_enemie_boss_minotaur/1_walk/G24.png'
  ];

  IMAGES_ATTACK = [
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_000.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_001.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_002.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_003.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_004.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_005.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_006.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_007.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_008.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_009.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_010.png',
    'img/4_enemie_boss_minotaur/3_attack/0_Minotaur_Slashing_011.png'
  ];

  y = 0;
  otherDirection = true;

  constructor(x, y, character, height = 550, width = 500) {
    super(x, y).loadImage(this.IMAGES_WALK[0]);
    this.loadImages(this.IMAGES_WALK);
    this.loadImages(this.IMAGES_ATTACK);
    this.height = height;
    this.width = width;
    this.character = character;
    this.x = 2000;
    this.animate();
  }

  animate() {
    // setInterval(() => {
    //   this.playAnimation(this.IMAGES_WALK);
    //   this.moveLeft();
    // }, 1000 / 30);

    setInterval(() => {
      if (this.isColliding(this.character)) {
        this.playAnimation(this.IMAGES_ATTACK);
      } else {
        this.playAnimation(this.IMAGES_WALK);
        this.moveLeft();
      }
    }, 1000 / 30);
  }
}
