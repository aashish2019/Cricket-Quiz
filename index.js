var readlineSync = require("readline-sync");


var score = 0;


var allquestions = [{
  question: 
  
 'Who recently took 10 wickets in a single innings?\na. azaj patel \nb. axar patel \nc. R Ashwin \nd. Shaheen Afridi \n '
  ,
  answer: "a"
}, {
  question: "Who won the T2O 2021 WC ? \na. Australia \nb. India \nc. England \nd. Pakistan \n ",
  answer: "a"
 
}, { question: "Who won the Cricket worldcup 2019 men ? \na. Australia \nb. India \nc. England \nd. New Zealand \n ",
  answer: "c",
} ];

for(i=0; i<allquestions.length; i++){

  var quest = allquestions[i];
  quiz(quest.question, quest.answer);



}

function quiz(questP, answerP) {
  var UserAnswer =  readlineSync.question(questP);
  if(UserAnswer===answerP){
    console.log("correct");
    score++;
    }
    else {
    console.log("sorry wrong answer");
    }
      console.log("Your Score is "+ score);

}