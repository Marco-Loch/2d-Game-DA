/**
 * Creates an input handler with several event listeners
 */
export class InputHandler {
  constructor(game) {
    this.game = game;
    this.keys = [];

    /**
     * Adds a keydown event for coresponding keys and adds them to keys Array
     */
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

    /**
     * Adds a keyup event for coresponding keys and removes them from keys Array
     */
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

    window.addEventListener("keydown", (e) => {
      if (e.key === "w") this.game.sound.jump.play();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "m") {
        this.game.musicEnabled = !this.game.musicEnabled;
        this.game.toggleMusic(); 
        console.log(this.game.musicEnabled);
      }
    });
    ////////////////////////Mobile Controls///////////////////////////

    const rightButton = document.getElementById("mobileControlsRight");
    const leftButton = document.getElementById("mobileControlsLeft");
    const upButton = document.getElementById("mobileControlsUp");
    const downButton = document.getElementById("mobileControlsDown");
    const rollButton = document.getElementById("mobileControlsRoll");

    /**
     * Adding touch event listeners for various mobile buttons
     */
    rightButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.handleButtonAction("right", "press");
    });

    rightButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.handleButtonAction("right", "release");
    });

    leftButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.handleButtonAction("left", "press");
    });

    leftButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.handleButtonAction("left", "release");
    });

    upButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.handleButtonAction("up", "press");
    });

    upButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.handleButtonAction("up", "release");
    });

    downButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.handleButtonAction("down", "press");
    });

    downButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.handleButtonAction("down", "release");
    });

    rollButton.addEventListener("touchstart", (e) => {
      e.preventDefault();
      this.handleButtonAction("roll", "press");
    });

    rollButton.addEventListener("touchend", (e) => {
      e.preventDefault();
      this.handleButtonAction("roll", "release");
    });
  }

  /**
   * Mapping input to mobile control buttons
   * @param {String} buttonType
   * @param {String} action
   */
  handleButtonAction(buttonType, action) {
    const mapping = {
      left: "d",
      right: "a",
      up: "w",
      down: "s",
      roll: "Enter",
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
