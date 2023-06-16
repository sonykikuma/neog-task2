var readlineSync= require('readline-sync')
var score=0;

    var highscore=[
        {
            name:"Abha",
            score:"4"
        },
        {
            name:"Alisha",
            score:3,
        }
    ]
    
    var allQuestions=[
        {
             question: "What's the full and original name of Captain America?",
            answer: "Steve Rogers"

        },
        {
            question: "What's Thor's hammer called? ",
  answer: "Mjolnir"

        },
        {
             question: "Do you know what's Spiderman's real name?",
            answer: "Peter Parker"

        },
        {
            question:"Who is Iron Man in marvel ?",
            answer:"Tony Stark"
        },
        {
            question:" What is Tony Stark's actual name?  " ,
            answer:"Robert Downey Jr."
        }
    ]
    var questions=allQuestions
    
    console.log("Are you a marvel fan?")

function welcome(){
      var username= readlineSync.question("What is your name?   ")

    console.log("Welcome "+ username+" let's see if you know marvel cinematic universe")
}
    
    function play(question,answer){
        var useranswer= readlineSync.question(question)
    
        if (useranswer===answer){
            console.log("right!")
            score++
        } else {
            console.log("wrong!")
        }
    
        console.log("current score: ", score)
        console.log("--------")
    
    } 
    function game() {
        for (var i=0; i<questions.length; i++) {
          var currentQuestion = questions[i];
          play(currentQuestion.question, currentQuestion.answer)
        }
      }
      
      function showScores() {
        console.log("YAY! You SCORED: ", score);
      
      }
      
      
      welcome()
      game();
      showScores();
      



