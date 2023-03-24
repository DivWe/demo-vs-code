function getArray(){
    return ["hello","everyone"];
}
let [greeting,wish] = getArray();
console.log(greeting);
console.log(wish);

//------------------------------------

let person = {name : "Divi", country : "India", job : "jobseeker"};

//let name = person.name;
//let country = person.country;
//let job = person.job;

let [name, country, job] = [person];
