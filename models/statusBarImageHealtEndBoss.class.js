class StatusBarImageHealtBoss extends DrawableObject {

    imageHealtBoss = [
        "img/7_statusbars/2_statusbar_endboss/orange/orange0.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange40.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange60.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange80.png",
        "img/7_statusbars/2_statusbar_endboss/orange/orange100.png"
    ];


    constructor() {
        super();
        this.loadImages(this.imageHealtBoss);
        this.setPercentageHealtBoss(100);
        this.width = 200;
        this.height = 65;
        this.x = 490;
        this.y = 0;        
    }


    setPercentageHealtBoss(percentage) {
        let path;
        this.y = 0;
        this.percentage = percentage;
        path = this.imageHealtBoss[this.resolveImageIndex()]
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage === 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 30) {
            return 1;
        } else {
            return 0;
        }
    }


}