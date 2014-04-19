var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];
//add function for new entries
function add(firstName,lastName,email,phoneNumber) {
    contacts[contacts.length] = {
    firstName : firstName,
    lastName : lastName,
    email : email,
    phoneNumber : phoneNumber
    };
}

add("Jack","Dorsey","jdorsey@twitter.com","(212) 555-5555");

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
		//console.log(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
/*
function search(lastName){
    var tmp = contacts.length;
    for (var j = 0; j < contacts.length; j++){
        if (lastName === contacts[j].lastName){
        printPerson(contacts[j]);
        } 
    }
}
//search('Jones');
*/

list();