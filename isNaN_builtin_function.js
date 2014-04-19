//'isNaN' is a builtin 'function' that checks to see if a value is not a number
/*
console.log(isNaN('berry')); // => true
console.log(isNaN(NaN)); // => true
console.log(isNaN(undefined)); // => true
console.log(isNaN(42));  // => false, because 42 is a number, also '42' would return false
*/
//the following checks to see if value input into 'function' is actually a number:
var isEven = function(number) {
  if(isNaN(number)){ //remember 'isNaN' is a built-in so, (number = isNaN) shouldn't be used, number is 'undefined'  
      return"this is not a number.";  
  } else if(number % 2 === 0){  
      return(true);
  } else {
      return (false);
  }  
};
console.log(isEven("six")); //the argument passed into the function is a string
console.log(isEven(6));