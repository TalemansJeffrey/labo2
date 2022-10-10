import Card from "./card.js";

// 🔥🔥🔥 TODO 1 - make sure to export the class, if you want to be able to import the class elsewhere
export default
class Bingo {
  constructor() {
    // the constructor is called when you create a new instance of the class
    console.log("Welcome to Bingo! 🎉");

    // an array including 25 cards (5x5)
    this.cards = [
      "Already made a website",
      "Already worked before they started studying",
      "Already designed a logo",
      "Doesn't live with their parents",
      "Doesn't have a Discord account",
      "Has to commute more than 1 hour to school",
      "Is a vegetarian",
      "Can play the guitar",
      "Has already visited the US of A",
      "Is older than 25",
      "Owns a goldfish",
      "Is afraid of snakes",
      "Speaks 3 different languages",
      "Has never been to a festival before",
      "Knows what CSS is",
      "Is a Marvel Comics fan",
      "Knows all the ingredients for a mojito",
      "Has a student job",
      "Plays a team sport",
      "Knows how to play chess",
      "Is a DJ",
      "Likes cilantro",
      "Is afraid of heights",
      "Loves heavy metal music",
      "Is famous on Instagram"
    ];

    // we start by rendering the cards to the screen
    this.renderCards();

    // then we load the saved bingo cards from localstorage to mark them as done
    Bingo.load();
  }

  renderCards() {
    // this function renders the cards to the screen
    console.log("rendering cards");

    // 🔥🔥🔥 TODO 2
    // loop through all the cards in the array and create a new instance of a Card()
    // for()
    for (let i = 0; i < this.cards.length; i++) {
      //Hier maak ik een nieuw object aan van de class Card.
      //Ik geef de class Card een parameter mee, namelijk de kaart die ik wil renderen.
      //Die kaart is de kaart uit de array en die wil ik renderen met de functie renderCards()
      let card = new Card(this.cards[i]);
      card.render(i);
    }
   
  }

  static checkWinner() {
    // a static function can be called without creating an instance of the class
    console.log("Checking for a winner");

    // 🔥🔥🔥 TODO 6
    // count all cards that are marked as done (select done items and count them with .length)
    /// let cardsDone = ;
    // if (cardsDone.length === 5) {
    // show the animated gif to the winner
    // document.querySelector(".bingo__overlay").style.display = "block";

    //Hier kijkt je of er 5 kaarten zijn aangeklikt. Als dat zo is, dan wordt de gif getoond. PS zou je hier ook een alert kunnen gebruiken?

    let cardsDone = document.querySelectorAll(".bingo__card--done");

    //Er worden === gebruikt in plaats van == omdat je dan ook de type moet overeenkomen.
    
    if (cardsDone.length === 5) {
      document.querySelector(".bingo__overlay").style.display = "block";
    }


    // }
  }

  static save() {
    // 🔥🔥🔥 TODO 7
    // save the cards that are done to localstorage
    // you can simply save an array with the card numbers like [1, 6, 8]
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    let cardsWon = [];
    console.log("Saving bingo to localstorage");
    // let cards = document.querySelectorAll(".bingo__card--done");

    // if there are not done cards, remove localstorage
    // if (cards.length === 0) {
    // remove localstorage
    // }

    // save a selection like [1, 7, 8] to localstorage item "bingo"
    // you might want to check out how JSON.stringify() works

    //Pus zorgt er voor dat er nieuwe waarden worden toegevoegd aan het einde van de array
    //Elke kaart die wordt aangeklikt, zal op het einde van de array worden toegevoegd.
    //forEach zorgt er voor dat je alle kaarten kan aanklikken en opslaan in de array.
    let cardsSelected= document.querySelectorAll(".bingo__card--done");
    cardsSelected.forEach(card => {cardsWon.push(card.dataset.number);})
    //Stringify is het tegenoversteled van parse. Het zorgt er voor dat je data kan opslaan in een string.
     localStorage.setItem("bingo", JSON.stringify(cardsWon));

     if (cardsWon.length === 0) {
       localStorage.removeItem("bingo");
     }



  }

  static load() {
    // 🔥🔥🔥 TODO 8
    // load the cards that are done from localstorage
    // this works the other way around of the save function
    // load the saved string from localstorage and parse it as an array, then loop over it
    console.log("loading bingo selection from localstorage");

    // check if localstorage item exists
    if (localStorage.getItem("bingo")) {

      // let cardsWon = JSON.parse();
      // JSON.parse() will convert the string [1, 7, 8] back to an array which you can loop
      // loop over the numbers 1, 7, 8 and mark those cards as done by adding the right CSS class
      // .bingo__card--done

      //Parse zorgt er voor dat alles van string, terug omgezet wordt naar JavaScript. Wanneer er data van een server wordt gehaald, is dit altijd een string. 
      //Door parse te gebruiken, wordt het terug code waarmee je kan gaan werken.

      let cardsWon = JSON.parse(localStorage.getItem("bingo"));
      cardsWon.forEach(card => {      
        document.querySelector(`.bingo__card[data-number="${card}"]`).classList.add("bingo__card--done");
      } )
      this.checkWinner();

      
    }
  }
}
