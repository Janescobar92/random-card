/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const suits = ["\u25ca", "\u2665", "\u2660", "\u2663"];
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let myButton = document.querySelector("#myBtn");

myButton.addEventListener("click", function() {
  randomCard();
});

randomIndex = (array) => {
 let radomNumber = Math.floor(Math.random() * array.length);
 return array[radomNumber];
}

function randomCard() {
  cardColor(suit);
  let divSuitA = document.querySelector("#deckSuitA");
  let divSuitB = document.querySelector("#deckSuitB");
  let divNumber = document.querySelector("#cardNumber");
  divSuitA.innerHTML = randomIndex(suits);
  divSuitB.innerHTML = randomIndex(suits);
  divNumber.innerHTML = randomIndex(number);
}

function cardColor(suit) {
  if (suit == 0 || suit == 1) {
    let redColorTop = document.querySelector("#deckSuitA");
    let redColorBottom = document.querySelector("#deckSuitB");
    redColorTop.className = "suitTop text-danger";
    redColorBottom.className = "suitBottom text-danger";
  } else {
    let blackColorTop = document.querySelector("#deckSuitA");
    let blackColorBottom = document.querySelector("#deckSuitB");
    blackColorTop.className = "suitTop text-dark";
    blackColorBottom.className = "suitBottom text-dark";
  }
}
