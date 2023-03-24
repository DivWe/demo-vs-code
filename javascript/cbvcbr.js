var user = {name : "Divya",
            age : 26}

console.log("FirstName = " + user.name);
console.log("age = " + user.age);

var admin = user;

admin.name = "divi";
admin.age = 27;
console.log("FirstName = " + user.name);
console.log("age = " + user.age);
console.log("FirstName = " + admin.name);
console.log("age = " + admin.age);