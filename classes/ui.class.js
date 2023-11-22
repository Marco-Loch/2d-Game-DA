export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 48;
    this.fontFamily = "Bangers";
  }

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
    context.fillText('Highscore: ' + this.getHighscore(), 450, 50)
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

  restartGame() {
    const restart_link = document.getElementById("restart_link");
    if (restart_link) {
      restart_link.style.display = "block";
    }
  }

  getHighscore() {
    return localStorage.getItem("highscore") || 0;
  }

  saveHighscore(score) {
    const currentHighscore = localStorage.getItem("highscore");
    if (score > currentHighscore || currentHighscore === null) {
      localStorage.setItem("highscore", score);
    }

}

}
