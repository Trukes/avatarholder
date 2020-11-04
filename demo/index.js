let avatarholder = require('../index');

console.log('Creating image');

let response = avatarholder.generateAvatar(
    'Pedro Miguel Carmo',
    {
        size: 600,
        bgColor: '#eee'
    }
)

let responseToFile = avatarholder.generateAvatarToFile(
    'Pedro Miguel Carmo',
    './test.gif',
    {
        size: 600,
        bgColor: '#eee'
    }
)

console.log(response);
console.log(responseToFile);