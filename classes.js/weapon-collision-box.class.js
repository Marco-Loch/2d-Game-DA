class WeaponCollisionBox extends MovableObject {
  x;
  y;
  width = 20;
  height = 10;
  offsetX = 120;
  offsetY = 50;
  offsetHeight = 0;
  offsetWidth = 0;

  constructor(x, y, width, height, offsetX, offsetY, offsetHeight, offsetWidth) {
    super(x, y);
    
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.offsetHeight = offsetHeight;
    this.offsetWidth = offsetWidth;
    this.height = height;
    this.width = width;
  }
}
