**Memory tutorial**

I guiden finns ibland följande angivet `// ...`, som indikerar på att viss kod förklarats tidigare. 

# Step 1

Se till att du har en tom projektmapp där du kan koda ett memory.

I projektmappen skapar du en ny mapp med namnet `images`.

I mappen `images` lägger du därefter in bilder som ditt memory ska visa, ex:

- memory-background.jpg
- image-1.jpg
- image-2.jpg
- image-3.jpg


Skapa föjande filer i projektmappen:
- memory.html
- memory.css
- memory.js
  

Ange följande innehåll i de olika filerna:

---

`memory.html`

```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory</title>
    <link rel="stylesheet" href="memory.css">
</head>
<body>

    <h1>Memory</h1>
    <button>Starta</button>
    <div id="timer"></div>
    <div id="stage"></div>

    <script src="memory.js"></script>

</body>
</html>
```

---

`memory.css`

```css
body {
    background-color: darkslategray;
    color: whitesmoke;
}

div#timer {
    margin: 1rem
}

div#stage {
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: fit-content;
}

div.card {
    margin: 1rem;
    display: inline-block;
    width: 4rem;
    height: 4rem;    
    background-image: url("images/card-background.jpg");
    background-size: cover;
}

```

---

`memory.js`

```js
/* HTML element
------------------- */
const start = document.querySelector("button");
const timer = document.querySelector("#timer");
const stage = document.querySelector("#stage");


/* variabler
------------------- */

// memory kort
let cards = ["firefox.png", "firefox.png", "ie.png", "ie.png", "netscape.png", "netscape.png","safari.png", "safari.png"];

// spara kort som ska jämföras
let tmpCards = [];


/* händelselyssnare
------------------- */

// klick på startknappen
start.addEventListener("click", function() {

    // se till att elementet stage är tomt
    stage.innerHTML = "";

    // loopa alla kort som finns i cards
    cards.forEach(card => {

        // skapa nytt div element
        let div = document.createElement("div");

        // lägg till kortets identitet med ett data attribut
        div.setAttribute("data-card", card);

        // lägg till klassen card 
        div.classList = "card";

        // visa kortet på sidan i stage elementet
        stage.appendChild(div);
    });
});


/* funktioner
------------------- */

```

När du klickar på knappen Starta visas memory korten 