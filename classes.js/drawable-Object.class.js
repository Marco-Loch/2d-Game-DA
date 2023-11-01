class DrawableObject {
  img;
  imgCache = {};
  currentImage = 0;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   *
   * @param {Array} array - ['img/image1.png', 'img/image2.png', ...]
   */
  loadImages(arr) {
    arr.forEach((path) => {
      let img = new Image();
      img.src = path;
      img.style = 'transform: scale(-1)'; //CSS Inlinestyle
      this.imgCache[path] = img;
    });
  }

  // Nur zum Debuggen
  drawFrame(ctx) {
    if (
      this instanceof Character ||
      this instanceof Golem ||
      this instanceof Endboss ||
      this instanceof HealthCoin ||
      this instanceof ManaCoin
    ) {
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
    if (this instanceof Character) {
      // console.log('This.weaponCollissionBox: ', this.weaponCollisionBox);
      // console.log('This.CharacterCollissionBox: ', {x: this.x, y: this.y, width: this.width, height: this.height});
      ctx.beginPath();
      ctx.lineWidth = '3';
      ctx.strokeStyle = 'red';
      ctx.rect(
        this.weaponCollisionBox.x,
        this.weaponCollisionBox.y,
        this.weaponCollisionBox.width,
        this.weaponCollisionBox.height
      );
      ctx.stroke();
    }
  }
}
