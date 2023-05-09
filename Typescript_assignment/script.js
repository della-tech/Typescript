// Assignment 1:
// Work with datatypes in TS such as boolean, any, array of strings, heterogenous arrays with examples.
// Print the output to the console in VS Code.
var a = true;
var b = "My name is Della";
var c = ['Gaurav', 'Tanmay', 'Lekshmi'];
var d = [1, 'tennis', 88, 23.5, 'a'];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
// Assignment 2:
// Work with various Popups available in TypeScript such as alert, confirm, prompt.
// Print the output to the console in VS Code.
alert("Welcome to my page");
confirm("Do you want to continue?");
prompt("Go ahead");
// Assignment 3:
// Write an enum in TypeScript and access the values and log to the console.
// Also use indexes to access enums.
var vehicle;
(function (vehicle) {
    vehicle[vehicle["car"] = 0] = "car";
    vehicle[vehicle["bike"] = 1] = "bike";
    vehicle[vehicle["bus"] = 2] = "bus";
})(vehicle || (vehicle = {}));
console.log(vehicle.car);
console.log(vehicle.bike);
console.log(vehicle.bus);
