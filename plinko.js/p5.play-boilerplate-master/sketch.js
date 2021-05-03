const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles  = [];
var plinkos  = [];
var divisions = [];

var DivisionHeight = 300


function setup() {
  createCanvas(520,700);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

// Makes Divisions AND Base

{
  for(var k = 0; k <= width;k = k + 71){
    divisions.push(new Division(k+10,height/2+DivisionHeight,10,180))
  }

   base      = new Division (260,700,500,10);
}

  // makes Borders 
  {
    ground = new Ground (260,0,1200,10);
    ground2 = new Ground (520,350,10,1200);
    ground3 = new Ground (0,350,10,1200);
    ground4 = new Ground (260,700,1200,10);
    
}

// first row of plinko 
{

  p1  = new Plinko (25,100,5);
  p2  = new Plinko (40,100,5);
  p3  = new Plinko (55,100,5);
  p4  = new Plinko (70,100,5);
  p5  = new Plinko (85,100,5);
  p6  = new Plinko (100,100,5);
  p7  = new Plinko (115,100,5);
  p8  = new Plinko (130,100,5);
  p9  = new Plinko (145,100,5);
  p10 = new Plinko (160,100,5);
  p11 = new Plinko (175,100,5);
  p12 = new Plinko (190,100,5);
  p13 = new Plinko (205,100,5);
  p14 = new Plinko (220,100,5);
  p15 = new Plinko (235,100,5)
}
// second row of plinko 
{
  p16 = new Plinko (25,125,5);
  p17 = new Plinko (40,125,5);
  p18 = new Plinko (55,125,5);
  p19 = new Plinko (70,125,5);
  p20 = new Plinko (85,125,5);
  p21 = new Plinko (100,125,5);
  p22 = new Plinko (115,125,5);
  p23 = new Plinko (130,125,5);
  p24 = new Plinko (145,125,5);
  p25 = new Plinko (160,125,5);
  p26 = new Plinko (175,125,5);
  p27 = new Plinko (190,125,5);
  p28 = new Plinko (205,125,5);
  p29 = new Plinko (220,125,5);
  p30 = new Plinko (235,125,5);
  p31 = new Plinko (250,125,5);
  p32 = new Plinko (10,125,5);
}
// Third row for plinko 
{

  p33 = new Plinko (25,150,5);
  p34 = new Plinko (40,150,5);
  p35 = new Plinko (55,150,5);
  p36 = new Plinko (70,150,5);
  p37 = new Plinko (85,150,5);
  p38 = new Plinko (100,150,5);
  p39 = new Plinko (115,150,5);
  p40 = new Plinko (130,150,5);
  p41 = new Plinko (145,150,5);
  p42 = new Plinko (160,150,5);
  p43 = new Plinko (175,150,5);
  p44 = new Plinko (190,150,5);
  p45 = new Plinko (205,150,5);
  p46 = new Plinko (220,150,5);
  p47 = new Plinko (235,150,5)
}
//Forth row For PLinko 
{
  p48 = new Plinko (25,175,5);
  p49 = new Plinko (40,175,5);
  p50 = new Plinko (55,175,5);
  p51 = new Plinko (70,175,5);
  p52 = new Plinko (85,175,5);
  p53 = new Plinko (100,175,5);
  p54 = new Plinko (115,175,5);
  p55 = new Plinko (130,175,5);
  p56 = new Plinko (145,175,5);
  p58 = new Plinko (160,175,5);
  p59 = new Plinko (175,175,5);
  p60 = new Plinko (190,175,5);
  p61 = new Plinko (205,175,5);
  p62 = new Plinko (220,175,5);
  p63 = new Plinko (235,175,5);
  p64 = new Plinko (250,175,5);
  p65 = new Plinko (10,175,5);

}

//Fifth Row For PLinko
{

  p66 = new Plinko (25,200,5);
  p67 = new Plinko (40,200,5);
  p68 = new Plinko (55,200,5);
  p69 = new Plinko (70,200,5);
  p70 = new Plinko (85,200,5);
  p71 = new Plinko (100,200,5);
  p72 = new Plinko (115,200,5);
  p73 = new Plinko (130,200,5);
  p74 = new Plinko (145,200,5);
  p75 = new Plinko (160,200,5);
  p76 = new Plinko (175,200,5);
  p77 = new Plinko (190,200,5);
  p78 = new Plinko (205,200,5);
  p79 = new Plinko (220,200,5);
  p80 = new Plinko (235,200,5);
}
//Sixth Row For PLinko 
{
  p81 = new Plinko (25,225,5);
  p82 = new Plinko (40,225,5);
  p83 = new Plinko (55,225,5);
  p84 = new Plinko (70,225,5);
  p85 = new Plinko (85,225,5);
  p86 = new Plinko (100,225,5);
  p87 = new Plinko (115,225,5);
  p88 = new Plinko (130,225,5);
  p89 = new Plinko (145,225,5);
  p90 = new Plinko (160,225,5);
  p91 = new Plinko (175,225,5);
  p92 = new Plinko (190,225,5);
  p93 = new Plinko (205,225,5);
  p94 = new Plinko (220,225,5);
  p95 = new Plinko (235,225,5);
  p96 = new Plinko (250,225,5);
  p97 = new Plinko (10,225,5);
  
}
}

