// select the first certification 
// select all of the sub sections
// and convert it from a nodelist to an array
let lessonsArray = [...document.getElementsByClassName("superblock open")[0].getElementsByTagName('ul')]

// delete the inner html for each lesson so it is no longer visible
lessonsArray.map(item => {item.innerHTML=""})

// toggle the arrow on the open certificate to make it look like it is closed
document.getElementsByClassName("superblock open")[0].className="superblock"

// this will require two clicks on the top arrow in order to reset it's state and then reveal it again. 
// I don't think I can modify the react state from a chrome plugin, or else I will do that.
