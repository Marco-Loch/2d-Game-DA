const LEVEL1 = new Level(
  [],
  [new Ground(-720), new Ground(0), new Ground(720), new Ground(720 * 2)],
  [
    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', -720),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', -720),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', -720),
    // new BackgroundObject('img/5_background/layers/1_first_layer/Ground.png', -720),

    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', 0),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', 0),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', 0),
    // new BackgroundObject('img/5_background/layers/1_first_layer/Ground.png', 0),

    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', 720),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', 720),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', 720),

    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', 720 * 2),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', 720 * 2),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', 720 * 2)
  ]
);
