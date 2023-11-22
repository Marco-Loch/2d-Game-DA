import { Player } from "./classes/player.class.js";
import { InputHandler } from "./classes/input.class.js";
import { Background } from "./classes/background.class.js";
import { Foreground } from "./classes/background.class.js";
import {
  FlyingEnemy,
  GroundEnemy,
  SpiderEnemy,
} from "./classes/enemies.class.js";
import { UI } from "./classes/ui.class.js";

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const visDiv = document.getElementById("visDiv");
  const ctx = canvas.getContext("2d");
  canvas.width = 760;
  canvas.height = 480;
  const fullScreenButton = document.getElementById("fullScreenButton");

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.groundMargin = 43;
      this.speed = 0;
      this.maxSpeed = 8;
      this.background = new Background(this);
      this.foreground = new Foreground(this);
      this.player = new Player(this);
      this.input = new InputHandler(this);
      this.UI = new UI(this);
      this.enemies = [];
      this.particles = [];
      this.collisions = [];
      this.maxParticles = 80;
      this.enemyTimer = 0;
      this.enemyInterval = 1000;
      this.debug = false;
      this.score = 0;
      this.targetScore = 30;
      this.fontColor = "white";
      this.time = 0;
      this.maxTime = 30000;
      this.gameOver = false;
      this.player.currentState = this.player.states[0];
      this.player.currentState.enter();
      this.splashsound = new Audio();
      this.splashsound.src = "./assets/audio/Ice attack 2.wav";
      this.splashsound.volume = 0.2;
    }

    update(deltaTime) {
      this.time += deltaTime;
      if (this.time > this.maxTime) this.gameOver = true;
      this.background.update();
      this.player.update(this.input.keys, deltaTime);
      this.handleParticles();
      this.handleEnemies(deltaTime);
      this.foreground.update();
      this.handleCollisions(deltaTime);
    }

    handleParticles() {
      this.particles.forEach((particle, index) => {
        particle.update();
        if (particle.markedForDeletion) this.particles.splice(index, 1);
      });
      if (this.particles.length > this.maxParticles) {
        this.particles.length = this.maxParticles;
      }
    }

    handleEnemies(deltaTime) {
      if (this.enemyTimer > this.enemyInterval) {
        this.addEnemy();
        this.enemyTimer = 0;
      } else {
        this.enemyTimer += deltaTime;
      }
      this.enemies.forEach((enemy) => {
        enemy.update(deltaTime);
        if (enemy.markedForDeletion) {
          this.enemies = this.enemies.filter((e) => e != enemy);
        }
      });
    }

    handleCollisions(deltaTime) {
      this.collisions.forEach((collision, index) => {
        collision.update(deltaTime);
        if (collision.markedForDeletion) this.collisions.splice(index, 1);
      });
    }

    draw(context) {
      this.background.draw(context);
      this.player.draw(context);
      this.particles.forEach((particle) => {
        particle.draw(context);
      });
      this.enemies.forEach((enemy) => {
        enemy.draw(context);
      });
      this.collisions.forEach((collision) => {
        collision.draw(context);
      });
      this.foreground.draw(context);
      this.UI.draw(context);
    }

    addEnemy() {
      if (this.speed > 0 && Math.random() < 0.5)
        this.enemies.push(new GroundEnemy(this));
      else if (this.speed > 0) this.enemies.push(new SpiderEnemy(this));
      this.enemies.push(new FlyingEnemy(this));
    }
  }

  ///////////////////////////////////////////////////////////////

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(deltaTime);
    game.draw(ctx);
    if (!game.gameOver) requestAnimationFrame(animate);
  }
  animate(0);

  function getHighscore() {
    return localStorage.getItem("highscore") || 0;
  }

  const highscore = getHighscore();

  ///////////////////////////////////////////////////////////////

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      visDiv.requestFullscreen().catch((err) => {
        alert(`Error, can't enable full-screen mode: ${err.message}`);
      });
      scaleCanvasUp();
    } else {
      document.exitFullscreen();
      scaleCanvasDown();
    }
  }

  document.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "f") {
        toggleFullScreen();
      }
    },
    false
  );

  ///////////////////////////////////////////////////////////////

  function scaleCanvasUp() {
    const scaleFactor = window.innerWidth / 760;
    canvas.style.transform = `translate(-50%, -50%) scale(${scaleFactor}) `;
  }

  function scaleCanvasDown() {
    canvas.style.transform = "translate(-50%, -50%) scale(1)";
  }

  ///////////////////////////////////////////////////////////////

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  function lockLandscapeOrientation() {
    if (window.screen.orientation && window.screen.orientation.lock) {
      window.screen.orientation
        .lock("landscape-primary")
        .then(() => {
          console.log("Bildschirmausrichtung im Querformat gesperrt.");
        })
        .catch((error) => {
          console.error(
            "Fehler beim Sperren der Bildschirmausrichtung:",
            error
          );
          console.log(isMobileDevice());
        });
    }
  }

  if (isMobileDevice()) {
    lockLandscapeOrientation();
  }
});

  ///////////////////////////////////////////////////////////////


/*

760/480 1.58
1920/1080 1.78

if window.innerwidth/window.innerheight > 760/480 ? use window.innerheight/480 ratio : window.innerwidth/760

1200/800 1.5
640/480 1.33

*/