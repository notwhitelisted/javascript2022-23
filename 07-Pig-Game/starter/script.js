'use strict';

//Selecting elements - variables
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const dicePNG = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

//Initial Conditions
score0.textContent = 0;
score1.textContent = 0;
dicePNG.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Functions
const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; //if = 1, switch, if 0, continue.
    //? - true = 1
    //: - false = 0
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

const init = function() {
    score0.textContent = 0;
    score1.textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    dicePNG.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

}
init();

//Rolling Dice Functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        //1. Generate random dice roll
        const dice = Math.floor(Math.random() * 6) + 1;
        //2. Display dice
        dicePNG.classList.remove('hidden');
        dicePNG.src = `dice-${dice}.png`;
        //3. Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            //Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function() {
    if (playing) {
        //1. add current score to active player's score
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //2. check if player's score is >= 100
        //finish the game
        if (scores[activePlayer] >= 50) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            dicePNG.classList.add('hidden');
        } else {
        //3. switch to next player 
            switchPlayer();
        }
    }
})

btnNew.addEventListener('click', init);
