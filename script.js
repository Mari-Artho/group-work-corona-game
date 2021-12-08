
let playerOne = document.getElementById("p1");
let playerOneImg = document.getElementById("P1img");
let playerTwo = document.getElementById("p2");

let p1Pointstext = document.getElementById("p1Points");
let p2Pointstext = document.getElementById("p2Points");

let p1bottom = 250;
let p1left = 0;

let p2bottom = 250;
let p2left = 1100;

let p1left100 = p1left + 70;
let p1bottom100 = p1bottom + 80;

let p2left100 = p2left + 70;
let p2bottom100 = p2bottom + 80;

let p1points = 0;
let p2points = 0;

p1Pointstext.innerHTML = p1points;
p2Pointstext.innerHTML = p2points;

let corona = false;

//PlayerOne images
p1imgArray = new Array();
p1imgArray[0] = new Image();
p1imgArray[0].src = "p1still.PNG";
p1imgArray[1] = new Image();
p1imgArray[1].src = 'p1run.PNG';
p1imgArray[2] = new Image();
p1imgArray[2].src = 'p1stillcorona.PNG';
p1imgArray[3] = new Image();
p1imgArray[3].src = 'p1runcorona.PNG';

let p1img = document.getElementById("P1img");
p1img.src = p1imgArray[0].src;

//PlayerTwo Images
p2imgArray = new Array();
p2imgArray[0] = new Image();
p2imgArray[0].src = "p2still.PNG";
p2imgArray[1] = new Image();
p2imgArray[1].src = 'p2run.PNG';
p2imgArray[2] = new Image();
p2imgArray[2].src = 'p2stillcorona.PNG';
p2imgArray[3] = new Image();
p2imgArray[3].src = 'p2runcorona.PNG';

let p2img = document.getElementById("P2img");
p2img.src = p2imgArray[0].src;



document.addEventListener("keyup", (evt) => {

    switch (evt.key) {

        //PlayerONE
        case "a":
            //PlayerOne utanför skärm till vänster utanför skärm
            if (p1left < 20) {
                break;
            }
            p1left -= 20;
            p1left100 = p1left + 70;

            playerOne.style.left = p1left + "px";
            playerOne.classList = "mirror";

            //coronaFunction();
            p1ImgFunction();

            colision()
            break;

        case "d":
            if (p1left > 1080) {
                break;
            }
            p1left += 20;
            p1left100 = p1left + 70;

            playerOne.style.left = p1left + "px";
            playerOne.classList = "";

            //coronafunction();
            p1ImgFunction();
            colision()
            break;

        case "w":
            if (p1bottom > 480) {
                break;
            }
            p1bottom += 20;
            p1bottom100 = p1bottom + 80;

            playerOne.style.bottom = p1bottom + "px";

            //coronafunction();
            p1ImgFunction();
            colision()
            break;

        case "s":
            if (p1bottom < 20) {
                break;
            }
            p1bottom -= 20;
            p1bottom100 = p1bottom + 80;

            playerOne.style.bottom = p1bottom + "px";

            //coronafunction();
            p1ImgFunction();
            colision()
            break;

        //PlaterTWO
        case "ArrowLeft":

            if (p2left < 20) {
                break;
            }
            p2left -= 20;
            p2left100 = p2left + 70;

            playerTwo.style.left = p2left + "px";
            playerTwo.classList = "";

            p2ImgFunction();
            colision()
            break;

        case "ArrowRight":
            if (p2left > 1080) {
                break;
            }
            p2left += 20;
            p2left100 = p2left + 70;

            playerTwo.style.left = p2left + "px";
            playerTwo.classList = "mirror";

            p2ImgFunction();
            colision()
            break;

        case "ArrowUp":
            if (p2bottom > 480) {
                break;
            }
            p2bottom += 20;
            p2bottom100 = p2bottom + 80;

            playerTwo.style.bottom = p2bottom + "px";

            p2ImgFunction();
            colision()
            break;
        case "ArrowDown":
            if (p2bottom < 20) {
                break;
            }
            p2bottom -= 20;
            p2bottom100 = p2bottom + 80;

            playerTwo.style.bottom = p2bottom + "px";

            p2ImgFunction();
            colision()
            break;

        default:
            break;
    }
})

function colision() {

    if (
        p1left > p2left100 ||

        p1left100 < p2left ||

        p1bottom > p2bottom100 ||

        p1bottom100 < p2bottom
    ) {
        p1img.style.border = "";
        p2img.style.border = "";
    } else {

        if(corona){
            p2points++;
            p2Pointstext.innerHTML = p2points;
        }
        else{
            p1points++;
            p1Pointstext.innerHTML = p1points;
        }
        corona = !corona;

        p1bottom = 250;
        p1left = 0;

        p2bottom = 250;
        p2left = 1100;
    }
    if(p1points==2 || p2points==2){
        endgame();
    }
}

function p1ImgFunction() {
    if (corona) {
        if (p1img.src == p1imgArray[0].src) {
            p1img.src = p1imgArray[1].src;
        }
        else {
            p1img.src = p1imgArray[0].src;
        }
    }
    else {
        if (p1img.src == p1imgArray[2].src) {
            p1img.src = p1imgArray[3].src;
        }
        else {
            p1img.src = p1imgArray[2].src;
        }
    }
}

function p2ImgFunction() {
    if (!corona) {

        if (p2img.src == p2imgArray[0].src) {
            p2img.src = p2imgArray[1].src;
        }
        else {
            p2img.src = p2imgArray[0].src;
        }
    }
    else{
        if (p2img.src == p2imgArray[2].src) {
            p2img.src = p2imgArray[3].src;
        }
        else {
            p2img.src = p2imgArray[2].src;
        }
    }
}

function endgame(){
    
    location.reload();
}

///Byter corona true false var 10de sekund