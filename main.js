// stats

$('.count').counterUp();

// animation

$(document).ready(function () {
  $('.wrap-lookup').waypoint(
    function (direction) {
      $('.wrap-lookup').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '600px',
    }
  );

  $('.app-info-container').waypoint(
    function (direction) {
      $('.app-info-container').addClass('animate__animated animate__fadeIn');
    },
    {
      offset: '600px',
    }
  );
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
  // $('.datepicker').datepicker();
};

const passwordButton = document.querySelector('.password-button');

passwordButton && passwordButton.addEventListener('click', openModal);

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

expirtyGenarator &&
  expirtyGenarator.addEventListener('click', () => {
    openExpiryModal();
  });

const expiryCloseButton = document.querySelector('.danger-me');

expiryCloseButton.addEventListener('click', () => {
  closeExpiryModal();
});
