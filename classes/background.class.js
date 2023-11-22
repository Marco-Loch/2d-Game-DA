class Layer {
  constructor(game, width, height, image, speedModifier) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.speedModifier = speedModifier;
    this.image = image;
    this.x = 0;
    this.y = 0;
  }
  update() {
    if (this.x <= -this.width) this.x = 0;
    else this.x -= this.game.speed * this.speedModifier;
  }
  draw(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x + this.width - 1,
      this.y,
      this.width,
      this.height
    );
  }
}

///////////////////////////////////////////////////////////////

export class Background {
  constructor(game) {
    this.game = game;
    this.width = 760;
    this.height = 480;
    this.layer4Image = document.getElementById('layer4');
    this.layer3Image = document.getElementById('layer3');
    this.layer2Image = document.getElementById('layer2');
    this.layer1Image = document.getElementById('layer1');
    this.layer1 = new Layer(
      this.game,
      this.width,
      this.height,
      this.layer1Image,
      0 // speedModifier
    );
    this.layer2 = new Layer(
      this.game,
      this.width,
      this.height,
      this.layer2Image,
      0.3
    );
    this.layer3 = new Layer(
      this.game,
      this.width,
      this.height,
      this.layer3Image,
      0.7
    );
    this.layer4 = new Layer(
      this.game,
      this.width,
      this.height,
      this.layer4Image,
      1
    );
    this.backgroundLayers = [
      this.layer1,
      this.layer2,
      this.layer3,
      this.layer4,
    ];
  }
  update() {
    this.backgroundLayers.forEach((layer) => {
      layer.update();
    });
  }
  draw(context) {
    this.backgroundLayers.forEach((layer) => {
      layer.draw(context);
    });
  }
}

///////////////////////////////////////////////////////////////

export class Foreground {
  constructor(game) {
    this.game = game;
    this.width = 760;
    this.height = 480;
    this.layer5Image = document.getElementById('layer5');
    this.layer5 = new Layer(
      this.game,
      this.width,
      this.height,
      this.layer5Image,
      1.3
    );
    this.foregroundLayers = this.layer5;
  }
  update() {
    this.foregroundLayers.update();
  }
  draw(context) {
    this.foregroundLayers.draw(context);
  }
}
