'use strict'; //strict syntax

let nam = prompt('What is your name?');
alert ('Hello ' + nam + ', really nice to meet you! We will start with some yes or no questions about myself :)');
// console.log(nam);
document.write('Hey ' + nam + '! Thank you for answering the questions, and if you had some incorrect, No Worries! You will get to know more about myself in this page. Enjoy!');

let questions = ['Am I doing Javascript for Code 401?', 'Is Google my favorite Tech Company?',
  'Is becoming a Dev for Google my dream job?', 'Have I ever visited Yosemite National Park?',
  'Do I consider Cheeseburger my favorite food?', 'Guess a number', 'Guess a state that I have lived in'];
let answers = ['no','yes', 'yes', 'no', 'no', 9, ['north carolina', 'massachusetts', 'new york', 'rhode island']];

for (let i = 0; i < questions.length[i]; i++){
  let response = prompt(questions.indexOf[0,1,2,3,4]);

  if (typeof(answers[i]) !== 'string'){

    for (let answer of answers[i]){
      if(response.toLowerCase() === answer){
        alert('Correct!');
        break;
      }
    }
  }
  else {
    if (response.toLowerCase() === answers[i]) {
      alert('Correct!');
    } else{
      alert('Wrong!');
    }
  }
}
