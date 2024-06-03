class Form {
  constructor() {
    this.input = createInput("");
    this.button = createButton('Play');
    this.title = createElement('h2').html("Football Game");
    this.greeting = createElement('h3');
  }

  handleMousePressed() {
    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      var name = this.input.value();
      playerCount += 1;
      player.update(name)
      player.updateCount(playerCount);
      this.greeting.html("Hello " + name +" Waiting for other player")
      this.greeting.position(windowWidth/2-250, windowHeight/5)
      this.greeting.class("greeting")

      player.addPlayer()
    });
  }
  
  handelPosition(){
  this.title.position(windowWidth / 2 - 70, 0);
  this.input.position(windowWidth / 2 - 90, 160);
  this.button.position(windowWidth / 2 - 75, windowHeight - 200);
  }

  handleClass(){
    this.title.class("gameTitle")
    this.input.class("customInput")
    this.button.class("customButton")
  }

  hide() {
    this.greeting.hide()
    this.title.hide()
    this.input.hide()
    this.button.hide()
  }
  

  display() {
    this.handelPosition()
    this.handleClass()
    this.handleMousePressed()
  }


}
