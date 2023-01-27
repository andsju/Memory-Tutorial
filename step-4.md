**Memory tutorial**

# Step 4

För att "vinna" ska alla memorykort hittas och tiden i antalet sekunder visas.

Ange först 2 nya varialer (under variabler) som lagrar antal sekunder, och kontrollerar ett intervall.

```js

// antal sekunder och intervall id som setInterval returnerar
let seconds = 0;
let intervalId = 0;
```

Skapa en funktion (under funktioner) som räknar och visar sekunder.

```js

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
```

Anropa funktionen när knappen Starta är aktiverad.

```js

// klick på startknappen
start.addEventListener("click", function() {

    countSeconds();

    // ...
```


Skapa en funktion (under funktioner) för att kontrollera om alla kort har hittats.

```js

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
```

Anropa funktionen `checkMemorySolved()` i funktionen `compareCards()` när 2 kort överensstämmer.

```js

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

        // ...
```