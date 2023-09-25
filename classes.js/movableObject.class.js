class MovableObject {
  img;
  imgCache = {};
  speed = 0.1;
  currentImage = 0;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  applyGravity() {
    setInterval(() => {}, 1000 / 25);
  }

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   *
   * @param {Array} array - ['img/image1.png', 'img/image2.png', ...]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currentImage % this.IMAGES_WALK.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  moveLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
