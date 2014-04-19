/* Scope in Javascript - Global versus local variables
Variables defined outside a function are accessible anywhere once they have been declared. 
They are called global variables and their scope is global.
Variables defined within a function are local variables. 
They cannot be accessed outside of the function.
*/
var my_number = 7; //this has global scope

var timesTwo = function(number) {
 var my_number = number * 2;
    console.log("Inside the function my_number is: " + my_number);
}; 
//by adding var keyword it re-defines the scope of my_number from global to local
timesTwo(7);

console.log("Outside the function my_number is: " + my_number);
//calling my_number this time will simply return the value 7, not performing the function
//commenting out var before my_number will return 14, since it was changed by the function
