/*
Searching for characters in a string

This script will allow you to search for a sequence of characters in a string.
In this example it will find a name in a string of text
*/
var text = "So the new economy is fueled by creatives. Exemplary programmer by choice, Al3nMicL is of this new breed..."; //text to search
var myName = "Al3nMicL"; //the particular sequence of characters to find
var hits = []; //an empty array that will be populated with search results

for (var i = 0; i < text.length ; i++) { //Step 1
    if(text[i] === 'A') { //Step 2
        for(var j = i; j < (i + myName.length); j++){ //Step 3
            hits.push(text[j]); //Step 4
        }
    }
};
if (hits.length === 0){ //Step5
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}
/*
Step 1: create a 'for' loop that will serve as the string parser, create a var that is less than the text length and increment it
You can treat a string like an array of characters. That is why var text is specified like an array

Step 2:
Place the 'if' statement inside our for loop to make the script check the 'if' statement each time it moves forward through the loop. 
Essentially, the 'for' loop instructs: "Go through every letter in 'text'." The 'if' statement executes: if you see the value specified, 
'push' that text/string into an array". The 'if' statement says: "If found the first letter of the name, start the second for loop" 

Step 3:
Add another 'for' loop inside the if statement. This loop ensures each character of your name gets pushed to the hits array.
This loop says: "going to add characters to the array until I hit the length of the user's name." 
So if your name is 8 chars long, your loop should add 8 characters to hits if it ever sees the first letter of myName in text string.
Keep in mind you'll want to set your second loop's iterator to start at the first one, so it picks up where that one left off.
That's why the condition to check is (i + myName.string)

Step 4:
In the body of your loop, have your program use the '.push()' method to hits var.
The 'push' method adds what's found to the last element of the array specified.

Step 5:
Console log the results and have an 'if' 'else' statement that gives a message if string not found.
*/