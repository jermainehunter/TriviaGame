// trivia questions array of objects
//contains questions, answers, correct answer.
var triviaQuestions = [
  {
    question: "1. Jeff Bridges plays the Dude. What is the Dude's real name?",
    answerone: "The Jesus",
    answertwo: "Jeffery Lebowski",
    answerthree: "Maude Lebowski",
    answerfour: "Jackie Treehorn",
    correctanswer: 2
  },
  {
    question: "2. Quoting George H. W. Bush, the Dude defiantly stated that 'This aggression will not____.'?",
    answerone: "Be tolerated",
    answertwo: "Chill",
    answerthree: "Be acceptable",
    answerfour: "Stand",
    correctanswer: 4
  },
  {
    question: "3. What ties the Dude's room together?",
    answerone: "A Chair",
    answertwo: "A Table",
    answerthree: "A Rug",
    answerfour: "A Coffee Table",
    correctanswer: 3
  },

];


//we need to show questions and answer choices in HTML
//question 1 
$('#question').text(triviaQuestions[0].question);
$('#answer_1').text(triviaQuestions[0].answerone);
$('#answer_2').text(triviaQuestions[0].answertwo);
$('#answer_3').text(triviaQuestions[0].answerthree);
$('#answer_4').text(triviaQuestions[0].answerfour);
//question 2
$('#question_2').text(triviaQuestions[1].question);
$('#q2answer_1').text(triviaQuestions[1].answerone);
$('#q2answer_2').text(triviaQuestions[1].answertwo);
$('#q2answer_3').text(triviaQuestions[1].answerthree);
$('#q2answer_4').text(triviaQuestions[1].answerfour);
//question 3
$('#question_3').text(triviaQuestions[2].question);
$('#q3answer_1').text(triviaQuestions[2].answerone);
$('#q3answer_2').text(triviaQuestions[2].answertwo);
$('#q3answer_3').text(triviaQuestions[2].answerthree);
$('#q3answer_4').text(triviaQuestions[2].answerfour);






  


//our event listeners...pay attention to this part!!
//lots can go wrong.

