function city() {

    var sketchProc = function (processingInstance) {
        with(processingInstance) {
            size(400, 400);
            frameRate(30);

            // ProgramCodeGoesHere






            var xPos = 317;
            var yPos = 57;
            var starSize = 10;
            var carPos = 292;
            var star2Size = 70;
            var a = 154;

            draw = function () {


                background(29, 40, 115);



                fill(212, 222, 29); //znikajaca gwiazda
                ellipse(50, 50, star2Size, star2Size);
                ellipse(160, 87, star2Size, star2Size);

                ellipse(96, 79, 10, 10); //stałe gwiazdy
                ellipse(48, 110, 15, 15);
                ellipse(132, 149, 10, 10);
                ellipse(96, 177, 12, 12);
                ellipse(156, 63, 8, 8);
                ellipse(32, 159, 8, 8);

                arc(200, 91, 53, 59, -97, 107);



                fill(99, 82, 82); //wiezowiec 1
                rect(50, 269, 27, 112);

                fill(224, 179, 32); //okna

                for (var i = 0; i < 5; i++) { //to samo, co niżej ale sprytniej:)
                    var starY = 277 + 15 * i;
                    rect(53, starY, 8, 10);
                }
                for (var i = 0; i < 5; i++) {
                    var starY2 = 277 + 15 * i;
                    rect(64, starY2, 8, 10);

                }
                /* rect(53,277, 8, 10);
                 rect(53,292, 8, 10);
                 rect(64,277, 8, 10);
                 rect(64,292, 8, 10);
                 rect(53,306, 8, 10);
                 rect(64,306, 8, 10);
                 rect(64,319, 8, 10);
                 rect(53,319, 8, 10);
                 rect(64,332, 8, 10);
                 rect(53,332, 8, 10);
                 fill(110, 54, 13);*/
                rect(61, 350, 13, 28); //okna




                fill(71, 44, 44); //droga
                rect(0, 379, 400, 30);

                /* fill(255, 0, 0);//samochod poruszany myszką:)
                 rect(mouseX, 360, 100, 30);
                 rect(mouseX + 32, 338, 60, 22);
                 fill(13, 12, 12);
                 ellipse(mouseX + 16, 386, 25, 25);
                 ellipse(mouseX + 85, 386, 25, 25);*/



                fill(255, 0, 0); //samochod
                rect(carPos, 360, 100, 30);
                rect(carPos + 32, 338, 60, 22);
                fill(13, 12, 12);
                ellipse(carPos + 16, 386, 25, 25);
                ellipse(carPos + 85, 386, 25, 25);

                fill(59, 48, 48); //wiezoiec 2
                rect(100, 260, 40, 138);
                fill(13, 12, 12);

                for (i = 0; i < 6; i++) { // to samo, co nizej ale szybciej
                    var rectY = 268 + 20 * i;
                    rect(103, rectY, 33, 12);

                }
                /*rect(103,268,33,12);//okna
                rect(103,286,33,12);
                rect(103,306,33,12);
                rect(103,326,33,12);
                rect(103,346,33,12);
                rect(103,366,33,12);
                rect(103,386,33,12);*/


                fill(255, 242, 0); //spadajaca gwiazda
                ellipse(xPos, yPos, starSize, starSize);

                fill(54, 30, 7); //drzewo
                rect(385, 259, 33, 140);
                fill(12, 84, 24);
                ellipse(380, 264, 50, 50);
                ellipse(389, 228, 44, 44);
                ellipse(359, 237, 56, 56);
                ellipse(380, 199, 38, 38);
                ellipse(392, 163, 58, 58);
                ellipse(363, 171, 60, 60);
                ellipse(352, 203, 40, 40);
                ellipse(374, 154, 40, 40);

                fill(219, 222, 33);
                triangle(a + 153, a, a + 100, a, a + 125, a - 40); //gwiazda
                triangle(a + 130, a + 15, a + 100, a - 30, a + 150, a - 30);



                a++;
                xPos -= 1;
                yPos += 2;
                starSize += 1;
                frameRate(95); //liczba klatek na sek, czy szybko jedzie czy wolno
                carPos -= 2;
                star2Size -= 1;
                //starSize *= 200/199;//nie wiem jak to zatrzymac, wraca po pewnym czasie jako zolta plama i zajmuje caly ekran...
                if (carPos === -200) {
                    noLoop();


                }

            };

        }




        //program ends here
    }

    // Get the canvas that Processing-js will use
    var canvas = document.getElementById("mycanvas");
    // Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
    var processingInstance = new Processing(canvas, sketchProc);
};




city();
