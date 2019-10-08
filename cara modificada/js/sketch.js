let mic;

function setup() {
  createCanvas(400, 400);
  background(0);
  //noStroke es sense contorn
  noStroke();
    
    
    //per fer audio interactiu
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    //audio, per saber num d volum
    micLevel = mic.getLevel();
    
    //map - qué, desde on, fins on va, on vols que comensi, on vols que acabi. - fa que un rang el fagi de mes gran a mes petit o al reves
    mov = map(micLevel, 0, 1, 10, 500);
    col = map(micLevel, 0, 1, 0, 255);
    mov2 = map(micLevel, 0, 1, 1, 100);
    
  var boca_w = width/1.75;
  noStroke();
  push();
  translate(width/2, height/2);
  rectMode(CENTER);
  //fons de la boca
  fill('red');
  rect(0, 100, boca_w, 200);
  
  //llengua
  fill(255,150+col,0);
  rect(0, 150, boca_w, 100, 10+mov);
  
  //dents
  fill(255)
  rect(0, 20, boca_w, 50, 10+mov2);
  
  //barbeta
  fill('grey');
  rect(0,180,boca_w,100*mov2);
  pop();
  
  //front
  fill('grey');
  rect(0,0, width, height/1.8);
  
  //ull esquerre
  fill(255);
  ellipse(width*0.25, height/2.5, 40+mov2);
  fill('brown');
  ellipse(width*0.25, height/2.5, 10+mov);
  
  //ull dret
  fill(255);
  ellipse(width*0.75, height/2.5, 40+mov);
  fill('brown');
  ellipse(width*0.75, height/2.5, 10+mov);
  
  //nas
  noFill();
  stroke(255);
  strokeWeight(10*mov2);
  arc(width*0.5, height/1.85, 60, 60, radians(230), radians(310));
  
}
function touchStarted () {
    getAudioContext().resume();
}