// let dropArea = document.getElementById('drop-area');
// let filesDone = 0;
// let filesToDo = 0;
// let progressBar = document.getElementById('progress-bar');

// function preventDefaults(e) {
//   e.preventDefault();
//   e.stopPropagation();
// }

// ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
//   dropArea.addEventListener(eventName, preventDefaults, false);
// });

// // indicator

// function highlight(e) {
//   dropArea.classList.add('.highlight');
// }

// function unhighlight(e) {
//   dropArea.classList.remove('.highlight');
// }

// ['dragenter', 'dragover'].forEach((eventName) => {
//   dropArea.addEventListener(eventName, highlight, false);
// });

// ['dragleave', 'drop'].forEach((eventName) => {
//   dropArea.addEventListener(eventName, unhighlight, false);
// });

// //  things to do after the file is dropped
// function handleDrop(e) {
//   let dt = e.dataTransfer;
//   let files = dt.files;
//   console.log(files);

//   handleFiles(files);
// }

// dropArea.addEventListener('drop', handleDrop, false);

// function handleFiles(files) {
//   files = [...files];
//   initializeProgress(files.length);
//   files.forEach(uploadFile);
//   files.forEach(previewFile);
// }

// // real game
// // function uploadFile(file) {
// //   let url = 'backend url';
// //   let formData = new FormData();

// //   formData.append('file', file);

// //   fetch(url, {
// //     method: 'POST',
// //     body: formData,
// //   })
// //     .then(() => {

// //     })
// //     .catch((error) => console.log(error));
// // }

// // real game
// function uploadFile(file, i) {
//   // <- Add `i` parameter
//   var url = 'https://api.cloudinary.com/v1_1/joezimim007/image/upload';
//   var xhr = new XMLHttpRequest();
//   var formData = new FormData();
//   xhr.open('POST', url, true);

//   // Add following event listener
//   xhr.upload.addEventListener('progress', function (e) {
//     updateProgress(i, (e.loaded * 100.0) / e.total || 100);
//   });

//   xhr.addEventListener('readystatechange', function (e) {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//       // Done. Inform the user
//     } else if (xhr.readyState == 4 && xhr.status != 200) {
//       // Error. Inform the user
//     }
//   });

//   //   cdnary specific
//   formData.append('upload_preset', 'ujpu6gyk');

//   formData.append('file', file);
//   xhr.send(formData);
// }

// function previewFile(file) {
//   let reader = new FileReader();
//   reader.readAsDataURL(file);

//   reader.onloadend = function () {
//     let img = document.createElement('img');
//     img.src = reader.result;
//     document.getElementById('gallery').appendChild(img);
//   };
// }

// // progress bar
// function initializeProgress(numFiles) {
//   //   progressBar.value = 0;
//   //   filesDone = 0;
//   //   filesToDo = numfiles;
//   progressBar.value = 0;
//   uploadProgress = [];

//   for (let i = numFiles; i > 0; i--) {
//     uploadProgress.push(0);
//   }
// }

// function updateProgress(fileNumber, percent) {
//   uploadProgress[fileNumber] = percent;
//   let total =
//     uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length;
//   progressBar.value = total;
// }

// function progressDone() {
//   filesDone++;
//   progressBar.value = (filesDone / filesToDo) * 100;
// }

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
