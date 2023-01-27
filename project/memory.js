/* HTML element
------------------- */
const start = document.querySelector("button");
const timer = document.querySelector("#timer");
const stage = document.querySelector("#stage");


/* variabler
------------------- */

// memory kort
let cards = ["firefox.png", "firefox.png", "ie.png", "ie.png", "netscape.png", "netscape.png","safari.png", "safari.png"];

// bakgrundsbild - för att vända tillbaka kort
let backgroundImage = "images/card-background.png";

// spara kort som ska jämföras
let tmpCards = [];

// antal sekunder och intervall id som setInterval returnerar
let seconds = 0;
let intervalId = 0;

// godkänn klick på kort
let isReady = false;

/* lyssna på event
------------------- */



/* funktioner
------------------- */


// jämför 2 kort
function compareCards(arrayOfCards) {

    // jämför med attributet 'data-card'
    if (arrayOfCards[0].getAttribute("data-card") === arrayOfCards[1].getAttribute("data-card")) {

        console.log("Korten överensstämmer");

        // tilldela en klass som talar om att korten har hittats, ex 'found'
        arrayOfCards[0].classList.add("found");
        arrayOfCards[1].classList.add("found");

        // radera tillfälliga kort 
        tmpCards = [];

        // kontrollera om alla kort hittats
        checkMemorySolved();

    } else {

        console.log("Vänd tillbaka korten:", tmpCards);
        turnCards(arrayOfCards);

    }
}


// funktion för att vända tillbaka kort
function turnCards(arrayOfCards) {
    
    isReady = false;
    // vänta 2 sekunder, vänd sedan korten
    let timeOutId = setTimeout(function() {

        // ange förvald bakgrund
        arrayOfCards[0].style.backgroundImage = "url("+backgroundImage+")";
        arrayOfCards[1].style.backgroundImage = "url("+backgroundImage+")";

        // radera tillfälliga kort 
        tmpCards = [];

        clearTimeout(timeOutId);

        isReady = true;
    }, 1000);
}

// funcktion för att räkna och visa sekunder
function countSeconds() {

    // nollställ
    seconds = 0;
    timer.textContent = seconds;

    // använd setInterval som anropar kodblocket varje sekund (1000 ms) 
    intervalId = setInterval(function() {

        // öka antalet sekunder
        seconds++;

        // visa antalet sekunder
        timer.textContent = seconds;
    }, 1000);
}


// funktion för att kontrollera om alla kort har hittats
function checkMemorySolved() {

    // kort som har klassen 'found' 
    let foundCards = stage.querySelectorAll(".found");

    // använd egenskapen length och jämför med antal kort som finns från början
    if (foundCards.length == cards.length) {

        // avbryt intervallet som ökar antal sekunder
        clearInterval(intervalId);

        // visa resultat
        timer.textContent = `Memorykorten har hittats. Din tid är ${seconds} sekunder`;

        // nollställ variabeln sekunder
        seconds = 0;
    }
}

// validera och slumpa array
// https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
    if (!Array.isArray(array)) {return}
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}