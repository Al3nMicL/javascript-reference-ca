/*
Heads or Tails using while loops
*/
var coin = Math.random();
var userGuess = prompt("Coin Flipped!\n Enter heads or tails");
var result = ('');
while(coin) {
    if(coin <= 0.5){
    console.log("Coin is heads");
    result = 'heads';
    } else if(coin <= 0.9) {
    console.log("Coin is tails");
    result = 'tails';
    } break
};
if(userGuess === result) {
    alert("You guessed right! You won!");
    } else {
    console.log("You guessed wrong, sorry try again.");
    };
