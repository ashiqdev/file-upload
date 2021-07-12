// // statistics
const first = document.getElementById('number1');
const second = document.getElementById('number2');
const third = document.getElementById('number3');

const countDownStarter = () => {
  const countingFunc = (element, time) => {
    const counter = new countUp.CountUp(element, time);

    if (!counter.error) {
      counter.start();
    } else {
      console.log(counter.error);
    }
  };

  countingFunc(first, 6583);
  countingFunc(second, 69);
  countingFunc(third, 420);
};

ScrollReveal().reveal('.statistics-container', {
  beforeReveal: countDownStarter,
});

// modal

const modal = document.querySelector('.m-modal');
const modal2 = document.querySelector('.m-modal2');

const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  modal2.classList.add('hidden');
};

const closeExpiryModal = () => {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const openExpiryModal = () => {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const passwordButton = document.querySelector('.password-button');

passwordButton.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', () => {
  console.log('clicked');
  closeModal();
});

overlay.addEventListener('click', closeModal);

const passwordGenerator = document.querySelector('.password-generate-button');

const expirtyGenarator = document.querySelector('.expiry-button');

passwordGenerator.addEventListener('click', () => {
  closeModal();

  swal('Great!', 'Your file is now password protected!', 'success');
});

expirtyGenarator.addEventListener('click', () => {
  openExpiryModal();
});

const expiryCloseButton = document.querySelector('.danger-me');

expiryCloseButton.addEventListener('click', () => {
  closeExpiryModal();
});
