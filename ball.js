function Ball(paddle) {
    this.paddle = paddle;
    this.speed = 5;
    this.size;


    this.testPaddle = function() {
        var top = (this.y + this.size / 2 > this.paddle.y);
        var bottom = (this.y - this.size / 2 < this.paddle.y + this.paddle.height);
        var left = (this.x + this.size / 2 > this.paddle.x);
        var right = (this.x - this.size / 2 < this.paddle.x + this.paddle.width - 50);

        if (top && bottom && left && right) {
            if (this.bad) {
                this.paddle.hit();

            } else {
                this.paddle.score();
            }
            this.init();
        }
    }

    this.init = function() {
        this.bad = (random(0, 100) < 20);
        this.x = random(20, width - 20);
        this.y = random(-height, -20);

    }

    this.init();
    this.render = function() {
        if (this.bad) {
            fill(255, 0, 0);
            this.size = 50;
            image(dulcolax, this.x, this.y, this.size, this.size);
        } else {
            fill(255);
            this.size = 50;
            image(hamburger, this.x, this.y, this.size, this.size);

        }
        noStroke();
    }
    this.update = function() {
        this.y += this.speed;

        this.testPaddle();

        if (this.y > height) {
            this.init();
        }
    }
    this.check = function(ball) {
        if (dist(this.x, this.y, ball.x, ball.y) < 130) {
            this.x = random(20, width - 20);
            this.y = random(-height, -20);
        }
    }
}