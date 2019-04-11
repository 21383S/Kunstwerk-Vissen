function setup() {
  createCanvas(400, 400);
  xPos = 400;
  yPos = 300;

  gPos = 0;
  wPos = 300;
  
  zPos = 400;
  mPos = 200;

  a = 1

}

function draw() {

  //background(46, 107, 145);
  noStroke() //lucht en wolken

  fill(168, 217, 244) //lucht
  rect(0, 0, 400, 150) //lucht

  fill(46, random (100,110), random(140,180)) //zee
  rect(0, 150, 400, 250) //zee
  
    wolk(0, 0); //links
    wolk(230,10); //rechts

    eend(0,0);

    vis(xPos, yPos+20, 183, 145, 255); //paars
  
        xPos = xPos - 1.5;  
  
        if (xPos < 0) {
        xPos = xPos + 400;
  }
  
  
    visje(gPos, wPos-30, 84, 211, 157); //groen
  
        gPos = gPos + 2;
  
        if (gPos > 400) {
        gPos = gPos - 400;
  }


    vis(zPos, mPos, 255,145,205) //roze

        zPos = zPos - 1;

        mPos = mPos - a
        if (mPos < 190) {
        a = -0.5
  }

        if (mPos > 220) {
        a = 0.5
  }

        if (zPos < 0) {
        zPos = zPos + 400


  }

}




function eend(x,y) {
    fill(255, 40, 0)
    triangle(x + 235, y + 137, x + 220, y + 132, x +  220, y + 142)
    fill(255,255,139)
    ellipse(x + 205, y + 150, 40, 20)
    ellipse(x + 218, y + 138, 16, 16)
    fill(0)
    ellipse(x + 218,y + 136,3,3)

}



function wolk(x, y) {
  fill(255)
  ellipse(x + 70,y + 57,38) // links onder
  ellipse(x + 95,y + 57,40) // midden onder
  ellipse(x + 120,y + 57,38) // rechts onder
  ellipse(x + 75,y + 40,30) // links boven
  ellipse(x + 95,y + 30,30) // midden boven
  ellipse(x + 115,y + 40,30) // rechts boven

}


function vis(x, y, r, g, b) {
  fill(r, g, b)
  ellipse(x + 20, y + 10, 40, 20)
  triangle(x + 35, y + 10, x + 48, y + 2, x + 48, y + 18)
  fill(0)
  ellipse(x + 10, y + 9, 2.5)


}

function visje(x, y, r, g, b) {
  fill(r, g, b)
  ellipse(x - 20, y - 10, 40, 20)
  triangle(x - 35, y - 10, x - 48, y - 2, x - 48, y - 18)
  fill(0)
  ellipse(x - 10, y - 11, 2.5)


}
