var sketchProc = function (processingInstance) {
    with(processingInstance) {
        size(400, 400);
        frameRate(30);

        // ProgramCodeGoesHere



        
 //parametrów funkcji nie muszę wcześciej definiować      
/*var centerX = 200;
var centerY = 100;
//var bodyLength = 118; 
var bodyHeight = 74;
var bodyColor = color(162, 0, 255); 
var bubX = 200;
var bubY = 350;
var bubSize = 15;
var bubRing = 5;*/


 

draw = function() {
    background(89, 216, 255);
   
    var Fish = function(centerX, centerY, bodyHeight, eyeSize, rotation, ogon ,ogonSkret, bodyLength){
        fill(color(random(255), random(255), random(255)));//kolory korpusów zmieniaja się randomowo
        frameRate(3);
        var bodyLength = random(30,100);//ponieważ te trzy parametry maja randomowe wielkości umieszczone są w definicji funkcji na końcu i nie określam juz ich wielkości dla kazdej rysowanej rybki
        frameRate(8);
        var ogon = random(1,8);
        var ogonSkret = random(1,3);
            //var eyeSize = random(3,20);
        //jak latwiej zmieniac kolor?
        /*var x = random (0,400);
        var y = random (0,400);
        var z = random (0,400);*/
        //tak jak k- kolor oka, a raczej odcień szarosci zmieniałam wczesniej kolor rybek ale wydaje mi sie że łatwiej jest je recznie pokolorowac funkcja fill niz manipulowac trzema dodatkowymi zmiennymi, ale...to dalej nie jest dobrze...nie moge np narysowac ogona w innym kolorze niz tułów- jednak to zrobiłam, a kolor oka dałam stały:)
        
        
        pushMatrix();//polecenie, mówiące ze będziemy rotować
        rotate(rotation);//jak bardzo będziemy rotować
        noStroke();
         //  fill(x,y,z);
        // body
        ellipse(centerX, centerY, bodyLength, bodyHeight);
        // tail
        fill(color(random(255), random(255), random(255)));//kolory ogonów zmieniaja sie randomowo
        var tailWidth = bodyLength/ogon;
        var tailHeight = bodyHeight/2;
        triangle(centerX-bodyLength/2, centerY,
                centerX-bodyLength/ogonSkret-tailWidth, centerY-tailHeight,
                centerX-bodyLength/2-tailWidth, centerY+tailHeight);
                
        // eye
        fill(10, 5, 10);
        ellipse(centerX+bodyLength/4, centerY, eyeSize, eyeSize);
        popMatrix();//koniec rotowania
            
        
        
    };
    
    var bubbles = function(bubX, bubY, bubSize, bubRing){
        var bubRing = random(1,8);
       
    
        fill(232, 223, 227);
        stroke(120, 176, 204);
        strokeWeight(bubRing);
        ellipse(bubX,bubY,bubSize,bubSize); 
        
    };

    //centerX, centerY, bodyHeight, eyeSize,rotation
   // fill(196, 47, 47);//wersja,  że rybki maja stałe kolory
    Fish(114,322,-138,20,radians(-9)); //rybki i babelki są w róznej kolejności,bo raz rybka ma byc z przodu a raz bąbel:)
    bubbles(355,254,38);
   // fill(207, 195, 23);
    Fish(218,198,30,5,radians(20));
    bubbles(53,245,32);
   // fill(0, 9, 255);
    Fish(292,105,73,20,radians(4));
    bubbles(234,359,16);
    //fill(82, 22, 115);
    Fish(266,342,30,8,radians(-8));
    bubbles(255,48,58);
   // fill(96, 125, 45);
    Fish(-171,-17,36,10,radians(-179));//zrotowane
   // fill(148, 99, 35);
    Fish(-92,-93,111,8,radians(-165));
   // fill(255, 0, 0);
    Fish(-54,-218,51,11,radians(-202));
    //fill(31, 201, 12);
    Fish(-332,-131,71,19,radians(-164));
    bubbles(200,200,23);
    bubbles(64,200,22);
    bubbles(143,111,13);
    bubbles(2,76,34);
    bubbles(373,116,18);
    bubbles(328,392,23);
   // fill(255, 136, 0);
    Fish(-102,-328,71,19,radians(-164));
    //fill(201, 100, 100);
    Fish(232,397,-55,25,radians(-7)); 
    //fill(94, 30, 21);
    Fish(200,200,30,9,radians(5));
    

};

/*mouseMoved = function(){
    fill(255, 0, 0);
    ellipse(200,200,352,155);
    fill(18, 16, 16);
    ellipse(200,200,322,125);
    
};*/


/*frameRate(8);
centerX++;//y...no efekt super ale nie takiego sie spodziewałam...
bubY++;*/





        //program ends here
    }
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas1");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);