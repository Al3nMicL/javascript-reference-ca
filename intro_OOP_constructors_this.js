//Intro to OOP - constructors and the 'this' keyword (via codecademy)
//A constructor is a way to make an object, javascript has a built-in constructor called 'Object'
//When created, the 'Object' constuctor is blank, example:
var myObj = new Object();
//you must init values to the object for it to have values (properties, methods, arrays, etc.)
myObj.property1 = "string example";
myObj.property2 = 16;
// console.log(myObj.property1); //then you can refernce the properties like so
//But what if you want to define your own custom constructor? 
//You do so by defining a function with optional parameters and using the 'this' keyword to define properties
function addUser(name,age) {
    this.name = name;
    this.age = age;
};
//now we can create objects using the constructor by using the 'new' keyword
var joey = new addUser("Joey Chase", 36);
var veronica = new addUser("Veronica Smith", 38);
//the new objects are now pre-populated with empty properties that are filled by using the constructor arguments
// console.log(joey.age);
//constructor properties don't have to be defined using parameters, you can preset their values so that
//all new objects defined by the constructor have the property already assigned:
function showChar(name,gender){
    this.name = name;
    this.gender = gender;
    this.show = "Seinfeld"; //all new objects will have this property already assigned
};
var jerry = new showChar("Jerry Seinfeld","male");
var george = new showChar("George Costanza","male");
var elaine = new showChar("Elaine Benes","female");
var kraemer = new showChar("Cosmo Kraemer","male");
//then we can iterate through all properties and values, to see the pre-assigned property
for (key in george){
console.log(key + " : " + george[key]);
}
