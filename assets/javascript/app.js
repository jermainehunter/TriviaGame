
//Added to my Bootstrap Portfolio Page: https://jermainehunter.github.io/Bootstrap-Portfolio/portfolio.html
// Questions...as objects in an array...start with a couple
//array of objects...

var questions = [{
  question: "What was the name of the boy who stole the Dude's briefcase?",
  answers: ["Ricky Peters", "Larry Sellers", "Knox Harrington", "Arthur Digby Sellers"],
  correctAnswer: "Larry Sellers"
}, {
  question: "What kind of dog did Walter bring bowling?",
  answers: ["Chihuahua", "Pomeranian", "Jack Russell Terrier"],
  correctAnswer: "Pomeranian"
}, {
  question: "Which US President did The Real Jeffery Lebowski meet?",
  answers: ["Richard Nixon", "Jimmy Carter", "Ronald Reagan", "Harry Truman"],
  correctAnswer: "Ronald Reagan"
},];
// Declaring our variables
//setting quizzBox to id quiz area allows us to select and hide after quiz
var quizBox = $("#quiz-box");
var timer;
//Declaring our variable game to hold an object that will contain most of our functions
// ..the first three are going to be
//answers correct, answers incorrect and the counter set to 15 (seconds).

var dudeTrivia = {
  correct: 0,
  incorrect: 0,
  counter: 10,

  //our countdown function will count down 1 second at time
  //remember we're accessing the counter above dudeTrivia.counter
  countdown: function () {
    dudeTrivia.counter--;
    //use jquery to put our countdown in he HTML
    $("#counter-number").html(dudeTrivia.counter);
    //put if statement if the game.counter reaches 0, game over
    if (dudeTrivia.counter === 0) {
      //run the done function if time runs out.
      //alert that time's up
      alert("Time's Up Man!");
      dudeTrivia.done();
    }
  },

  start: function() {
    timer = setInterval(dudeTrivia.countdown, 1000);
    $("#questions-wrapper").prepend("<h2>Your Time Left, Man: <span id='counter-number'>15</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      quizBox.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        quizBox.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    quizBox.append("<button id='done'>I'm done, Man</button>");
  },

 //check our answers below 
 done: function () {
  $.each($("input[name='question-0']:checked"), function () {
    if ($(this).val() === questions[0].correctAnswer) {
      dudeTrivia.correct++;
    }
    else {
      dudeTrivia.incorrect++;
    }
  });
  $.each($("input[name='question-1']:checked"), function () {
    if ($(this).val() === questions[1].correctAnswer) {
      dudeTrivia.correct++;
    }
    else {
      dudeTrivia.incorrect++;
    }
  });
  $.each($("input[name='question-2']:checked"), function () {
    if ($(this).val() === questions[2].correctAnswer) {
      dudeTrivia.correct++;
    }
    else {
      dudeTrivia.incorrect++;
    }
  });



    dudeTrivia.result();
  },
//the result function below, hide the questions wrapper and show the results.
//this happens when the clock runs out or user selects done button. 
  result: function () {
    clearInterval(timer);
    $("#questions-wrapper h2").remove();
    quizBox.html("<h2>You're done Man!</h2>");
    quizBox.append("<h2>Far Out Answers: " + dudeTrivia.correct + "</h2>");
    quizBox.append("<h2>Bummer Man, Answers: " + dudeTrivia.incorrect + "</h2>");
    quizBox.append("<h2>Is this a weekday? (unanswered): " + (questions.length - (dudeTrivia.incorrect + dudeTrivia.correct)) + "</h2>");
  }
};
//on click method for starting trivia game
//click on done button to show answers
$(document).on("click", "#start", function () {
  dudeTrivia.start();
  $("#the-dude").css('visibility', 'visibile');
  
});
//on click method for when user finishes questions before timer runs out
//click on done button to show answers
$(document).on("click", "#done", function () {
  dudeTrivia.done();
});