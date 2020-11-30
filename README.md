# Avatar Holder

Avatar Holder is a library that generate automatic avatars, with name/username initials.

![Image of Avatar Holder](http://images.avatarholder.com/Avatar/100/3fb576) ![Image of Avatar Holder](http://images.avatarholder.com/atar/100/35d389) ![Image of Avatar Holder](http://images.avatarholder.com/ar/100/eee) ![Image of Avatar Holder](http://images.avatarholder.com/holder/100) ![Image of Avatar Holder](http://images.avatarholder.com/ld/100) ![Image of Avatar Holder](http://images.avatarholder.com/er/100)

# New Features!

  - Save image to file
  - Get initials from person full name


You can also:
  - Choose color from background
  - Save image to any extension you want

### Demo

http://www.avatarholder.com

### Installation

Install into your project

```
npm install avatarholder --save
```

Require avatarholder library

```
let avatarholder = require('avatarholder');
```

Or import
```
import * as avatarholder from 'avatarholder';
```

And start to generating your avatars...

```
let image = avatarholder.generateAvatar('Hello World');
```

or save into files...
```
let pathFile = avatarholder.avatarholder.generateAvatarToFile('Hello World', './my-avatar.png');
```

### Options

Avatar Holder can receive options, always on last param.
```
let responseToFile = avatarholder.generateAvatarToFile(
    'Hello World',
    './my-avatar.jpg',
    {
        size: 600,
        bgColor: '#eee'
    }
);
```

Full options available  (optional):

| Options | Default | Description |
| ------ | ------ | ------ |
| size | 100 | Image size in pixels | 
| font | 40 | Font size in pixels |
| bgColor | - | Background color. Random color if not sent |
| color | - | Constrast with background color if not sent |


### Development

Want to contribute? Great!

[Buy pedromcarmo a Coffe](https://buymeacoffee.com/pedromcarmo)
![Image of Buy pedromcarmo a Coffe](https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP25hbWU9cGVkcm9tY2FybW8mc2l6ZT0zMDAmYmctaW1hZ2U9Ym1jJmJhY2tncm91bmQ9NUY3RkZG&creator=pedromcarmo&is_creating=developing%20some%20amazing%20code&design_code=1&design_color=%235F7FFF&slug=pedromcarmo
)
