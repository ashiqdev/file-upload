var isScrolled = false;

$(window).scroll(function () {
  var hT = $('#scroll-to').offset().top,
    hH = $('#scroll-to').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    isScrolled = true;
  }
});

const btn = document.querySelector('.upload-icon');

var isClicked = false;

btn.addEventListener('click', () => {
  console.log('hello');
  $('.preview-container').css('display', 'block');
  $('.statistics-wrapper').css('display', 'none');
  $('.duplicate').css('display', 'block');

  var isVisible =
    document.querySelector('.preview-container').style.display === 'block';
  // $('.filuploader-container').css('height', '2vh');

  var windowSize = $(window).width();
  console.log({ windowSize });

  if (windowSize <= 414) {
    $('.filuploader-container').css('marginTop', '-140px');
  } else if (windowSize <= 1250) {
    $('.filuploader-container').css('marginTop', '-30px');
  } else {
    $('.filuploader-container').css('marginTop', '-140px');
    // $('.statistics-wrapper').css('marginTop', '-160px');
  }

  if (windowSize >= 1500) {
    $('.statistics-wrapper').css('marginTop', '-160px');
  }

  $('.filuploader-container').animate({ height: '300px' }, 1000);
  $('.fileuploader').css('marginTop', '22rem');
  $('.statistics-wrapper').css('paddingTop', '180px');
  $('.upload-icon').css('height', '50px');
  $('.tittle').hide();
  $('.upload-icon').css('top', '5%');

  // if (isVisible) {
  //   console.log('ki');
  //   $('#dangerous').remove();
  // }

  const numberOne = document.querySelector('.number-one');
  const numberTwo = document.querySelector('.number-two');
  const numberThree = document.querySelector('.number-three');

  const originalNumber1Flag = document.querySelector('#number1');

  console.log({ check: originalNumber1Flag.innerText.trim() });

  if (!isClicked) {
    if (!isScrolled) {
      $('.count-me').each(function () {
        var $this = $(this);
        isClicked = true;
        jQuery({ Counter: 0 }).animate(
          { Counter: $this.attr('data-stop') },
          {
            duration: 1600,
            easing: 'swing',
            step: function (now) {
              $this.text(Math.ceil(now));
            },
          }
        );
      });
    } else {
      const originalNumber1 = document.querySelector('#number1');
      const originalNumber2 = document.querySelector('#number2');
      const originalNumber3 = document.querySelector('#number3');

      numberOne.innerText = originalNumber1.innerText.trim();
      numberTwo.innerText = originalNumber2.innerText.trim();
      numberThree.innerText = originalNumber3.innerText.trim();
    }
  }
});

// Pause
const pause = document.querySelector('.pause-button');

pause &&
  pause.addEventListener('click', () => {
    console.log('hm');
    // pause.innerText = 'Resume';
    if (pause.innerText === 'PAUSE') {
      pause.innerHTML = `
    <i class="fas fa-play expired-icon"></i>
    <span>Resume</span>
    `;
    } else {
      pause.innerHTML = `
    <i class="fas fa-pause expired-icon"></i>
    <span>Pause</span>
    `;
    }
  });
