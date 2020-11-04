let avatarholder = require('../index');

console.log('Ola mundo');

let response = avatarholder.generateAvatar(
    'PM',
    {
        width: 600,
        height: 600,
        bgColor: '#eeefff',
    }
)

console.log(response);

// var imageDiv = document.querySelector('.image');

// imageDiv.src = response;