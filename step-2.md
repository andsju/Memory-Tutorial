**Memory tutorial**

# Step 2

I `memory.js` lägger du (under händelselyssnare) till en lyssnare för på klick i elementet stage. Det element som innehåller alla memory kort

```js
// klick i elementet stage
stage.addEventListener("click", function(event) {

    // ett memory kort har klassen 'card'
    if (event.target.className === "card") {

        // använd metoden getAttribute för att ta reda på kortets identitet
        let card = event.target;
        let backgroundImage = card.getAttribute("data-card");

        // 2 kort ska jämföras ... 
        if (tmpCards.length < 2) {

            // visa kortet genom att ange en bakgrundsbild för elementet
            card.style.backgroundImage = "url(images/"+backgroundImage+")";

            // spara tillfälligt kortet i tmpCards om det inte finns i listan 
            if (!tmpCards.includes(card)) {
                tmpCards.push(card);
            }
        }

        // om det finns 2 kort i tmpCards så ska korten jämföras
        if (tmpCards.length === 2) {

            console.log("Jämför korten:", tmpCards);
            
            // ...logik

        }
    }
});

```


Starta spelet och kontrollera att du ser informationen i webbläsarens konsol. `Jämför korten:  [div.card, div.card]`.


I `memory.js` lägger du (under funktioner) till en funktion som ska jämföra 2 kort. Ange metoden console.log() och kontrollera.
Eftersom endast de 2 första korten sparas i nuläget måste spelet startas om för att jämföra andra kort.  

```js

// jämför 2 kort
function compareCards(arrayOfCards) {

    // jämför med attributet 'data-card'
    if (arrayOfCards[0].getAttribute("data-card") === arrayOfCards[1].getAttribute("data-card")) {

        console.log("Korten överensstämmer");

    } else {

        console.log("Vänd tillbaka korten:", tmpCards);

    }
}
```

Kalla på funktionen i händelselyssnaren du kodade innan.

```js
        

        // om det finns 2 kort i tmpCards så ska korten jämföras
        if (tmpCards.length === 2) {

            console.log("Jämför korten:", tmpCards);
            
            // ...logik
            compareCards(tmpCards);

        }
```