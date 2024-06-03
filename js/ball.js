class Ball {
    constructor() {
        this.x = windowWidth / 2;
        this.y = windowHeight / 2;
        this.ball = createSprite(this.x, this.y, 10, 10)
        this.ball.scale = 0.1
        this.ball.addImage(ball_img)
    
    }

    getPosition() {
        var ballPositionRef = database.ref('ballPosition');
        ballPositionRef.on("value", function (data) {
            ballPosition = data.val();
            print("ballPosition", ballPosition)
            this.x = ballPosition.x
            this.y = ballPosition.y
        })
    }

    updatePosition() {
        database.ref('ballPosition').update({
            x: this.x,
            y: this.y
        });
    }
}