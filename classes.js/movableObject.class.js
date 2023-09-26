class MovableObject {
  img;
  imgCache = {};
  speed = 0.1;
  currentImage = 0;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 245;
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

  playJumpAnimation(images) {
    let i = this.currentImage % this.IMAGES_JUMP.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }
  
  playFallAnimation(images) {
    let i = this.currentImage % this.IMAGES_FALL.length;
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  draw(ctx){
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx){
    ctx.beginPath();
    ctx.lineWidth = '5';
    ctx.strokeStyle = 'blue';
    ctx.rect(this.x+60, this.y+50, this.width-130, this.height-100)
    ctx.stroke();
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }
  jump(){
    this.speedY = 25;
  }
  moveRight(){
    this.x += this.speed;
    this.otherDirection = false;
 
  }
}
