//arrow function does not have function keyword.

function add(){
    return "addition";
}

let add = () => {
    return "Addition";
    }
    console.log(add());

    //===========================

    let add = function mul(a, b){
        return a * b;
        }
        console.log(mul(2, 3));
    //----------------------------
    let mul = (a, b) => {
        return a * b;
        }
        console.log(mul(3, 3));

