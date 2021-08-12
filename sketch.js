const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const constraint=Matter.Constraint
var engine,world
var droplets
var walking
function preload(){
    animation=loadAnimation("walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png,")

}

function setup(){
    createCanvas(1200,800)
    engine=Engine.create()
    world=engine.world
    droplets=new droplet(300,200,30)
     
   Engine.run(engine)
}

function draw(){
    droplets.display()
    image(animation,100,200,100,100)
    walking.display()
    
}   

