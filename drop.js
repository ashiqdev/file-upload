$(document).ready(function () {
  initFileUploader('#zdrop');
  function initFileUploader(target) {
    var previewNode = document.querySelector('#zdrop-template');
    previewNode.id = '';
    var previewTemplate = previewNode.parentNode.innerHTML;
    previewNode.parentNode.removeChild(previewNode);

    var zdrop = new Dropzone(target, {
      url: 'http:localost:3000/api',
      maxFiles: 10,
      maxFilesize: 30,
      previewTemplate: previewTemplate,
      previewsContainer: '#previews',
      clickable: '#upload-label',
    });

    zdrop.on('addedfile', function (file) {
      $('.preview-container').css('visibility', 'visible');
      // $('.filuploader-container').css('height', '30vh');

      var windowSize = $(window).width();
      console.log({ windowSize });

      if (windowSize <= 414) {
        $('.filuploader-container').css('marginTop', '-140px');
      } else {
        $('.filuploader-container').css('marginTop', '-190px');
      }

      $('.filuploader-container').animate({ height: '300px' }, 1000);
      $('.fileuploader').css('marginTop', '22rem');
      $('.statistics-wrapper').css('paddingTop', '100px');
      $('.upload-icon').css('height', '50px');
      $('.tittle').hide();
      $('.upload-icon').css('top', '5%');
    });

    zdrop.on('totaluploadprogress', function (progress) {
      var progr = document.querySelector('.progress .determinate');
      if (progr === undefined || progr === null) return;

      progr.style.width = progress + '%';
    });

    zdrop.on('dragenter', function () {
      $('.fileuploader').addClass('active');
    });

    zdrop.on('dragleave', function () {
      $('.fileuploader').removeClass('active');
    });

    zdrop.on('drop', function () {
      $('.fileuploader').removeClass('active');
    });
  }
});
