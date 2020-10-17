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
function randomCard() {
  let suit = Math.floor(Math.random() * suits.length);
  let n = Math.floor(Math.random() * number.length);

  cardColor(suit);

  let divSuitA = document.querySelector("#deckSuitA");
  let divSuitB = document.querySelector("#deckSuitB");
  let divNumber = document.querySelector("#cardNumber");

  divSuitA.innerHTML = suits[suit];
  divSuitB.innerHTML = suits[suit];
  divNumber.innerHTML = number[n];
}

function cardColor(suit) {
  if (suit == 0 || suit == 1) {
    let redColorTop = document.querySelector("#deckSuitA");
    let redColorBottom = document.querySelector("#deckSuitB");
    redColorTop.className = "paloa text-danger";
    redColorBottom.className = "palob text-danger";
  } else {
    let blackColorTop = document.querySelector("#deckSuitA");
    let blackColorBottom = document.querySelector("#deckSuitB");
    blackColorTop.className = "paloa text-dark";
    blackColorBottom.className = "palob text-dark";
  }
}
