class MovableObject extends DrawableObject {
  speed = 0.5;
  otherDirection = false;
  speedY = 0;
  acceleration = 2;
  offsetX = 60;
  offsetY = 50;
  offsetWidth = 130;
  offsetHeight = 100;
  lastHit = 0;
  attacking = false;
  attackframe = null;

  constructor(x, y) {
    super();
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

  playAnimation(images, attackFrame) {
    let i = this.currentImage % images.length;
    let path = attackFrame ? images[attackFrame] : images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }
  jump() {
    this.speedY = 27;
  }
  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;
  }

  isColliding(mo) {
    return (
      this.x + this.offsetX + this.width - this.offsetWidth >= mo.x + this.offsetX &&
      this.x + this.offsetX <= mo.x + this.offsetX + mo.width - this.offsetWidth &&
      this.y + this.offsetY + this.height - this.offsetHeight >= mo.y + this.offsetY &&
      this.y + this.offsetY <= mo.y + mo.height - this.offsetHeight
    );
  }

  hit() {
    if (!this.isHurt()) {
      this.energy -= 20;

      if (this.energy < 0) {
        this.energy = 0;
        this.charDieing();
      } else {
        this.lastHit = new Date().getTime();
      }
    }
  }
  //noch anpassen
  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Differenz in ms von hit()
    timepassed = timepassed / 1000; // Differenz in sec
    return timepassed < 0.8;
  }

  isDead() {
    return this.energy == 0;
    
  }
}
