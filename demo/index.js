let avatarholder = require('../index');

console.log('Ola mundo');

let response = avatarholder.generateAvatar({
    width: 100,
    height: 100,
    bgColor: '#eee',
})

console.log(response);

// var imageDiv = document.querySelector('.image');

// imageDiv.src = response;