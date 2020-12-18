/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const suits = ["\u2666", "\u2665", "\u2660", "\u2663"];
const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let myButton = document.querySelector("#myBtn");
const divSuitA = document.querySelector("#deckSuitA");
const divSuitB = document.querySelector("#deckSuitB");

myButton.addEventListener("click", function() {
  randomCard();
});

let randomIndex = array => {
  let radomNumber = Math.floor(Math.random() * array.length);
  return array[radomNumber];
};

function randomCard() {
  let suitRandomIndex = randomIndex(suits);
  cardColor(suitRandomIndex);
  let divNumber = document.querySelector("#cardNumber");
  divSuitA.innerHTML = suitRandomIndex;
  divSuitB.innerHTML = suitRandomIndex;
  divNumber.innerHTML = randomIndex(number);
}

function cardColor(suit) {
  if (suit == "\u2666" || suit == "\u2665") {
    let redColorTop = divSuitA;
    let redColorBottom = divSuitB;
    redColorTop.className = "suitTop text-danger";
    redColorBottom.className = "suitBottom text-danger";
  } else {
    let blackColorTop = divSuitA;
    let blackColorBottom = divSuitB;
    blackColorTop.className = "suitTop text-dark";
    blackColorBottom.className = "suitBottom text-dark";
  }
}
