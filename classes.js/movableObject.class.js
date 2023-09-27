class MovableObject {
     img;
     imgCache = {};
     speed = 0.1;
     currentImage = 0;
     otherDirection = false;
     speedY = 0;
     acceleration = 2;
     offsetX = 60;
     offsetY = 50;
     offsetWidth = 130;
     offsetHeight = 100;

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

     draw(ctx) {
          ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
     }

     drawFrame(ctx) {
          if (this instanceof Character || this instanceof Golem || this instanceof Endboss) {
               ctx.beginPath();
               ctx.lineWidth = '5';
               ctx.strokeStyle = 'blue';
               ctx.rect(this.x + this.offsetX, this.y + this.offsetY, this.width - this.offsetWidth, this.height - this.offsetHeight);
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
}
