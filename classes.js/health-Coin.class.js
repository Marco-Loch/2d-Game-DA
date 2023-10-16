class HealthCoin extends MovableObject {
    IMAGES = [
        'img/8_coin/health/Gold_11.png',
        'img/8_coin/health/Gold_12.png',
        'img/8_coin/health/Gold_13.png',
        'img/8_coin/health/Gold_14.png',
        'img/8_coin/health/Gold_15.png',
        'img/8_coin/health/Gold_16.png',
        'img/8_coin/health/Gold_17.png',
        'img/8_coin/health/Gold_18.png',
        'img/8_coin/health/Gold_19.png',
        'img/8_coin/health/Gold_20.png'
    ];

    offsetX = 3;
    offsetWidth = 5.5;
    

    constructor(x, y){
        super(x, y);
        this.loadImages(this.IMAGES);
        this.height = 50;
        this.width = 50;
        this.y = 350;
       
        this.animate();
        this.draw();
    }

    animate(){
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 1000/10);
    }

    draw(ctx) {
        if (this.img) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
    
}