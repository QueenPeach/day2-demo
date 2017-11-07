"use strict";

var kids = prompt("how many kids do you have?")
console.log('number of kids', kids);

var hats = prompt("how many hats do you own?")
console.log('number of hats', hats);

if(kids === '4' || kids === '3') {
  alert('nice job - u right');
}

if(hats === 3 && kids === '4') {
  alert('nice job again - u rule');
}

// parseInt- takes string and turns it into a number
// toLowerCase-
// toUpperCase- 
