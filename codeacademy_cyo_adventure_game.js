// Check if the user is ready to play!
confirm("Get ready to start!");
var age = prompt("How old are you");
if ((age) < 18)
{
    console.log("play at your own discretion");
}
else
if ((age) >= 18)
{
    console.log("feel free to play");
}
//story begins
{
console.log("Snow White and Batman were hanging out at the bus stop, waiting to go to the shops. There was a sale on and both needed some new threads. You've never really liked Batman. You walk up to him.");
console.log("Batman glares at you.");
}
var userAnswer = prompt("Are you feeling lucky, punk?");
if ((userAnswer) === "yes")
{
 console.log("Batman hits you very hard. It's Batman and you're you! Of course Batman wins!");   
}
else if ((userAnswer) !== "yes")
{
    console.log("You did not say yes to feeling lucky. Good choice! You are a winner in the game of not getting beaten up by Batman.");
}
//Game over
//Feedback using ternary operator
var feedback = prompt("please rate the game out of 10");
if (console.log(feedback) >= "8" ? 'This is just the beginning of my game empire. Stay tuned for more!' : 'I slaved away at this game and you gave me that score?! The nerve! Just you wait!');



