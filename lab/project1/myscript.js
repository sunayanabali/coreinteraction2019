//check if document is ready
$(document).ready(function(){

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let closeicon = document.querySelector(".close");

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

var matches = 0;
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  if(isMatch) {
    disableCards();

  matches = matches + 1;

    checkForWin();
  } else {
    unflipCards();
  }
}

function checkForWin() {
  if(matches == 6) {
    congratulations()
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 15);
   card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));
});
let modal = document.querySelector("#popup1");
console.log(modal);
function congratulations(){
  modal.classList.add("show");
  closeModal();
}

function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        startGame();
    })
}

//how to link all cards true to a button appearing for 'level two' or next 'card set' or to activate it at the end.