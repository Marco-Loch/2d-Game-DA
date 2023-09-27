let canvas;
let world;
globalThis.keyboard = new Keyboard();

document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  globalThis.frame = 1;
  canvas = document.getElementById('canvas');
  world = new World(canvas, globalThis.keyboard);
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 68) {
    globalThis.keyboard.RIGHT = true;
  }
  if (event.keyCode == 65) {
    globalThis.keyboard.LEFT = true;
  }
  if (event.keyCode == 32) {
    globalThis.keyboard.SPACE = true;
  }
  if (event.keyCode == 13) {
    globalThis.keyboard.ENTER = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode == 68) {
    globalThis.keyboard.RIGHT = false;
  }
  if (event.keyCode == 65) {
    globalThis.keyboard.LEFT = false;
  }
  if (event.keyCode == 32) {
    globalThis.keyboard.SPACE = false;
  }
  if (event.keyCode == 13) {
    globalThis.keyboard.ENTER = false;
  }
});
