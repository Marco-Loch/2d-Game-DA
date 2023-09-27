const LEVEL1 = new Level(
  [],
  [
    new Ground(-720, globalThis.keyboard), 
    new Ground(0, globalThis.keyboard), 
    new Ground(720, globalThis.keyboard), 
    new Ground(720 * 2, globalThis.keyboard), 
    new Ground(720 * 3, globalThis.keyboard)
  ],
  [
    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', -720),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', -720),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', -720),

    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', 0),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', 0),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', 0),

    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', 720),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', 720),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', 720),

    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', 720 * 2),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', 720 * 2),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', 720 * 2),

    new BackgroundObject('img/5_background/layers/4_fourth_layer/BG_Decor.png', 720 * 3),
    new BackgroundObject('img/5_background/layers/3_third_layer/Middle_Decor.png', 720 * 3),
    new BackgroundObject('img/5_background/layers/2_second_layer/Foreground.png', 720 * 3)
  ]
);
