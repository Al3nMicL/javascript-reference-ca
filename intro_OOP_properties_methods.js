//Intro to Object Oriented Programming - Properties, and Methods(via codacademy)
/*
Properties are analogous to vars, associated in an object
Methods are analogous to functions, associated in an object
*/
//The following creates a new object with properties:
var MPC2000 = new Object();
MPC2000.memoryMB = 32;
MPC2000.maxSamples = 99;
//methods can be used to change object property values, such as the following:
MPC2000.loadSample = function(x) {
    var y = MPC2000.maxSamples - x;
    return (x + " samples loaded, " + y + " samples slots are left." );
};
//we can call the method by using the format: ObjectName.MethodName();
console.log(MPC2000.loadSample(4));



