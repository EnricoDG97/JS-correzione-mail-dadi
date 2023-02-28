
/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*

- preparare una lista di email di registrazione
- preparare una variabile sentinella inizializzata in "falso"
- Prendere la mail da un campo di testo alla pressione del pulsante
- per ogni elemento nella lista di email
  ? SE la mail inserita è uguale alla mail a cui siamo arrivati
    - ALLORA modifica la variabile sentinella in "vero"
? SE la variabile sentinella è "vero"
  - ALLORA scrivi in pagina "trovata"
: altrimenti
  - scrivi in pagina "non trovata"
*/

// - Prendere la mail da un campo di testo alla pressione del pulsante
let userEmailElement = document.getElementById('userEmail');
let userEmailButtonElement = document.getElementById('userEmailButton');

// prendo l'elemento di output
let loginOutputElement = document.getElementById("loginOutput");

// - preparare una lista di email di registrazione
const acceptedEmails = ['gabriel@email.com', 'edoardo@email.com', 'alice@email.com', 'danilo@email.com'];


// aggiungo l'event listener del click al pulsante
userEmailButtonElement.addEventListener("click", function() {
  // - preparare una variabile sentinella inizializzata in "falso"
  // "la mail è trovata"
  let isMailFound = false;

  // per ogni elemento nella lista di email
  for (let i = 0; i < acceptedEmails.length; i++) {

    // ? SE la mail inserita è uguale alla mail a cui siamo arrivati
    if(userEmailElement.value == acceptedEmails[i]) {

      // ALLORA modifica la variabile sentinella in "vero"
      isMailFound = true;

    }
     
  }

  //  SE la variabile sentinella è "vero"
  if(isMailFound) {

    loginOutputElement.innerText = "Benvenuto."
    loginOutputElement.style.color = "green";

  } else {

    loginOutputElement.innerText = "Non hai i permessi."
    loginOutputElement.style.color = "red";
    
  }

});



// __________________________________________________________________________________
/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
mostra le immagini dei dadi in pagina rispettive al numero tirato
*/

/*

- mi preparo un array di immagini di dadi
- genero un numero random da 1 a 6 per l'utente
- genero un numero random da 1 a 6 per il computer
? SE il numero dell'utente è maggiore del numero del computer
  ° stampo "hai vinto"
: ALTRIMENTI 
  ° stampo "hai perso"
- mostro l'immagine del dado 1 corrispondente all'indice scelto -1
- mostro l'immagine del dado 2 corrispondente all'indice scelto -1



*/

// - mi preparo un array di immagini di dadi
let diceFaceImgs = ["img/dice1.png", "img/dice2.png", "img/dice3.png","img/dice4.png", "img/dice5.png", "img/dice6.png"];
const diceImg1Element = document.getElementById("diceImg1");
const diceImg2Element = document.getElementById("diceImg2");
const diceOutputElement = document.getElementById("diceOutput");

const throwDiceElement = document.getElementById("throwDice");

throwDiceElement.addEventListener("click",  function() {
  const diceContainerElement = document.getElementById("diceContainer");
  diceContainerElement.style.display = "block";

  // - genero un numero random da 1 a 6 per l'utente
  const randomUserNumber = Math.floor(Math.random() * 6 + 1);
  // - genero un numero random da 1 a 6 per il computer
  const randomComputerNumber = Math.floor(Math.random() * 6 + 1);

  // ? SE il numero dell'utente è maggiore del numero del computer

  if(randomUserNumber > randomComputerNumber) {
    
    diceOutputElement.innerText = `Utente: ${randomUserNumber}, computer: ${randomComputerNumber}, hai vinto.`;


  } else if(randomUserNumber < randomComputerNumber) {

    diceOutputElement.innerText = `Utente: ${randomUserNumber}, computer: ${randomComputerNumber}, hai perso.`;


  } else {
    diceOutputElement.innerText = `Utente: ${randomUserNumber}, computer: ${randomComputerNumber}, PAREGGIO.`;

  }


  // - mostro l'immagine del dado 1 corrispondente all'indice scelto -1
  diceImg1Element.src = diceFaceImgs[randomUserNumber-1];

  // - mostro l'immagine del dado 2 corrispondente all'indice scelto -1
  diceImg2Element.src = diceFaceImgs[randomComputerNumber - 1];

});
