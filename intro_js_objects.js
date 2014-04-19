//into to objects in javascript - via codacademy
/*objects can hold info and functions that act on the info in the same place.
They can be thought of as containers for key value pairs (hash tables?) that don't have to be numbers (like arrays),
they can be strings and variables, or even hold other arrays, or anonymous functions
*/
//in it's simplest form an object is defined using 'object literal notation' like so:
var myObject = {
    key1 : "value1" ,
    key2 : "value2" ,
    key3 : "value3" ,
}
// console.log(myObject.key2); //and it's keys can be accessed using . notation after object name
//the following is an example of object definition and initalizing it with values and methods (functions)
var phoneBook = {}; //creates an empty object 'var'
phoneBook.name = "Ex Girlfriend";
phoneBook.number = "(212) 555 - 1234";
phoneBook.call = function () {
    return ("Call " + this.name + " at ph# " + this.number + " ?");
};
// console.log(phoneBook.call()); //you can then reference that method by using a '.' after the object name
//you can define objects using 'object constructors' like so:
var MPC2000 = new Object(); //remember use capital letters when referencing keyword 'Objects'
//you then populate it just like literal notation
MPC2000.name = "MPC 2000";
MPC2000.memoryMb = 32;
MPC2000.storage = "3.5 floppy";
// console.log(MPC2000.storage);
//you can also iterate through all keys and values using a 'for'...'in' like so:
/*
for (key in MPC2000) {
    console.log(key + ": " + MPC2000[key]); //you must use bracket [] notation to access specific values in keys
}
*/