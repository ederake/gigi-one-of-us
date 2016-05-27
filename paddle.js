function Paddle() {
    this.width = 60;
    this.height = 200;

    this.x = width / 2 - this.width / 2;
    this.y = height - 200;
    this.color = color(255);
    this.speed = 20;


    this.score = function() {
        this.color = color(0, 255, 0);
        score++;
        this.width +=2;

    }
    this.hit = function() {
        this.color = color(255, 0, 0);
        lives--;
        this.width -=5;
    }
    this.render = function() {
        fill(this.color);
        image(gigi, this.x, this.y, this.width, this.height);
        this.color = color(255);
    }
    this.moveRight = function() {
        this.x += this.speed;
        if (this.x + this.width > width) {
            this.x = width - this.width;
        }

    }
    this.moveLeft = function() {
        this.x -= this.speed;
        if (this.x < 0) {
            this.x = 0;
        }
    }
}