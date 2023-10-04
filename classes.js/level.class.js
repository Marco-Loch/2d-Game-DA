class Level {
  enemies;
  grounds;
  foregrounds;
  middleDecor;
  backgroundObjects;
  level_end_x = 2200;


  constructor(enemies, grounds, foregrounds, middleDecor, backgroundObjects) {
    this.enemies = enemies;
    this.grounds = grounds;
    this.foregrounds = foregrounds;
    this.middleDecor = middleDecor;
    this.backgroundObjects = backgroundObjects;
  }
}
