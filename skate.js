var sketchProc = function (processingInstance) {
    with(processingInstance) {
        size(400, 400);
        frameRate(30);

        // ProgramCodeGoesHere

        var rolPlace = 474;
        var speed = -2;

        draw = function () {

            background(98, 156, 181);
            fill(211, 183, 232);
            stroke(40, 30, 110);
            strokeWeight(10);
            rect(50, 20, 300, 80);

            fill(9, 40, 125);
            textSize(30);
            text("ROLLER SKATING", 71, 53);
            textSize(16);
            text("It's never too late to start", 72, 87);



            stroke(13, 12, 12);
            strokeWeight(3);
            fill(255, 0, 0);
            beginShape();
            curveVertex(rolPlace, 273);
            curveVertex(rolPlace + 137, 295);
            curveVertex(rolPlace + 118, 178);
            curveVertex(rolPlace + 57, 232);
            curveVertex(rolPlace - 46, 313);
            curveVertex(rolPlace + 360, 828);
            endShape();
            strokeWeight(5);
            fill(101, 48, 217);

            for (var i = 0; i < 4; i++) {
                var rolX = -43 + (i * 53);
                ellipse(rolPlace + rolX, 310, 50, 50);

            }

            strokeWeight(2);
            rect(rolPlace + 63, 175, 75, 53);

            if (rolPlace > 256) {
                speed = -4;
            }
            if (rolPlace < 65) {
                speed = 4;
            }

            // move the ball
            rolPlace = rolPlace + speed;
            //żeby animowac odblokuj wers wyzej

        };


        //program ends here
    }
};
// Get the canvas that Processing-js will use
var canvas = document.getElementById("mycanvas2");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);
