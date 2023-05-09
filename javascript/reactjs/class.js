class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return `name is ${this.name}`;
    }
}

class Employee extends Person{
    constructor(name, id){
        super(name);
        this.id = id;
    }
    getID(){
        return `ID is ${this.id}`;
    }
}

let obj = new Employee("guvi","b46");
console.log(obj.getName(), obj.getID());

// ---------------------------------

class Idol{
    constructor(name){
        
    }
}

class Army{
    constructor(armyname){
        
    }
}