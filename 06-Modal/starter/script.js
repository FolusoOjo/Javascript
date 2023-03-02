'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModal = document.querySelectorAll('.show-modal');

const btnOpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const btnCloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  console.log(showModal[i].addEventListener('click', btnOpenModal));

closeModal.addEventListener('click', btnCloseModal);
overlay.addEventListener('click', btnCloseModal);

//document.addEventListener('keydown', btnCloseModal);
document.addEventListener('keydown', function (e) {
  //console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    btnCloseModal();
  }
});
