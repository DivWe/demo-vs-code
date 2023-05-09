// CALLBACK : pass a function as a arugument to another function. (infinite loops - function repeatedly executing)

// function display(){
//     console.log("Hi Hello!!!!");
//     display();
// }
// display();

// --------------------------------

// const add = (a,b) => {
//     return a + b;
// }

// const display = (val) => {
//     console.log("The final value is from callback function: " , val);
// // }

// // console.log("The final value is: " + add(10, 20, display));

// // -------------------------------

// const sub = (a,b) => {
//     return a - b;
// }

// const display = (val) => {
//     console.log("The final value is from callback function: " , val);
// }

// console.log("The final value is: " + sub(50, 30, display));

// //---------------------

// const sub = (a,b,display) => 

//     display{
//     console.log("The final value is from callback function: " , val);
// }

// console.log("The final value is: " + sub(50, 30, display));
//-----------------------------

const displayCompletion = () => {
    console.log("Finished this operation");
}
let add = (callback) => {
    let x = 2;
    y = 3;
    console.log("Sum:" , x + y);
}

add(displayCompletion);