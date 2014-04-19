/*
Javascript functions
Simply put, the function keyword allows you to call a bunch of reusable code
or instructions to be executed with one phrase
Functions are structured like so
    var functionName = function(parameter) {
        (code code code);
        (code code);
        };
then you call the function like so:
    functionName(parameter);
Here's two examples
*/
var divideByTwo = function(number) {
var int = number / 2;
console.log(int);
};
divideByTwo(64);
//
var greeting = function(name) {
    console.log("Hello Mr." + " " + name);
};
greeting("Al");
/*
So a function has four main parts
1.A var that declares the function (using camelCase if neccesary)
2.The function keyword that identifies the var as a function
3.A parameter (in parenthesis) right after the function keyword that acts like a placeholder
for the value you might input when the function is called.
4.The reusable code inside the { }; brackets, every line of code within the brackets
must end with a ; as well
*/
//You can use the 'return' keyword instead of console.log to return the value of a function for use in other code
var timesTwo = function(num) {
    return num * 2;
};
var i = timesTwo(32);
console.log(i);
/*
The return keyword is useful in such the following scenarios:
- return a variable's value if the variable has been declared inside the function
- return the parameter
- if the parameter is a number, do math with that parameter and you can return the value
- if the parameter is a string, use keywords like .length or .substring() and you can return the value
*/
