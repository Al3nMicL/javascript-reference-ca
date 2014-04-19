//Using prompt, switch, if and else to execute different code in cases - via codeacademy
var user = prompt("Do you code, everyday?","Enter 'yes' 'no' or 'maybe'").toLowerCase();
switch (user) {
    case 'yes' : //console.log("You'll make a fine dev some day, soon!");
        var job = prompt("Is it your job then?", "Enter 'yes' or 'no'").toLowerCase();
        var passion = prompt("Is it one of your passions?","Enter 'yes' or 'no'").toLowerCase();
            if (job === 'yes' && passion === 'yes') {
                console.log("You have a bright and interesting future ahead of you!");
            } else {
                console.log("You must be a programmer, keep hustling!");
            }
        break;
    case 'maybe' : //console.log("At least you try. Being a dev means everyday. Keep going!");
        var howMany = prompt("How many days a week, then?","Enter a number between '1' and '6'").toLowerCase();
        var work = prompt("Do you want a job like this in the future?", "Enter 'yes' or 'no'").toLowerCase();
            if (howMany >= 3 || work === 'yes') {
                console.log("Keep going, your persistance will pay off soon!");
            } else {
                console.log("Must be a hobby then, why not make it a career?");
            }
        break;
    case 'no' : console.log("What are you waiting for? Dive into a console, foo!");
        break;
    default : console.log("Huh?, next time follow directions.");
        break;
}