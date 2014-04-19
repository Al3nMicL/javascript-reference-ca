//Intro to OOP II - Constructor Prototypes and Inheritance (via codacademy)
/*
DRY means Don't Repeat Yourself, so using constructors to define multiple objects and prototypes is a
good way to embrace this principle. This can be furthered in unique situations where you must use a single
constructor to create multiple instances of similar objects by using prototype inheritance.
*/
//Consider a situation where your making a client side script to load car information for a dealership
function car(make,model,style){
    this.make = make;
    this.model = model;
    this.style = style;
};
//now let's create a method that displays the make and model on screen for any new instance of car
car.prototype.displayInfo = function(){
    return "Now viewing: " + this.make + " " + this.model + " " + this.style ;
};
//Ok. so now let's create a 'new' car object
var bmwi8 = new car("BMW","i8","coupe");
//we can add additional info for that specific model to make it stand out
bmwi8.engine = "hybrid electric";
//let's test it out
console.log(bmwi8.displayInfo() + " - " + bmwi8.engine); //ok cool, the displayInfo func shows the information we want
//Let's say we need to add more beamer coupes, but not create each object seperatley with repeated model name n style
//we can use prototype inheritance to help us out
function bmw_coupe(make,style){
    this.make = "BMW";
    this.style = "coupe";
};
//We want this constructor to inherit the car prototypes and methods
bmw_coupe.prototype = new car(); //set's the prototype to be a new instance of car 
//now we can add all new beamers using this class
var i330 = new bmw_coupe();
i330.model = "330i";
i330.engine = "clean diesel";
//let's see it in action
console.log(i330.displayInfo() + " - " +i330.engine); 