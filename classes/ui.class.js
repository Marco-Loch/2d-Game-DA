/**
 * Creates a UI class
 */
export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 48;
    this.fontFamily = "Bangers";
  }

  /**
   * Draws the whole UI on the canvas
   * @param {ctx} context
   */
  draw(context) {
    context.save();
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;
    context.shadowColor = "black";
    context.shadowBlur = 1;
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    context.fillText("Punkte: " + this.game.score, 20, 50);
    context.fillText("Highscore: " + this.getHighscore(), 450, 50);
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText("Zeit: " + (this.game.time * 0.001).toFixed(1), 20, 80);
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      if (this.game.score >= this.game.targetScore) {
        this.winningText(context);
      } else {
        this.loosingText(context);
      }
    }
    context.restore();
  }

  /**
   * Spezifies the winning text
   * @param {ctx} context
   */
  winningText(context) {
    context.fillText(
      "Sehr schön",
      this.game.width * 0.5,
      this.game.height * 0.5 - 20
    );
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText(
      "Denen hast du es so richtig gezeigt!",
      this.game.width * 0.5,
      this.game.height * 0.5 + 20
    );
    this.restartGame();
    this.saveHighscore(this.game.score);
  }

  /**
   * Spezifies the loosing text
   * @param {ctx} context
   */
  loosingText(context) {
    context.fillText(
      "Dumm gelaufen",
      this.game.width * 0.5,
      this.game.height * 0.5 - 20
    );
    context.font = this.fontSize * 0.8 + "px " + this.fontFamily;
    context.fillText(
      "Streng dich mal ein bisschen mehr an!",
      this.game.width * 0.5,
      this.game.height * 0.5 + 20
    );
    this.restartGame();
    this.saveHighscore(this.game.score);
  }

  /**
   * Displays the restart button after the Match
   */
  restartGame() {
    const restart_link = document.getElementById("restart_link");
    if (restart_link) {
      restart_link.style.display = "block";
    }
  }

  /**
   * Fetch the Value of "highscore" from local storage
   * @returns Value of "highscore"
   */
  getHighscore() {
    return localStorage.getItem("highscore") || 0;
  }

  /**
   * Saving the "highscore" as a Num to local storage
   * @param {Num} score
   */
  saveHighscore(score) {
    const currentHighscore = localStorage.getItem("highscore");
    if (score > currentHighscore || currentHighscore === null) {
      localStorage.setItem("highscore", score);
    }
  }
}
