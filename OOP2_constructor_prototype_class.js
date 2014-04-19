//Intro to OOP II - Constructors as classes, using prototypes (via codacademy)
/*
When defining a constructor, you're actually creating a new class of object with specific properties or methods.
A class can be construed as a type, or category of a specific kind of object. Take the following example: 
*/
function cat(name,breed) {
    this.name = name;
    this.breed = breed;    
}
var sasha = new cat("Sasha","mixed");
// console.log(sasha.breed); //the breed property is automatically set
//We want sasha to make a sound when we call it, so let's add a meow property
sasha.meow = function(){
    console.log("Meyoaaa!")
    }
//sasha.meow(); //calling this method allows sasha to make the sound
//now let's add a new cat
var perseas = new cat("Perseas","persian");
//let's call the same method to make perseas meow
//perseas.meow(); //produces an error because perseas doen't have that method attached to it object :(
/*
Let's say we found a bunch of stray's and added them as new objects, not knowing we wanted to add a method
that allows us to get a 'meow' when we call it's name. We gotta add a bunch of new meow methods then? We could
adjust the constructor but that would also mean adding a value to each new object created or else it would be empty.
Prototype to the rescue! Now we can add a standard method after the fact and all objects that were created with this
constructor will inherit it by default (kind of like a new css property added to a class).
Here's how to add the new methood by using the prototype keyword:

constructorName.prototype.newMethodname = function() {code}; 

//or if just adding a new property

constructorName.prototype.newPropertyName = 'string';

*/
//now we add a standard meow method to the cat constructor
cat.prototype.meow = function() {
    console.log("Meyoa?");
};
//calling perseas meow should now work
perseas.meow();
sasha.meow(); //notice how the new meow method does not alter sasha's originally set meow respone ("Meyoaaa!")
