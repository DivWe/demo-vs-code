// eg 1: addition
//let arr = [1,2,3];

//anonymous function

// let sum = function(a,b,c) {
//     return a+b+c;
// }
// console.log(sum(arr[0],arr[1],arr[2]));

// //or

// console.log(sum(...arr)); //spread operator

//eg 2: arr concat------------------------

// let arr1 = [1,2];
// let arr2 = [3,4];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

//eg 3: sub-----------------------

// let arr = [6,4];

// let sub = function(a,b){
//     return a-b;
// }
// console.log(sub(...arr));

//eg 4: sub two array -----------------

// let arr1 = [2,2];
// let arr2 = [3,4];

// let sub = function(a,b) {

//     let arr3 = [];

//     for(let i=0; i<arr1.length; i++){
//         let result = Math.abs((arr1[i] || 0) - (arr2[i] || 0));
//         arr3[i]=result;
//     }
// return arr3;
// }
// console.log(sub(arr1,arr2));

// }


//eg 5: add using forEach (rest parameter)

// function add(...arr){
//     let sum = 0;
//     arr.forEach(ele => sum = sum + ele);
//     return sum;
//     }
// console.log(add(1,2,3));
                //--------------//

function add(...arr){ // rest parameter
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(add(6,8));

                 //----------------//