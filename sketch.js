const Engine=Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Body= Matter.Body

var backGround, ball
var MyEngine, MyWorld

function preload(){
backGround= loadImage("Images/goal.jpg")

}

function setup() {
 var Canvas=createCanvas(800,400)
  
 MyEngine= Engine.create();
  MyWorld= MyEngine.MyWorld

  ball = new Ball()
  
  
}

function draw() {
  background(backGround); 
  Engine.update(MyEngine)

  ball.display();
  
}