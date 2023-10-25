class Weapon {
  damage = 100;

  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  // Weitere Methoden zur Aktualisierung des Waffenstatus und zur Behandlung von Kollisionen
  // drawFrame(ctx) {
  //   ctx.beginPath();
  //   ctx.lineWidth = '3';
  //   ctx.strokeStyle = 'red';
  //   ctx.rect(this.x, this.y, this.width, this.height);
  //   ctx.stroke();
   
  // }
}
