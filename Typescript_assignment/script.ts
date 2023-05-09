// Assignment 1:
// Work with datatypes in TS such as boolean, any, array of strings, heterogenous arrays with examples.
// Print the output to the console in VS Code.
var a:boolean=true;
var b:any="My name is Della";
var c:Array<String>=['Gaurav','Tanmay','Lekshmi']
var d:Array<any>=[1,'tennis',88,23.5,'a']
console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Assignment 2:
// Work with various Popups available in TypeScript such as alert, confirm, prompt.
// Print the output to the console in VS Code.
alert("Welcome to my page")
confirm("Do you want to continue?")
prompt("Go ahead")

// Assignment 3:
// Write an enum in TypeScript and access the values and log to the console.
// Also use indexes to access enums.
enum vehicle{
    car,
    bike,
    bus
}
console.log(vehicle.car)
console.log(vehicle.bike)
console.log(vehicle.bus)