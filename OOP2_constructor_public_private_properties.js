//Intro to OOP II - Constructor class public and private properties (via codacademy)
/*
When defining a constructor, all properties set using the 'this.' notation become public by default, 
meaning that they are accessible and modifiable when new objects are created by them. However there is
a way to store private properties using the 'var' keyword inside the class instead: 
*/
function song(title,artist,genre){
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.stream = true;
    this.download = false;
};
//now let's create a new song and set it's properties 
var technoLo = new song("Technologic","Daft Punk","EDM");
//we can access all the properties about the object because it's properties are public using 'this'
function printAllInfo(targetObj){ //function that will print all target info
    for (var hash in targetObj){
     console.log(hash + " : " + targetObj[hash]);
    };
};
//use the function to print info
printAllInfo(technoLo);
//but what if we dont want a savvy user to set the download value to 'true', we can use a "private" var

function songObj(title,artist,genre){
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.stream = true; //we can create a func to change this to 'false' if user skips song
    var download = false; //'private var' will not show if we try to print it from an object    
};
//let's create another song object with this new and improved class
var flyMe = new songObj("Fly me to the Moon","Dibiase","Instrumental");
//let's use the print function and see what happens
printAllInfo(flyMe); //as you can see the download property for the song is 'invisible' to the console
//Even though it is inaccessible, you can create a 'public method' to access it like so:
function songObj2() {    
    var download = false;
    this.getDownload = function(){
        return download;
    };
};
//and set the new and improved song object to inherit the og song object properties
songObj2.prototype = new songObj();
//let's redefine 'flyme' to use this new song object
flyme = new songObj2("Fly me to the Moon","Dibiase","Instrumental");
//now we can print the download status of the song to the console
console.log(flyme.getDownload()); //console should show single 'false' at the end
