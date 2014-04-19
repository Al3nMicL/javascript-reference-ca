/*
Re-create the rock, paper, scissors game where the computer is the opponent 
*/
var userChoice = prompt("Do you choose rock, paper, or scissors");
var computerChoice = Math.random();
//console.log(computerChoice);
//if, else if, else statement to help computer choose
if(computerChoice <= 0.33) {
    computerChoice = "rock";
    console.log("Computer gets rock");
} else if(computerChoice <= 0.66){
    computerChocie = "paper";
    console.log("Computer gets paper");
} else {
    computerChoice = "scissors";
    console.log("Computer gets scissors");
};
//---OUTCOMES---Then proceed to figure out all the possible outcomes between computer and user
//1st Outcome - Tie btwn two choices
var compare = function(choice1, choice2) {
    if(choice1 === choice2){
    console.log("The result is a tie!");
    }
//2nd outcome - choice1 is rock    
    if(choice1 === "rock") {
        if(choice2 === "scissors") {
            console.log("rock wins");
        } else {
            console.log("paper wins");
        }
    }
//3rd outcome - choice1 is paper
    if(choice1 === "paper") {
        if(choice2 === "rock") {
            console.log("paper wins");
        } else {
            console.log("scissors wins");
        }  
    }
//4th outcome - choice1 is scissors
    if(choice1 === "scissors") {
        if(choice2 === "rock") {
            console.log("rock wins");
        } else {
            console.log("scissors wins")
        }
    }
}; //end of compare function
//finally call the compare function and use userChoice and computerChoice vars as the parameters
compare(userChoice,computerChoice);