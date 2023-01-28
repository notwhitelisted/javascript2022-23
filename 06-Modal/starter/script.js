'use strict';

//variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//functions - always go before the DOM. initialization errors if order is not right.
const openModal = function() {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//DOM
for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal);
}

// for (let i = 0; i < btnOpenModal.length; i++) {
//     btnOpenModal[i].addEventListener('click', function() {
//         modal.classList.add('hidden');
//     })
// }

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//listens for event everywhere. 
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        console.log('Esc was pressed');
        closeModal();
    }

})

// btnCloseModal.addEventListener('click', function() {
//     closeModal();
// })

// overlay.addEventListener('click', function() {
//     closeModal();
// })
