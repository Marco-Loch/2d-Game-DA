export class InputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];

    window.addEventListener("keydown", (e) => {
      if (
        (e.key === "s" ||
          e.key === "w" ||
          e.key === "a" ||
          e.key === "d" ||
          e.key === "Enter") &&
        this.keys.indexOf(e.key) === -1
      ) {
        this.keys.push(e.key);
      } else if (e.key === "b") this.game.debug = !this.game.debug;
    });

    window.addEventListener("keyup", (e) => {
      if (
        e.key === "s" ||
        e.key === "w" ||
        e.key === "a" ||
        e.key === "d" ||
        e.key === "Enter"
      ) {
        this.keys.splice(this.keys.indexOf(e.key), 1);
      }
    });

    ////////////////////////Mobile Controls///////////////////////////

    const rightButton = document.getElementById("mobileControlsRight");
    const leftButton = document.getElementById("mobileControlsLeft");
    const upButton = document.getElementById("mobileControlsUp");
    const downButton = document.getElementById("mobileControlsDown");
    const rollButton = document.getElementById("mobileControlsRoll");

    rightButton.addEventListener("touchstart", () => {
      this.handleButtonAction("right", "press");
    });

    rightButton.addEventListener("touchend", () => {
      this.handleButtonAction("right", "release");
    });

    leftButton.addEventListener("touchstart", () => {
      this.handleButtonAction("left", "press");
    });

    leftButton.addEventListener("touchend", () => {
      this.handleButtonAction("left", "release");
    });

    upButton.addEventListener("touchstart", () => {
      this.handleButtonAction("up", "press");
    });

    upButton.addEventListener("touchend", () => {
      this.handleButtonAction("up", "release");
    });

    downButton.addEventListener("touchstart", () => {
      this.handleButtonAction("down", "press");
    });

    downButton.addEventListener("touchend", () => {
      this.handleButtonAction("down", "release");
    });

    rollButton.addEventListener("touchstart", () => {
      this.handleButtonAction("roll", "press");
    });

    rollButton.addEventListener("touchend", () => {
      this.handleButtonAction("roll", "release");
    });
  }

  handleButtonAction(buttonType, action) {
    console.log(`${buttonType} Button ${action}`);
    
    const mapping = {
      "left": "d",
      "right": "a",
      "up": "w",
      "down": "s",
      "roll": "Enter"
    };
  
    if (buttonType in mapping) {
      const key = mapping[buttonType];
  
      if (action === "press" && this.keys.indexOf(key) === -1) {
        this.keys.push(key);
      } else if (action === "release") {
        const index = this.keys.indexOf(key);
        if (index !== -1) {
          this.keys.splice(index, 1);
        }
      }
    }
  }
}
