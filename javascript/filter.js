//-------------filter--------------

let arr = [10, 20, 30];
let res = arr.filter(arrFilter);

function arrFilter(item){
    return item == 10;
}
console.log(res);

//------------map---------------

// let res = arr.map(arrFilter);

// function arrFilter(item){
//     return item == 10;
// }
// console.log(res);