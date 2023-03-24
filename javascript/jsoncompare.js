var a = {name: "divi", lastname: "satty"};
var b = {lastname: "satty", name: "divi" };

function isEqual(person1, person2){
    console.log(person1);    
    console.log(person2);  
    
    var key1 = Object.keys(person1);
    var key2 = Object.keys(person2);

    console.log(key1, key2);
    console.log(key1.length, key2.length);

    if(key1.length!=key2.length){
        return false;
    }

}
isEqual(a,b);