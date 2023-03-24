// function means an event (example: house shifting)

// example 1:

// normal way of addition:
//var a = 10;
// var b = 20;
// console(a + b);
// o/p: 30

// add using function:

// var a = 10;
// var b = 20;
// function add(){
//     console.log(a + b);
// }
// add();

// sub using function:

// var a = 10;
// var b = 20;
// function sub(){
//     console.log(a - b);
// }
// sub();

// 1. If we go to a function, we will get a return gift. Likewise, function in programming should return something.

// var a = 10;
// var b = 20;
// function sub(){
//    return(a - b);
//    }
// sub(); // without logging the result, we will see the blank output in console. So, we need to log the value either by storing the function to a variable or directly logging the function call.

// function sum(val1, val2){
//     return val1 + val2;
// }
//  var res = sum(10,10); //(or) console.log(sum(10,10));
// console.log(res);

// var res = function large(x, y){
//     if(x>y){
//         z = x;
//     }
//     else{
//         z=y;
//     }
//     return z;
// }
// console.log(res(8,6));

function operation(a, b, type){

    if(type == 'add'){
        return a+b;
    }
    else if(type == 'sub'){
        return a-b;
    }
    else if(type == 'mul'){
        return a*b;
    }
    else {
        return a/b;
    }
}
console.log(operation(10, 20, 'add'));











