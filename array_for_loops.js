/*
Using Arrays with for loops
You can print out each or select elements in an array using a for loop like so:
*/

var equipment = new Array();
    equipment[0] = "Akai";
    equipment[1] = "Korg";
    equipment[2] = "Roland";
    equipment[3] = "DBX";
    equipment[4] = "Tascam";
//Remember an array can also be defined (but not added to) this simpler way:
//var equipment = ["Akai", "Korg", "Roland", "DBX", "Tascam"];
for (var e = 0; e < equipment.length; e++ ) {
    console.log("I have a machine made by " + equipment[e]);
};
/*The floor loop prints each of the elements since the e var is less then the length of equipment array
(how many elements it has), then e is incremented by 1, the increment can be changed to e += 2 to print
out every other element (starting from 0)*/
/*
Writing a for loop that finds the largest (integer) element in an array, then logs it to console
*/
//array is defined with random integers
var bigPun = [3, 6, 2, 56, 32, 5, 89, 32];
//initial value of largest is declared
var largePro = 0;
//set the for loop to increment through the array elements, like previous example:
for(var i = 0; i < array.length; i++) {
//Compare each element of the array to the var largePro. 
//If this element's integer is bigger than largePro, make largePro value equal to this element's value.
    if(bigPun[i] > largePro) {
        largePro = array[i];
//will only change the value of largePro var if the current array element you are looking at is greater than the variable value.
    }
}
//eventually there will be no higher values to set once high value is reached, so result (final value) is logged to console.
console.log(largePro);
