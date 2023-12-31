import { Dust, Fire, Splash } from "./particles.class.js";


const states = {
  SITTING: 0,
  RUNNING: 1,
  JUMPING: 2,
  FALLING: 3,
  ROLLING: 4,
  DIVING: 5,
  HIT: 6,
};

class State {
  constructor(state, game) {
    this.state = state;
    this.game = game;
    this.jumpingHeight = 27;

  }

}

///////////////////////////SITTING/////////////////////////

export class Sitting extends State {
  constructor(game) {
    super("SITTING", game);
  }

  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 4;
    this.game.player.frameY = 5;
  }

  handleInput(input) {
    if (input.includes("a") || input.includes("d")) {
      this.game.player.setState(states.RUNNING, 1);
    } else if (input.includes("Enter")) {
      this.game.player.setState(states.ROLLING, 1.5);
    }
  }
}

//////////////////////////RUNNING/////////////////////////

export class Running extends State {
  constructor(game) {
    super("RUNNING", game);
  }

  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 8;
    this.game.player.frameY = 3;
  }

  handleInput(input) {
    this.game.particles.unshift(
      new Dust(
        this.game,
        this.game.player.x + this.game.player.width * 0.6,
        this.game.player.y + this.game.player.height
      )
    );
    if (input.includes("s")) {
      this.game.player.setState(states.SITTING, 0);
    } else if (input.includes("w")) {
      this.game.player.setState(states.JUMPING, 1);
    } else if (input.includes("Enter")) {
      this.game.player.setState(states.ROLLING, 1.5);
    }
  }
}

////////////////////////////JUMPING/////////////////////////

export class Jumping extends State {
  constructor(game) {
    super("JUMPING", game);
  }

  enter() {
    if (this.game.player.onGround()) this.game.player.vy -= this.jumpingHeight;
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 6;
    this.game.player.frameY = 1;
  }

  handleInput(input) {
    
    this.game.particles.unshift(
      new Dust(
        this.game,
        this.game.player.x + this.game.player.width * 0.6,
        this.game.player.y + this.game.player.height
      )
    );
    if (this.game.player.vy > this.game.player.weight) {
      this.game.player.setState(states.FALLING, 1);
    } else if (input.includes("Enter")) {
      this.game.player.setState(states.ROLLING, 1.5);
    } else if (input.includes("s")) {
      this.game.player.setState(states.DIVING, 0);
    }
  }
}

///////////////////////////FALLING//////////////////////////

export class Falling extends State {
  constructor(game) {
    super("FALLING", game);
  }

  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 6;
    this.game.player.frameY = 2;
  }

  handleInput(input) {
    this.game.particles.unshift(
      new Dust(
        this.game,
        this.game.player.x + this.game.player.width * 0.6,
        this.game.player.y + this.game.player.height
      )
    );
    if (this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING, 1);
    } else if (input.includes("s")) {
      this.game.player.setState(states.DIVING, 0);
    }
  }
}

////////////////////////////ROLLING//////////////////////////

export class Rolling extends State {
  constructor(game) {
    super("ROLLING", game);
  }

  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 6;
    this.game.player.frameY = 6;
  }

  handleInput(input) {
    this.game.sound.spin.play();
    this.game.particles.unshift(
      new Fire(
        this.game,
        this.game.player.x + this.game.player.width * 0.5,
        this.game.player.y + this.game.player.height * 0.5
      )
    );
    if (!input.includes("Enter") && this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING, 1);
    } else if (!input.includes("Enter") && !this.game.player.onGround()) {
      this.game.player.setState(states.FALLING, 1);
    } else if (
      input.includes("Enter") &&
      input.includes("w") &&
      this.game.player.onGround()
    ) {
      this.game.player.setState(states.JUMPING, 1.5);
    } else if (input.includes("s") && !this.game.player.onGround()) {
      this.game.player.setState(states.DIVING, 0);
    }
  }
}

///////////////////////////DIVING//////////////////////////

export class Diving extends State {
  constructor(game) {
    super("DIVING", game);
  }

  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 6;
    this.game.player.frameY = 6;
    this.game.player.vy = 25;
  }

  handleInput(input) {
    this.game.particles.unshift(
      new Fire(
        this.game,
        this.game.player.x + this.game.player.width * 0.5,
        this.game.player.y + this.game.player.height * 0.5
      )
    );
    if (this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING, 1);
      this.game.sound.meteor.play();
      for (let i = 0; i < 30; i++) {
        this.game.particles.unshift(
          new Splash(
            this.game,
            this.game.player.x + this.game.player.width * 0.5,
            this.game.player.y + this.game.player.height
          )
        );
      }
    } else if (input.includes("Enter") && this.game.player.onGround()) {
      this.game.player.setState(states.ROLLING, 1.5);
    }
  }
}

/////////////////////////////HIT///////////////////////////////

export class Hit extends State {
  constructor(game) {
    super("HIT", game);
  }

  enter() {
    this.game.player.frameX = 0;
    this.game.player.maxFrame = 10;
    this.game.player.frameY = 4;
  }

  handleInput() {
    
    if (this.game.player.frameX >= 10 && this.game.player.onGround()) {
      this.game.player.setState(states.RUNNING, 1);
    } else if (this.game.player.frameX >= 10 && !this.game.player.onGround()) {
      this.game.player.setState(states.FALLING, 1);
    }
  }
}
