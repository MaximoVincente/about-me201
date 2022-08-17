'use strict'; //strict syntax

let nam = prompt('What is your name?');
alert ('Hello ' + nam + ', really nice to meet you! We will start with some yes or no questions about myself :)');
// console.log(nam);
document.write('Hey ' + nam + '! Thank you for answering the questions, and if you had some incorrect, No Worries! You will get to know more about myself in this page. Enjoy!');

//Ask user if I am choosing Javascript for Code 401
let path = prompt(' Am I doing Javascript for Code 401?');
if (typeof (path) === 'string') {
  path = path.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//If "yes" is incorrect, if "no", it is correct
if (path === 'no') {
//   console.log('Correct!');
  alert ('Correct!');
} else if (path === 'yes') {
//   console.log('Incorrect');
}

//Ask if user if Google is my favorite tech company
let tech = prompt('Is Google my favorite Tech Company?');
if (typeof (tech) === 'string') {
  tech = tech.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
// If yes, "Correct"
if (tech === 'no') {
//   console.log('Incorrect');
} else if (tech === 'yes') {
  alert('Correct!');
//   console.log('Correct');
}

//Ask user if becoming a Software developer for Google is my dream job
let career = prompt('Is becoming a Dev for Google my dream job?');
if (typeof (career) === 'string') {
  career = career.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//In case of yes, Correct
switch (career) {
case 'yes':
  alert('Correct!');
  //   console.log('Correct');
  break;
case 'no':
  break;
}

//Ask if I ever been to Yosemite Nattional Park
let outdoors = prompt('Have I ever visited Yosemite National Park?');
if (typeof (outdoors) === 'string') {
  outdoors = outdoors.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//In case of no, Correct
switch (outdoors) {
case 'yes':
  break;
case 'no':
  alert('Correct!');
  //   console.log('Correct');
  break;
}

//Ask if Cheeseburger is my favorite food
let food = prompt('Do I consider Cheeseburger my favorite food?');
if (typeof (food) === 'string') {
  food = food.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//in the case of no, Correct
switch (food) {
case 'yes':
  break;
case 'no':
  alert('Correct!');
  //   console.log('Correct');
  break;
}
