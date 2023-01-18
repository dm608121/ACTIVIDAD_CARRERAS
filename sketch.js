var canvas;
var backgroundImage;
var bgImg;
var database, gameState;
var form, player;
var playerCount;
var car1_img;
var car2_img;
var track;

var fuelImage;
var powerCoinImage;
var lifeImage;

var fuels;
var powerCoins;

var allPlayers;


var car1, car2;
var cars = [];

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.png");
  fuelImage = loadImage("./assets/combustible.png");
  powerCoinImage = loadImage("./assets/Moneda.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);

  if(playerCount === 2){
     game.update(1)
  }

  if(gameState === 1){
    game.play();
  }
  //console.log(database);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
