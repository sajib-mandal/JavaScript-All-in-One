'use strict';

// HTML elements
const check = document.querySelector('.check');
const guessNumber = document.querySelector('.guess');
const hideNumber = document.querySelector('.number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');
const again = document.querySelector('.again');

// Code:

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScoreNumber = 0;


check.addEventListener('click', function (e) {
  const guess = Number(guessNumber.value);
  const wrong = () => {
    if (scoreNumber > 1) {
      message.textContent = `${guess > secretNumber ? 'Too high' : 'Too Low'}`;
      scoreNumber--;
      score.textContent = scoreNumber;
    } else {
      message.textContent = 'You lost the game';
      score.textContent = 0;
    }
  };

  if (!guess) {
    message.textContent = '🔴 No number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    hideNumber.textContent = secretNumber;
    body.style.backgroundColor = '#60b347';
    hideNumber.style.width = '30rem';

    if (scoreNumber > highScoreNumber) {
      highScoreNumber = scoreNumber;
      highScore.textContent = highScoreNumber;
    }
  } else if (guess > secretNumber) {
    wrong();
  } else if (guess < secretNumber) {
    wrong();
  }

  guessNumber.value = '';
  
});


again.addEventListener('click', function () {
  body.style.backgroundColor = '#222';
  hideNumber.textContent = '?';
  scoreNumber = 20;
  score.textContent = scoreNumber;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  hideNumber.style.width = '15rem';
});