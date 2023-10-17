class Level {
  enemies;
  grounds;
  foregrounds;
  middleDecor;
  backgroundObjects;
  healthCoin;
  manaCoin;
  level_end_x = 6000;


  constructor(enemies, grounds, foregrounds, middleDecor, backgroundObjects, healthCoin, manaCoin) {
    this.enemies = enemies;
    this.grounds = grounds;
    this.foregrounds = foregrounds;
    this.middleDecor = middleDecor;
    this.backgroundObjects = backgroundObjects;
    this.healthCoin = healthCoin;
    this.manaCoin = manaCoin;
  }
}
