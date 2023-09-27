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
    let path = attackFrame?images[attackFrame]:images[i];
    this.img = this.imgCache[path];
    this.currentImage++;
  }

  // Nur zum Debuggen
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Golem || this instanceof Endboss) {
      ctx.beginPath();
      ctx.lineWidth = '3';
      ctx.strokeStyle = 'blue';
      ctx.rect(
        this.x + this.offsetX,
        this.y + this.offsetY,
        this.width - this.offsetWidth,
        this.height - this.offsetHeight
      );
      ctx.stroke();
    }
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
  }
  jump() {
    this.speedY = 25;
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
    this.energy -= 5;
    this.x -= 25;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit; // Differenz in ms von hit()
    timepassed = timepassed / 1000; // Differenz in sec
    return timepassed < 0.3;
  }

  isDead() {
    return this.energy == 0;
  }


  //Zeitspanne nach einem Hit in der man nicht erneut getroffen werden kann (funktioniert noch nicht)
  isInvulnarable(){
    if (this.isHurt()) {
      setTimeout(() => {
        this.isColliding(mo);
      }, 1000);
    }
  }

}
