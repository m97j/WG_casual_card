const board = document.querySelector('.game-board');
const cards = ['A','A','B','B','C','C','D','D'].sort(() => 0.5 - Math.random());

let firstCard = null;
let secondCard = null;
let lockBoard = false;

cards.forEach((letter, index) => {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.letter = letter;
  card.innerText = '';
  board.appendChild(card);

  card.addEventListener('click', () => {
    if (lockBoard || card.innerText !== '') return;

    card.innerText = letter;

    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
      lockBoard = true;

      if (firstCard.dataset.letter === secondCard.dataset.letter) {
        resetTurn();
      } else {
        setTimeout(() => {
          firstCard.innerText = '';
          secondCard.innerText = '';
          resetTurn();
        }, 1000);
      }
    }
  });
});

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}
