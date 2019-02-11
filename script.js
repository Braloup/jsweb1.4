
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

/*
  Put the JavaScript code you want below.
*/

console.log("Hey look in your browser console. It works!");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();
console.log(year);
console.log(month + 1);
console.log(day);
console.log(date);
