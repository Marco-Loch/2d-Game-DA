let canvas;
let world;
let keyboard = new Keyboard();

document.addEventListener('DOMContentLoaded', function () {
  init();
});

function init() {
  globalThis.frame = 1;
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
}

document.addEventListener('keydown', (event) => {
  if (event.keyCode == 68) {
    keyboard.RIGHT = true;
  }
  if (event.keyCode == 65) {
    keyboard.LEFT = true;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = true;
  }
  if (event.keyCode == 13) {
    keyboard.ENTER = true;
  }
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode == 68) {
    keyboard.RIGHT = false;
  }
  if (event.keyCode == 65) {
    keyboard.LEFT = false;
  }
  if (event.keyCode == 32) {
    keyboard.SPACE = false;
  }
  if (event.keyCode == 13) {
    keyboard.ENTER = false;
  }
});
