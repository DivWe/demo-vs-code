//promise object with producing code.
//producing code(
// let promiseObj = new Promise((resolve, reject) => {//promise object created
//     console.log("(Producing code!!!)Getting value from API!!"); // just imagine we are calling an API to get a value.
//     setTimeout(() => {
//          resolve("API value return");
//         //reject(new Error("Error Occured!!!")); // creating error object to display promise result
//     }, 3000)
// });
//producing code)

// console.log(promiseObj);

//consumer code(

// promiseObj.then(
//     (val) => {
//         console.log(`value received from promise ${val}`);
//     },
//     (err) => {
//         console.log(`Error occured from promise ${err}`);
//     }
// );
//consumer code)

// =========================================

//example 1 using then:
// let po = new Promise((resolve, reject) => {
//     console.log("Is movie success"); 
//     setTimeout(() => {
//         resolve("Yes");
//         //reject(new Error("drop"));
//     }, 3000)
// });

// po.then(
//     (value) => {
//         console.log(`it's a hit ${value}`);
//     },
//     (error) => {
//         console.log(`flop ${error}`);
//     }
// );

//================================

//catch

promiseObj.catch(err)(
        (val) => {
            console.log(` ${val}`);
        }
)