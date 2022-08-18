'use strict'; //strict syntax

let score = 0;

let nam = prompt('What is your name?');
alert ('Hello ' + nam + ', really nice to meet you! We will start with some yes or no questions about myself :)');
document.write('Hey ' + nam + '! Thank you for answering the questions, and if you had some incorrect, No Worries! You will get to know more about myself in this page. Enjoy!');

let questions = ['Am I doing Javascript for Code 401?', 'Is Google my favorite Tech Company?',
  'Is becoming a Dev for Google my dream job?', 'Have I ever visited Yosemite National Park?',
  'Do I consider Cheeseburger my favorite food?'];
let answers = ['no','yes', 'yes', 'no', 'no'];

for (let i = 0; i < questions.length; i++){
  let response = prompt(questions[i]);
  console.log(answers[i]);
  if (response.toLowerCase() === answers[i]) {
    alert('Correct!');
    score ++;
  }else {
    alert('Wrong!');
  }
}

let number = 9;
for(let i = 0; i < 4; i++){
  let guess = parseInt(prompt('Guess a number'));
  console.log('number of attempts');
  if (guess === number){
    alert('Correct!');
    score ++
    break;
  }else if (guess > number){
    alert('TOO HIGH!');
  }else if(guess < number){
    alert('too low');
  }else{
    alert('Not a number');
  }
}
alert('The number was 9');


let states = ['new york', 'massachusetts', 'rhode island', 'north carolina', 'new hampshire'];
for (let i = 0; i < 6; i++){
  let resp = prompt('Guess a state that I have lived in');
  console.log('attempts of states');
  let correct = false;
  for (let j = 0; j < states.length; j++){
    if (resp.toLowerCase() === states[j]){
      score ++;
      alert('Correct! These are not easy states to guess!');
      correct = true;
      break;
    }
  }
  if (correct === true){
    break;
  }else {
    alert('Wrong!');
  }
}
alert('These were all the possible answers: New york, Massachussetts, Rhode Island, North Carolina, New hampshire');

alert('You scored ' + score + ' out of 7');
