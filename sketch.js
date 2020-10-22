var hr, mt, seconds, hourAngle, minuteAngle,secondAngle;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  hr=hour()%12;
  mt=minute();
  seconds=second();
  angleMode(DEGREES);
  translate(200,200);
  secondAngle=map(seconds,0,60,0,360);
  minuteAngle=map(mt,0,60,0,360);
  hourAngle=map(hr,0,12,0,360);
  rotate(-90);
  push();
  rotate(secondAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0)
  pop();
  push();
  rotate(minuteAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,75,0);
    pop();
    push();
    rotate(hourAngle);
    stroke("blue");
    strokeWeight(7);
    line(0,0,50,0);
    pop();
    strokeWeight(10);
    noFill();
    stroke("red");
    arc(0,0,300,300,0,secondAngle);
    stroke("green");
    arc(0,0,280,280,0,minuteAngle);
    stroke("blue");
    arc(0,0,260,260,0,hourAngle);
}