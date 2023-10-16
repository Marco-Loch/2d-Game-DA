class ManaCoin extends MovableObject {
    IMAGES = [
        'img/8_coin/mana/Silver_21.png',
        'img/8_coin/mana/Silver_22.png',
        'img/8_coin/mana/Silver_23.png',
        'img/8_coin/mana/Silver_24.png',
        'img/8_coin/mana/Silver_25.png',
        'img/8_coin/mana/Silver_26.png',
        'img/8_coin/mana/Silver_27.png',
        'img/8_coin/mana/Silver_28.png',
        'img/8_coin/mana/Silver_29.png',
        'img/8_coin/mana/Silver_30.png'
        
    ];

    offsetX = 3;
    offsetWidth = 5.5;
    offsetY = 3;
    offsetHeight = 5.5;

    constructor(x, y){
        super(x, y);
        this.loadImages(this.IMAGES);
        this.height = 40;
        this.width = 40;
        this.y = 200;
       
        this.animate();
        this.draw();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 1000/20);
    }

    draw(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
}