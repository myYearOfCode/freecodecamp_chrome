# freecodecamp_chrome
This is a chrome plugin to make the default fcc interface a little cleaner at first load.

The [FreeCodeCamp.com](https://learn.freecodecamp.com) default login screen has the first section of the first certificate opened up. That is a great feature when you are working on that section but for the rest of your time on fcc you have to either scroll past that or close it in order to see your current lessons above the fold.

This plugin currently closes the first section, ~and in the future it will try to mark your completed sections and certificates in addition to opening up the farthest section you have gotten to.~ (the completion data is not available without the user spinning down the sections. Unless I can manipulate the react state with this extension I think it will just be limited to hiding the first section)

This is the default behavior

<img src="https://github.com/myYearOfCode/freecodecamp_chrome/blob/master/img/before.png" width="500">
This is the v0.1 behavior of the extension
<img src="https://github.com/myYearOfCode/freecodecamp_chrome/blob/master/img/after.png" width="500">
