# AVATAR HOLDER
Library to generate automatic avatars

# DEMO


# INSTALL
npm install avatarholder --save

# CODE
Gererate image and get base64
let response = avatarholder.generateAvatar(
    'Pedro Miguel Carmo',
    {
        size: 600
    }
)

Generate image and save to file
let responseToFile = avatarholder.generateAvatarToFile(
    'Pedro Miguel Carmo',
    './test.gif',
    {
        size: 600
    }
)

