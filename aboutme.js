'use strict'; //strict syntax

console.log('web is running');

let nam = prompt('What is your name?');
let user = prompt('Is this your first time visiting this page?');

if (typeof (user) === 'string') {
  user = user.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}

//If its not the first time alert Welcome back! or If first time, alert: Yay! nice to meet you
if (user === 'no') {
  alert('Welcome Back!');
  console.log(user);
} else if (user === 'yes') {
  alert ('Yay! nice to meet you ' + nam);
  console.log(nam);
}

//Ask if user likes technology
let tech = prompt('Do you enjoy technology?');
if (typeof (tech) === 'string') {
  tech = tech.toLowerCase(); // reassigns user variable to a lowercase string (if it is already a string).
}
// If yes, alert: Me too! else if no, alert: not for long!
if (user === 'no') {
  alert('Not for long!');
  console.log(user);
} else if (user === 'yes') {
  alert('Me too!' + nam);
  console.log(nam);
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
  break;
case 'no':
  alert('I think you should consider it :)');
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
  break;
case 'no':
  alert('Aw :(');
  break;
}
