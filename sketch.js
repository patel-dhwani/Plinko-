const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight = 300;

function setup() {
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;


    lowerborder = new Ground(240, 850, windowWidth*windowWidth, 15);
    leftborder = new Ground(windowWidth-windowWidth+4, 375, 15, 960);
    rightborder = new Ground(windowWidth-20, 375, 15, 960);

    for (var i = 0+21; i <= windowWidth; i = i + 80) {
        divisions.push(new Bar(i, 814 - 300 / 2, 20, 350));
    }
    for (var k = 40; k <= windowWidth-10; k = k + 50) {
        plinkos.push(new Plinko(k, 75));
    }
    for (var k = 80; k <= windowWidth-20; k = k + 50) {
        plinkos.push(new Plinko(k, 175));
    }
    for (var k = 40; k <= windowWidth; k = k + 50) {
        plinkos.push(new Plinko(k, 275));
    }
    for (var k = 80; k <= windowWidth-80; k = k + 50) {
        plinkos.push(new Plinko(k, 375));
    }

}

function draw() {
    background("white");
    Engine.update(engine);
    lowerborder.display();
    leftborder.display();
    rightborder.display();


    if (frameCount % 50 === 0) {
        particles.push(new Particle(random(width / 5 - 100, width / 2 + 50), 0, 12));
    }
    for (var a = 0; a < particles.length; a++) {
        particles[a].display();
    }

    for (var m = 0; m < divisions.length; m++) {

        divisions[m].display();
    }
    for (var i = 0; i < plinkos.length; i++) {
        plinkos[i].display();
    }
}