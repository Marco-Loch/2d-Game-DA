class ManaBar extends DrawableObject {
  IMAGES = [
    'img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_0.png',
    'img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_1.png',
    'img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_2.png',
    'img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_3.png',
    'img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_4.png',
    'img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_5.png',
    'img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_6.png'
  ];

  constructor() {
    super().loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_0.png');
    this.loadImages(this.IMAGES);
    this.x = 280;
    this.y = 0;
    this.width = 180;
    this.height = 55;
  }

  resolveManaImageIndex(i) {
    if (i == 6) {
      this.loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_6.png');
    } else if (i === 5) {
      this.loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_5.png');
    } else if (i === 4) {
      this.loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_4.png');
    } else if (i === 3) {
      this.loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_3.png');
    } else if (i === 2) {
      this.loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_2.png');
    } else if (i === 1) {
      this.loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_1.png');
    } else {
      this.loadImage('img/7_statusbars/1_statusbar/4_statusbar_mana/statusbar_mana_0.png');
    }
  }
}
