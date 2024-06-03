class Player {
  constructor() {
    this.name = null;
    this.positionX = 0;
    this.positionY = 0;
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", function (data) {
      playerCount = data.val();
      print("playerCount", playerCount)
    })
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;

    if (this.index === 1) {
      this.positionX = windowWidth - 250;
    } else {
      this.positionX = windowWidth / 9 + 120;
    }

    database.ref(playerIndex).set({
      name: this.name,
      positionX: this.positionX,
      positionY: this.positionY,
    });
  }

  updateCount(count) {
    print(count)
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name) {
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name: name
    });
  }

  collisionBall() {
    if (player.isToucing(ball)) {

      if (keyDown(RIGHT_ARROW)) {
        ball.x = ball.x + 5
        ball.updatePosition()
      }

      if (keyDown(LEFT_ARROW) && keyDown(UP_ARROW)) {
        ball.x = ball.x - 5
        ball.y = ball.y - 5
        ball.updatePosition()
      }

      if (keyDown(LEFT_ARROW) && keyDown(Down_ARROW)) {
        ball.x = ball.x - 5
        ball.y = ball.y + 5
        ball.updatePosition()
      }

      if (keyDown(RIGHT_ARROW)) {
        ball.x = ball.x - 5
        ball.updatePosition()
      }

      if (keyDown(RIGHT_ARROW) && keyDown(UP_ARROW)) {
        ball.x = ball.x + 5
        ball.y = ball.y - 5
        ball.updatePosition()
      }

      if (keyDown(RIGHT_ARROW) && keyDown(DOWN_ARROW)) {
        ball.x = ball.x + 5
        ball.y = ball.y + 5
        ball.updatePosition()
      }
    }
  }
}
