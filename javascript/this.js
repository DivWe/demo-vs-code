//this keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object.

// example 1:

// var operation = {
//     a: 1,
//     b: 2,
//     add: function() { // named function
//         this.a + this.b;
//         console.log(`a = ${this.a}, b = ${this.b}`);
//         var print = function() {
//             console.log(`a = ${this.a}, b = ${this.b}`);
//         }
//         print();
//     }
// }
// operation.add();

// o/p:
// a = 1, b = 2
// a = undefined, b = undefined


// add : function can be written as below+++++++++

// function add() { 
//     this.a + this.b;
//     console.log(`a = ${this.a}, b = ${this.b}`);
//     var print = function() {
//         console.log(`a = ${this.a}, b = ${this.b}`);
//     }
//     print();
// }
// +++++++++++++++++++++++++++++++++++++++++++++++++


//example 2:

// var person = {
//     fname: "Divya",
//     get: function(){
//         console.log("Outer: " + this.fname);
//         var print = function() {
//             console.log("Inner: " + this.fname);
//         }
//         print();
//     }
// }
// person.get();













