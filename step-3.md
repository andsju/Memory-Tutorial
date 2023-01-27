**Memory tutorial**

# Step 3

När två kort överensstämmer ska nya kort kunna jämföras. Tiildela en klass som anger att korten har hittats. Den klassen används senare för att se om samtliga kort har hittats. 
Radera tillfälliga kort i `tmpCards` genom att ange en tom array. 

```js

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

    } else {

        // ...logik för att vända kort
        console.log("Vänd tillbaka korten:", tmpCards);

    }
}

```

Skapa en funktion (under funktioner) som kan vända tillbaka kort. Korten vänds efter en kort stund genom att använda
den inbyggda funktionen setTimeout. Tiden som anger när kodblocket körs är antal ms, för 1 sekunds fördröjning anges 1000

```js

// funktion för att vända tillbaka kort
function turnCards(arrayOfCards) {

    // vänta 2 sekunder, vänd sedan korten
    let timeOutId = setTimeout(function() {

        // ange förvald bakgrund
        arrayOfCards[0].style.backgroundImage = "url("+backgroundImage+")";
        arrayOfCards[1].style.backgroundImage = "url("+backgroundImage+")";

        // radera tillfälliga kort 
        tmpCards = [];

        clearTimeout(timeOutId);
    }, 1000);
}
```

Kalla på funktionen `turnCards()` i händelselyssnaren i funktionen `compareCards()`

```js

        // ...logik för att vända kort
        console.log("Vänd tillbaka korten:", tmpCards);
        turnCards(arrayOfCards);

```