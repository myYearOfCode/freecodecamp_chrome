// select all of the lessons
// of the first section 
// of the first open certification 
// and convert it from a nodelist to an array
// let itemsArray = [...document.getElementsByClassName("superblock open")[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')]

// // delete each lesson
// itemsArray.map(item => {item.innerHTML=""})

// // toggle the arrow on the open section
// document.getElementsByClassName("block open")[0].className="block"

// select all of the sections
// of the first open certification 
// and convert it from a nodelist to an array
let lessonsArray = [...document.getElementsByClassName("superblock open")[0].getElementsByTagName('ul')]

// delete each lesson
lessonsArray.map(item => {item.innerHTML=""})

// toggle the arrow on the open certificate
document.getElementsByClassName("superblock open")[0].className="superblock"