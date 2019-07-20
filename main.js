function opoznieniexD() {
    console.log('pyk');
}

const obiekt = document.querySelector("#obiekt");

let y = 250,
    x = 250,
    ammo, orient, pomocnik, kolizja = 0,
    licznik = 0;
let lewo, prawo, gora, flagaG, flagaL, flagaY, flagaX, flagaB;
const pocisk = new Array(30);
const bambino = new Array(30);

const ruch = function (e) {


    if (e.keyCode == 38) {
        obiekt.style.backgroundImage = "url('gora.jpg')";
        if (y == 0) {
            obiekt.style.setProperty('top', y + "px");
            console.log('strzalkagora');
        } else {
            orient = true;
            flagaY = y;
            y -= 10;
            obiekt.style.setProperty('top', y + "px");
            console.log('strzalkagora');
        }

    } else if (e.keyCode == 39) {
        obiekt.style.backgroundImage = "url('prawo.jpg')";
        if (x == 450) {
            obiekt.style.setProperty('left', x + "px");
            console.log('strzalkaprawo');
        } else {
            orient = false;
            flagaX = x;
            x += 10;
            obiekt.style.setProperty('left', x + "px");
            console.log('strzalkaprawo');
        }



    } else if (e.keyCode == 40) {
        obiekt.style.backgroundImage = "url('dol.jpg')";
        if (y == 450) {
            obiekt.style.setProperty('top', y + "px");
            console.log('strzalkadol');
        } else {
            flagaY = y;
            orient = true;
            y += 10;
            obiekt.style.setProperty('top', y + "px");
            console.log('strzalkadol');
        }
    } else if (e.keyCode == 37) {
        obiekt.style.backgroundImage = "url('lewo.jpg')";
        if (x == 0) {
            obiekt.style.setProperty('left', x + "px");
            console.log('strzalkalewo');
        } else {
            flagaX = x;
            orient = false;
            x -= 10;
            obiekt.style.setProperty('left', x + "px");
            console.log('strzalkalewo');
        }
    }
    
    
        if (e.keyCode == 32) //strzelamyyyy!
        {
            pocisk[licznik] = document.createElement("div"); //tworzenie elementu
            pocisk[licznik].setAttribute("class", 'bum'); //ustawiamy klase
            lewo = x;
            gora = y;

            if (flagaX > x && orient == false) //patrzy w lewo -- IDEALNE
            {
                flagaL = lewo;
                lewo -= 10;
                gora += 25;
                pocisk[licznik].style.width = "10px";
                pocisk[licznik].style.height = "5px";
                pomocnik = 1;


            } else if (flagaX < x && orient == false) //patrzy w prawo --- IDEALNE
            {
                flagaL = lewo;
                lewo += 50;
                gora += 23;
                pocisk[licznik].style.width = "10px";
                pocisk[licznik].style.height = "5px";
                pomocnik = 2;


            } else if (flagaY < y && orient == true) // patrzy w dol
            {
                flagaG = gora;
                lewo += 25;
                gora += 50;
                pocisk[licznik].style.width = "5px";
                pocisk[licznik].style.height = "10px";
                pomocnik = 3;

            } else if (flagaY > y && orient == true) {
                flagaG = gora;
                lewo += 22;
                gora -= 10;
                pocisk[licznik].style.width = "5px";
                pocisk[licznik].style.height = "10px";
                pomocnik = 4
            }
           


            pocisk[licznik].style.left = lewo + "px";
            pocisk[licznik].style.top = gora + "px"; // pobieranie wspolrzednych naszej postaci

            document.querySelector("#pole").appendChild(pocisk[licznik]); //tworzenie pocisk[licznik]u


            const strzal = function () { //animacja ruchu pocisk[licznik]u

                if (pomocnik == 3) //w dol skier
                {
                    if (gora>=480) {
                        kolizja = 1;
                    } else {
                        gora += 20;
                    }

                } else if (pomocnik == 4) // w gore skier
                {
                    if (gora<=0) {
                        kolizja = 1;
                    } else {
                        gora -= 20;
                    }
                } else if (pomocnik == 1) //w lewo skier
                {
                    if (lewo<=0) {
                        kolizja = 1
                    } else {
                        lewo -= 20;
                    }

                } else if (pomocnik == 2) //w prawo skier
                {
                    if (lewo>=480) {
                        kolizja = 1
                    } else {
                        lewo += 20;
                    }
                }
                
                pocisk[licznik] = document.querySelector('.bum'); //!!! bo kurde ta funkcja nie widzi pocisk[licznik], wiec musimy poinformowac!!
                pocisk[licznik].style.setProperty('left', lewo + "px"); // dopiero wtedy te instrukcje zadzialaja
                pocisk[licznik].style.setProperty('top', gora + "px"); // nie mam pojecia dlaczego tego nie widzi, ale dobra...
                flagaB = licznik;

                setTimeout(function(){},500);

                if (kolizja == 1) {
                    clearInterval(interwal);
                    kolizja = 0;
                    document.querySelector("#pole").removeChild(pocisk[licznik]);
                }

                
                licznik++;
                setTimeout(function(){},200);
            }

            console.log("buuu");
            const interwal = setInterval(strzal,5);
            
        }
}

window.addEventListener('keydown',ruch);
window.addEventListener('keydown',strzal)