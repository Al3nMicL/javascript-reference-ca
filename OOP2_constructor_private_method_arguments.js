//Intro to OOP II - Constructor class public and private properties, pt.2 passing arguments to methods (via codacademy)
/*
In the previous example we used a 'songObj2' to demonstrate using private properties and methods in class objects.
Remember the private download 'var', let's take it a step further and add a password to set it's property to 'true'
*/
//first we need to recreate the constructor
function songObj2(title,artist,genre){
    this.title = "\'"+ title +"\'";
    this.artist = artist;
    this.genre = genre;
    this.stream = true;
    var download = false;
    this.downloadStatus = function(){
        return download;
    };
//now instead of using just the getDownload method to simply return false, let's add a 'password' argument

    this.getDownload = function(pass){
        if (pass == 3145) {
            download = true;
            return "Thanks, your download for " + this.title + " by " + this.artist + " will begin shortly!" ;
        } else {
            return "Sorry, you can't download " + this.title + " invalid download code." ;
        }
    };
    
};
//let's add a quick function that displays info for a song playing
songObj2.prototype.showInfo = function(){
    return ("Now playing : " + this.title + " by " + this.artist + ", in genre - " + this.genre + " music");
};
//ok let's add an actual song to test this out
var iCantStop = new songObj2("I Can't Stop","Flux Pavilion","Dubstep");
//call the showinfo func to see if it exists:
console.log(iCantStop.showInfo());
//now let's add a prompt that will ask user for the password before executing the getDownload func
function downloadNow(targetObj){
    var ask4pwd = prompt("Please enter your 4 digit download code here: ","0000");
    console.log(targetObj.getDownload(ask4pwd));
};
//now let's test it out
downloadNow(iCantStop); //success, enter the correct code then log the downloadStatus func to see if it changed as well
console.log(iCantStop.downloadStatus());
