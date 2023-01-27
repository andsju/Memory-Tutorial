**Memory tutorial**

# Step 5

Om man klickar snabbt på olika kort så kommer logiken förmodligen inte hänga med. I funktionen `turnCards()` används `setInterval()`.
I kombination med DOM manipulering (ex lägga till klasser) kan buggar uppstå.

Ett sätt att förhindra buggar är att använda en variabel som anger om ett klick ska *godkännas* först.

Skapa en variabel `isReady` (under variabler) som förvalt får värdet `false`.

```js

// godkänn klick på kort 
let isReady = false;

```

När spelet startas anges värdet för `isReady` till `true` efter det att alla kort finns i elementet stage.

```js
// klick på startknappen
start.addEventListener("click", function() {

    // ...
    // visa kortet på sidan i stage elementet
    // ...

    isReady = true;
});

```

När funktionen `turnCards` anropas ändras först värdet till `false`, och därefter till `true` som sista instuktion i kodblocket

```js
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
```

   
Återstår att kontrollera om ett klick ska godännas eller inte. Den kontrollen görs som dörsta instruktion i händelselyssnaren för elementet stage.
Om variabeln `isReady` är `false` avbryts koden med nyckelordet `return`. Det innebär att koden efter instruktionen inte körs.

```js
// klick i elementet stage
stage.addEventListener("click", function(event) {

    if (!isReady) {
        return;
    }

    // ...

```


För att slumpnässigt visa korten ska korten i array cards slumpas varje gång spelet startas.

Lägg till funktionen `shuffle` (under funktioner)

```js

// slumpa array
// https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
```

Anropa funktionen när start knappen har klickats

```js
// klick på startknappen
start.addEventListener("click", function() {

    // slumpa kort
    shuffleArray(cards);

    countSeconds();

```