//named function
//anonymous function
//IIFE - Immediately Invoked Function Expression


//==============named function========

//example 1: 
// function add(a,b){
//     return a+b;
// }

// //===============Anonymous function=========

// var square = function(num){
//     return num * num;
// }
// console.log(square(2));
// console.log(square(6));

//=================IIFE=================

var message = (function(){
var name = "div";
console.log("hello");
return name;
})();
console.log(message);