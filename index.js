var readlineSync = require("readline-sync");
var score = 0;
console.log("Welcome User. ")
var username = readlineSync.question("Please Enter your Name to continue further ")
console.log("hey "+username+" You have just entered the game. ")

var questions = [
 {
  question:"First Indian movie submitted for Oscar ",
  answer:"Mother India",
  realAnswer:"Mother India"
},

 {
  question:"Satyajit Ray win Oscar in the year ",
  answer:"1992",
  realAnswer:"1992"
},

 {
  question:"First Indian sound film was ",
  answer:"Alam Ara",
  realAnswer:"Alam Ara"
},
{
  question:"Filmfare awards started from the year",
  answer:"1954",
  realAnswer:"1954"
},
{
  question:"First Filmfare Award for best actor awarded to",
  answer:"Dilip Kumar",
  realAnswer:"Dilip Kumar"
}

];



//function for quiz
function quiz(question, answer,realAnswer){
  var useranswer = readlineSync.question(question);
  if(useranswer == answer){
    console.log("you are right ");
   score = score +1;
   console.log("Your score is"+ score)
  }
  else{
    console.log("Oops! You are wrong ");
    console.log(" The real Answer is "+realAnswer)
    score = score - 1;
    console.log("Your score is"+ score)
    
  }
}




var qfu =readlineSync.question("Let's see how much do you know about Bolliwood ? Are you ready? (enter yes or no) ");
console.log("You have entered " + qfu);




if(qfu == "yes")
{
    console.log("Here you go . This is your first question.")
    //for loop
    for(i=0;i<questions.length;i++){
    var currentquestion = questions[i];
    quiz(currentquestion.question,currentquestion.answer,currentquestion.realAnswer);

  
    

    }
}



else{
  console.log("It seems you are not interested in the game.Have a nice day. ")
}






