class Game {
  constructor() {
    this.reset_btn = createButton("")
  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }

  }

  handelSprites() {
    goal1 = createSprite(windowWidth - 100, windowHeight / 2 - 40, 10, 10)
    goal1.scale = 0.9
    goal1.addImage(goal1_img)

    goal2 = createSprite(windowWidth / 10 - 27, windowHeight / 2 - 50, 10, 10)
    goal2.scale = 0.9
    goal2.addImage(goal2_img)
    
    ball = new Ball()

    player1 = createSprite(windowWidth - 250, windowHeight / 2 - 40, 10, 10)
    player1.scale = 2.9
    player1.addImage(player1_img)

    player2 = createSprite(windowWidth / 9 + 120, windowHeight / 2 - 40, 10, 10)
    player2.scale = 1.9
    player2.addImage(player2_img)

    players = [player1, player2]
  }

  handleElements() {
    form.hide()
  }

  handelMousePressed() {
    this.reset_btn.mousePressed(() => {
      database.ref("/").set({
        playerCount: 0,
        gameState: 0,
        players: {},
      })
      window.location.reload();
    })
  }

  handelControls() {
    if (keyDown(LEFT_ARROW)) {
    player.x += 5
    player.update()
    }
  }

  play() {
    this.handleElements()
    imageMode(CENTER)
    image(backgroundImageMain, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight)

    this.reset_btn.position(windowWidth - 70, windowHeight / 12 - 50)
    this.reset_btn.class('resetButton')

    this.handelMousePressed()
    this.handelSprites()
    drawSprites()
  }
} 
