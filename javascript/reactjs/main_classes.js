// Function Syntax : function add(){ }

//class syntax: class Classname{
    // constructor(){}
    // }
        
class Vehicle{
    constructor(){
        this.run = true;
    }
}
//to call function inside class, we need to create an object.

class RoyalEnfield extends Vehicle{ //(vehicle parent RE child here) Instead of proto, we can use inheritance
    constructor(){
        super(); // refer may 5, 2023 recording for explanation.
        this.sound = true;
    }
}

let obj = new RoyalEnfield();
console.log(obj.run);