// let a = [1, 2, 3, 4, 5];

//    let result = [];

//     for(let i=0; i< a.length; i++){
//         result[i]= a[0] + a[i];
//         }
// console.log(result);

 let a = [1, 2, 3, 4, 5];

//    a.map(function(result){
//         return result + 1;
//             });
// console.log(a);


 a = a.map((result) => {
    return result + 1;
})
console.log(a);