function draw() {
  background(0); 

 
 


  //makes Fall the ball
  {
     if(frameCount%60 === 0){
       particles.push(new Particle (random(width/4-10,width/4+10),10,10));
      
     }


  }
  // displays the particle 
  {
     for (var j  = 0;j<particles.length;j++){
       particles[j].display();
      
  }
  }
  // diplays Borders
  {
   ground.display();
   ground2.display();
   ground3.display();
   ground4.display();
  }
  // Displays Divisions 
  {
    for(k = 0; k<divisions.length;k++){
      divisions[k].display();
    }
     base.display();
     
  }
  

  // Displays first row of plinko 
  {
   p1.display();
   p2.display();
   p3.display();
   p4.display();
   p5.display();
   p6.display();
   p7.display();
   p8.display();
   p9.display();
   p10.display();
   p11.display();
   p12.display();
   p13.display();
   p14.display();
   p15.display();
  }
  // Displays Second Row For PLinko 
  {
    p16.display();
    p17.display();
    p18.display();
    p19.display();
    p20.display();
    p21.display();
    p22.display();
    p23.display();
    p24.display();
    p25.display();
    p26.display();
    p27.display();
    p28.display();
    p29.display();
    p30.display();
    p31.display();
    p32.display();
  
  }
//Displays  Third Row For Plinko 
{
   p33.display();
   p34.display();
   p35.display();
   p36.display();
   p37.display();
   p38.display();
   p39.display();
   p40.display();
   p41.display();
   p42.display();
   p43.display();
   p44.display();
   p45.display();
   p46.display();
   p47.display();

}
// Displays Forth Row For PLinko 
{
   p48.display();
   p49.display();
   p50.display();
   p51.display();
   p52.display();
   p53.display();
   p54.display();
   p55.display();
   p56.display();
   //p57.display();
   p58.display();
   p59.display();
   p60.display();
   p61.display();
   p61.display();
   p62.display();
   p63.display();
   p64.display();
   p65.display();
}
// Displays Fifth Row For Plinko 
{
   p66.display();
   p67.display();
   p68.display();
   p69.display();
   p70.display();
   p71.display();
   p72.display();
   p73.display();
   p74.display();
   p75.display();
   p76.display();
   p77.display();
   p78.display();
   p79.display();
   p80.display();
}
// DisplaYs Sixth Row For Plinko
{
  p81.display();
  p82.display();
  p83.display();
  p84.display();
  p85.display();
  p86.display();
  p87.display();
  p88.display();
  p89.display();
  p90.display();
  p91.display();
  p92.display();
  p93.display();
  p94.display();
  p95.display();
  p96.display();
  p97.display();
}


  drawSprites();
}