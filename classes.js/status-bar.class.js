class StatusBar extends DrawableObject {

  IMAGES = [
    'img/7_statusbars/1_statusbar/2_statusbar_health/statusbar_health_0.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/statusbar_health_1.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/statusbar_health_2.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/statusbar_health_3.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/statusbar_health_4.png',
    'img/7_statusbars/1_statusbar/2_statusbar_health/statusbar_health_5.png'
  ];

  percentage = 100;

  constructor() {
    super();
    this.loadImages(this.IMAGES);
    this.x = 50;
    this.y = -9;
    this.width = 210;
    this.height = 70;
    this.setPercentage(100);
  }

  setPercentage(percentage) {
    this.percentage = percentage; // => 0 ... 5
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imgCache[path];
  }

  resolveImageIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage == 80) {
      return 4;
    } else if (this.percentage == 60) {
      return 3;
    } else if (this.percentage == 40) {
      return 2;
    } else if (this.percentage == 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
