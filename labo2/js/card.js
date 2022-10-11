import Bingo from "./bingo.js";

export default class Card {
  constructor(title) {
    // the constructor is called when you create a new instance of the class
    this.title = title;
    console.log(`Created a new card with title: ${title}`);
  }

  markDone(target) {
    // to mark a card as done, we add a class .bingo__card--done to it
    // 🔥🔥🔥 TODO 5: mark or unmark (toggle) a bingo card when clicked
    console.log("Marking card as done");
    console.log(target);
    // hint: use class .bingo__card--done
      //Probleem was dat ik enkel op de tekst kon klikken, en niet op het gehele vak.
      //Nu is de tekst onderdeel van het vak

    if (target.parentElement.classList.contains("bingo__card--done")) {

      target.parentElement.classList.remove("bingo__card--done");

    }
    else {
      target.parentElement.classList.add("bingo__card--done");

    }

  }

  render(counter) {
    // rendering the card to the screen is done by building up a string of HTML
    // after that, we append the HTML to the DOM - check the index.html file to see what structure to use
    console.log("Rendering card...");

    // 🔥🔥🔥 TODO3: build the HTML element and append it to the DOM
    let card = document.createElement("div");

    //We maken eerst een div aan 
    //Die geven we dan een class mee
    //Daarna geven we de div een id mee
    //Dit gebeurt aan de hand van de counter, die we meegeven in de functie render()
    card.dataset.number = counter + 1;
    card.classList.add("bingo__card");
    
    //Daarna zetten we dit allemaal in een div, die in de andere div bingo__board gaat staan
 
    card.innerHTML = `<div class="bingo__card--title">${this.title}</div>`;



    document.querySelector(".bingo__board").appendChild(card);

    // don't forget to append thes child to to DOM

    // 🔥🔥🔥 TODO4: when we click an item, we want to check for winners and we want to save the selection to storage
    card.addEventListener("click", (e) => {
      this.markDone(e.target);
      Bingo.checkWinner();
      Bingo.save();
  
      // this.markDone(e.target);
      // call checkWinner() on the Bingo class
      // try to call the save() method on the Bingo class
    });
  }
}
