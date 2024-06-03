var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var ballPosition = 0;
var database;
var backgroundImage
var backgroundImageMain
var form, player, game;

var goal1,goal2,goal1_img,goal2_img;
var ball,ball_img;
var player1,player2,player1_img,player2_img,player1_anim,player2_anim;
var reset_btn;
var players = [];

function preload(){
  backgroundImage = loadImage("./image/title.png")
  backgroundImageMain = loadImage("./image/football_feild.jpg")
  goal1_img = loadImage("./image/goal1Img.png")
  goal2_img = loadImage("./image/goal2Img.png")
  ball_img = loadImage("./image/ball.png")
  player1_img = loadImage("./image/player1.png")
  player2_img = loadImage("./image/player2.png")
  player1_anim = loadAnimation("./image/kicking_1.png","./image/kicking_2.png","./image/kicking_3.png","./image/kicking_4.png")
  player2_anim = loadAnimation("./image/kicking_1_2.png","./image/kicking_2_2.png","./image/kicking_3_2.png","./image/kicking_4_2.png")
}

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 background(backgroundImage)

 if(playerCount == 2){
  game.update(1)
 }

 if(gameState == 1){
  game.play()
 }

}
