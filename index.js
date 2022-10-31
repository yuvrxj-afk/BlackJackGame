let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
  Name: "Per",
  Chips: 145,
  sayHello: function () {
    console.log("HelLo");
  }
};
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + ": $" + player.Chips;

player.sayHello();

function randomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) return 11;
  if (random > 10) return 10;
  else return random;
}

function startGame() {
  let firstCard = randomCard();
  let secondCard = randomCard();
  isAlive = true;
  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw new card? ";
  } else if (sum === 21) {
    message = "YAY ! You've got BlackJack ! ";
    hasBlackJack = true;
  } else {
    message = "You're out of the game ! ";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
