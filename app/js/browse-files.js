const path = require('path');
const os = require('os');

const image = document.querySelector('#image');
const imageName = document.querySelector('#image-name');

image.addEventListener('change', (e) => {
    imageName.innerText = image.files[0].name;
    console.log('updateImagePath', image.files[0]);
});

document.getElementById('alert').innerHTML = path.join(
    os.homedir(),
    'imageshrink'
  )