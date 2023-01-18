class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "introduce tu nombre");
    this.playButton = createButton("jugar");
    this.titleImg = createImg("./assets/title.png", "titulo del juego");
    this.greetng = createElement("h2");
  }

  setElementsPosition(){
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width /2 -90, height /2 -5);
    this.titleImg.position(120, 60);
    this.greetng.position(width / 2 -300, height / 2 - 100);

  }

  setElementsStyle(){
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.titleImg.class("gameTitle");
    this.greetng.class("greeting");
  }

  hide(){
    this.input.hide();
    this.playButton.hide();
    this.greetng.hide();
    
   
  }

  
  

  handleMousePressed(){
   this.playButton.mousePressed(()=>{
   this.input.hide();
   this.playButton.hide();
   var message = ` Hola ${this.input.value()} </br>Espera a que se una otro jugador...`;
   this.greetng.html(message);
   playerCount += 1;
   player.name = this.input.value();
   player.index = playerCount;
   player.updateCount(playerCount);
   player.addPlayer();
   player.getDistance();
});

  }

  display(){
    this.setElementsPosition();
    this.handleMousePressed();
    this.setElementsStyle();

  }
}
