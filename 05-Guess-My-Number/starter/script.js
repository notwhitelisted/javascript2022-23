'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number'
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 5;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.floor(Math.random() * 20) + 1; 
let score = 20;

let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}
//Event Listener
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    //when there is no input
    if (!guess) {
        displayMessage('No number!');
    
    //when guess is right
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct number!');
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    //when guess is different from secretNumber
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            //document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game.');
            //document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});
//     //when guess is too high
//     else if (guess > secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }

//     //when guess is too low
//     } else if (guess < secretNumber) {
//         if (score > 1) {
//             document.querySelector('.message').textContent = 'Too low!';
//             score--;
//             document.querySelector('.score').textContent = score;
//         } else {
//             document.querySelector('.message').textContent = 'You lost the game!';
//             document.querySelector('.score').textContent = 0;
//         }
//     }
// });

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1; 
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    //document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;
})

//functions
