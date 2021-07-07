$(document).ready(function () {
  initFileUploader('#zdrop');
  function initFileUploader(target) {
    var previewNode = document.querySelector('#zdrop-template');
    previewNode.id = '';
    var previewTemplate = previewNode.parentNode.innerHTML;
    previewNode.parentNode.removeChild(previewNode);

    var zdrop = new Dropzone(target, {
      url: 'abcd.js',
      maxFiles: 10,
      maxFilesize: 30,
      previewTemplate: previewTemplate,
      previewsContainer: '#previews',
      clickable: '#upload-label',
    });

    zdrop.on('addedfile', function (file) {
      $('.preview-container').css('visibility', 'visible');
      const test = document.querySelector('.fileuploader');
      console.log({ test });
      test.style.marginTop = '-30px';
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
