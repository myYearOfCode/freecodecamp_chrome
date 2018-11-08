// select all of the sections
// of the first open certification 
// and convert it from a nodelist to an array
let lessonsArray = [...document.getElementsByClassName("superblock open")[0].getElementsByTagName('ul')]

// delete each lesson
lessonsArray.map(item => {item.innerHTML=""})

// toggle the arrow on the open certificate
document.getElementsByClassName("superblock open")[0].className="superblock"

//this will require two clicks on the top arrow in order to reset it's state and then reveal it again. 
//I don't think I can modify the react state from a chrome plugin, or else I will do that.
