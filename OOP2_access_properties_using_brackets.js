//Intro to OOP II - accessing Object properties using brackets vs .notation (via codacademy)

//First let's create an example
function turntable(make,model,nowPlaying){
    this.make = make;
    this.model = model;
    this.nowPlaying = nowPlaying;
} //creates a constructor to define a new turntable
var sl1200s = new turntable("Technics","SL1200mk2","ATCQ 'Midnight Marauders'");
// console.log(typeof sl1200s);
// console.log(sl1200s.nowPlaying); //uses dot notation to access now playing
//By using bracket notation we can use a 'var' name to access a given property within an object like so:
var record = "nowPlaying"; //sets string to matching property in object
console.log(sl1200s[record]); //now we can just use record 'var' to access nowPlaying property

//Let's say you dont know if an object has a particular property, you can use a built-in called 'hasOwnProperty' 
/* .hasOwnProperty usage
ObjectName.hasOwnProperty('propertyName') //returns boolean value if property in value exists    
*/
console.log(sl1200s.hasOwnProperty('model')); //should return 'true' boolean
console.log(sl1200s.hasOwnProperty('price')); //should return 'false' boolean
console.log(typeof sl1200s.model); //consequently you can see what kind of value a property has using 'typeof'
