let canvas;
let world;

document.addEventListener('DOMContentLoaded', function() {
    init();
});

function init() {
    globalThis.frame = 1;
    canvas = document.getElementById("canvas");
    world = new World(canvas);

}


