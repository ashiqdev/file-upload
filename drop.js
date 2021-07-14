// $(document).ready(function () {
//   initFileUploader('#zdrop');
//   function initFileUploader(target) {
//     var previewNode = document.querySelector('#zdrop-template');
//     previewNode.id = '';
//     var previewTemplate = previewNode.parentNode.innerHTML;
//     previewNode.parentNode.removeChild(previewNode);

//     var zdrop = new Dropzone(target, {
//       url: 'http:localost:3000/api',
//       maxFiles: 10,
//       maxFilesize: 30,
//       previewTemplate: previewTemplate,
//       previewsContainer: '#previews',
//       clickable: '#upload-label',
//     });

//     zdrop.on('addedfile', function (file) {
//       $('.preview-container').css('visibility', 'visible');
//       // $('.filuploader-container').css('height', '30vh');

//       var windowSize = $(window).width();
//       console.log({ windowSize });

//       if (windowSize <= 414) {
//         $('.filuploader-container').css('marginTop', '-140px');
//       } else if (windowSize <= 1250) {
//         $('.filuploader-container').css('marginTop', '-140px');
//       } else {
//         $('.filuploader-container').css('marginTop', '-190px');
//       }

//       $('.filuploader-container').animate({ height: '300px' }, 500);
//       $('.fileuploader').css('marginTop', '22rem');
//       $('.statistics-wrapper').css('paddingTop', '100px');
//       $('.upload-icon').css('height', '50px');
//       $('.tittle').hide();
//       $('.upload-icon').css('top', '5%');
//     });

//     // window resize
//     // $(window).on('resize', function () {
//     //   var windowSize = $(window).width();

//     //   const isCardAvaile = $('.preview-container').is(':visible');

//     //   console.log({ isCardAvaile });

//     //   if (windowSize <= 414) {
//     //     $('.filuploader-container').css('marginTop', '-140px');
//     //   } else if (windowSize <= 1250) {
//     //     console.log('ki');
//     //     $('.filuploader-container').css('marginTop', '-140px');
//     //   } else {
//     //     console.log('boro boro');
//     //     $('.filuploader-container').css('marginTop', '-190px');
//     //   }
//     // });

//     zdrop.on('totaluploadprogress', function (progress) {
//       var progr = document.querySelector('.progress .determinate');
//       if (progr === undefined || progr === null) return;

//       progr.style.width = progress + '%';
//     });

//     zdrop.on('dragenter', function () {
//       $('.fileuploader').addClass('active');
//     });

//     zdrop.on('dragleave', function () {
//       $('.fileuploader').removeClass('active');
//     });

//     zdrop.on('drop', function () {
//       $('.fileuploader').removeClass('active');
//     });
//   }
// });

const btn = document.querySelector('.upload-icon');

var isClicked = false;
var fileName = false;

btn.addEventListener('click', () => {
  console.log('hello');
  $('.preview-container').css('display', 'block');
  // $('.filuploader-container').css('height', '2vh');
  fileName = true;
  

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

  const scriptt = $('initJs');
  console.log({ scriptt });

  if (!isClicked) {
    $('.count').each(function () {
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
  }
});


if (!fileName) {
  $('.count').counterUp();
}

// $(document).ready(function ()

// $(document).ready(function() {
//   if(!isClicked) {
//     $('.count').counterUp();
//   }
// })

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
