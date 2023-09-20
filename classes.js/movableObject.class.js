class MovableObject {
  img;
  imgCache = {};
  speed = 0.1;

  constructor(x, y) {
    this.x = x;
    this.y = y;
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

  moveRight() {
    console.log('Moving right');
  }

  moveLeft(){
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }
}
