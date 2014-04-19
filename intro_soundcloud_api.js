/*
Intro to the Soundcloud API - codeacademy
*/
//Soundcloud uses a JavaScript API that follows REST ful priniciples (Representational State Transfer)
//To request data from Soundcloud, do so using a xhr (XML Http Request)

//The four verbs (http methods) - GET, POST, PUT, DELETE
//These are the four common methods that can be used in an Http request, in detail:
//GET : retrieves information from the specified source
//POST : sends new information to the specified source
//PUT : updates information of the specified source
//DELETE : removes information from the specified source

//The following is a suggested way to make a status request: (won't work before you authenticate)
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/", false); 
//"GET" is the type of request being made, to the specified url, 'false' is a server timeout option
xhr.send(); //this sends the request
console.log(xhr.status); //would return a '200' status code 
console.log(xhr.statusText); //would return the string 'ok' if status was '200'

/*
Endpoints are API-defined locations where particular data are stored. 
You'll GET something different depending on the endpoint you use.
For instance, using an API for a video hosting service, there
might be endpoints for the most popular videos, the most recent videos,
or videos belonging to a certain genre or category.
*/

