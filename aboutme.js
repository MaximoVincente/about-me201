'use strict'; //strict syntax

let score = 0; //Variable for score counter
//Ask user's name
let nam = prompt('What is your name?');
alert ('Hello ' + nam + ', really nice to meet you! We will start with some yes or no questions about myself :)');
document.write('Hey ' + nam + '! Thank you for answering the questions, and if you had some incorrect, No Worries! You will get to know more about myself in this page. Enjoy!'); // Displays greetings message to user on main page

//This Array stores the first 5 questions asked to the user
let questions = ['Am I doing Javascript for Code 401?', 'Is Google my favorite Tech Company?',
  'Is becoming a Dev for Google my dream job?', 'Have I ever visited Yosemite National Park?',
  'Do I consider Cheeseburger my favorite food?'];
let answers = ['no','yes', 'yes', 'no', 'no']; //This array stores the answers of the first five questions

//This for loop goes through the five questions with the user
for (let i = 0; i < questions.length; i++){//questions.length will iterate through every index in the array
  let response = prompt(questions[i]);
  console.log(answers[i]);
  if (response.toLowerCase() === answers[i]) {//if array question [0] equals to array answers [0] then correct, and continously does the same through ecery array stored
    alert('Correct!');
    score ++;//score count for the 5 questions
  }else {
    alert('Wrong!');
  }
}

//This loop prompts the user to guess the number
let number = Math.random();
for(let i = 0; i < 4; i++){ //the loop will allow the user to attempt 4 times if wrong
  let guess = parseInt(prompt('Guess what number I am thinking of :)'));
  console.log('number of attempts');
  if (guess === Math.random()){
    alert('Correct!');
    score ++;
    break; // if the user guessed right, then the loop will break
  }else if (guess > number){
    alert('TOO HIGH!');
  }else if(guess < number){
    alert('too low');
  }else{
    alert('Not a number');
  }
}
alert('The number was ' + number);

//This loop prompts the user to guess one of the states within the array
let states = ['new york', 'massachusetts', 'rhode island', 'north carolina', 'new hampshire'];
for (let i = 0; i < 6; i++){//the user has 6 attempts to guess right
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
    break;//if user guess correct, the loop will break
  }else {
    alert('Wrong!');
  }
}
alert('These were all the possible answers: New york, Massachussetts, Rhode Island, North Carolina, New hampshire');
alert('You scored ' + score + ' out of 7'); //this alert will display how many correct answers the user had
//Test for duplicate
