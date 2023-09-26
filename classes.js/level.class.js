class Level {
  enemies;
  grounds;
  backgroundObjects;
  level_end_x = 2200;


  constructor(enemies, grounds, backgroundObjects) {
    this.enemies = enemies;
    this.grounds = grounds;
    this.backgroundObjects = backgroundObjects;
  }
}
