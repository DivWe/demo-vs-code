//primitive datatypes
var fName = "Divya"; // String
var lName = "Sathyamoorthy";
var age = 27; //number
var name = fName + ' ' + lName;
var a = null; //null
var b; //undefined
var robot = false; // Boolean

//---------------------------------------
console.log(name);
console.log(name.length)
console.log("My name is " + name + " and my age is " + age);
console.log(name + age);
console.log(1 + age + name);
console.log(1 + age + name.length);
console.log(name + age + name.length);
console.log(age + name + name.length);

//-------------------------------------
debugger
var x = 20;
var y = 2;
console.log(x + y);
x = x.toString();
console.log(x + y);
console.log(Number(x) + y);
console.log(x);