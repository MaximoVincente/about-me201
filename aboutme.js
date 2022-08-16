'use strict'; //strict syntax

// console.log('testing site after adding all files');

let nam = prompt('What is your name?');
// console.log(nam);

let path = prompt('Hello, ' + nam + ' Am I doing Javascript for Code 401?');
if (typeof (path) === 'string') {
  path = user.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//If its not the first time alert Welcome back! or If first time, alert: Yay! nice to meet you
if (path === 'no') {
  alert('I chose the Java Route');
//   console.log('Incorrect');
} else if (path === 'yes') {
  alert ('Correct!');
//   console.log('Correct');
}

//Ask if user likes technology
let tech = prompt('Do you enjoy technology?');
if (typeof (tech) === 'string') {
  tech = tech.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
// If yes, alert: Me too! else if no, alert: not for long!
if (user === 'no') {
  alert('Not for long!');
//   console.log('not agreed');
} else if (user === 'yes') {
  alert('Me too! ' + nam);
//   console.log('agreed');
}

//Ask if user likes technology
let career = prompt('Are you a Software Developer, or interested in that field?');
if (typeof (career) === 'string') {
  career = career.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//in the case of yes, alert: "you're on the right path!", in the case of no, alert:"I think you should consider it :)"
switch (career) {
case 'yes':
  alert('You\'re on the right path!');
  //   console.log('agreed');
  break;
case 'no':
  alert('I think you should consider it :)');
  //   console.log('not agreed');
  break;
}

//Ask if user likes the outdoors
let outdoors = prompt('Do you enjoy the outdoors?');
if (typeof (outdoors) === 'string') {
  outdoors = outdoors.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//in the case of yes, alert: "Nice! I'm excited to hear about your favorite outdoor places", in the case of no, alert:"Aw :("
switch (career) {
case 'yes':
  alert('Nice! I\'m excited to hear about your favorite outdoor places');
  //   console.log('agreed');
  break;
case 'no':
  alert('Aw :(');
  //   console.log('not agreed');
  break;
}

//Ask if user likes pizza
let food = prompt('Do you like pizza?');
if (typeof (food) === 'string') {
  food = food.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
//in the case of yes, alert: "Same! Especially NY style pizza!", in the case of no, alert:"That's ok, I'm sure there's other food we have in common :)"
switch (food) {
case 'yes':
  alert('Same! Especially NY style pizza!');
  //   console.log('agreed');
  break;
case 'no':
  alert('That\'s ok, I\'m sure there\'s other food we have in common : ) ');
  //   console.log('not agreed');
  break;
}
