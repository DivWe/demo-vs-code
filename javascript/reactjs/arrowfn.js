let person = {
    firstName: "Divya",
    lastname: "Sathyamoorthy",
    get: () => {
        console.log("Outer: " + this.firstName + " " + this.lastname);
        let print = () => {
            console.log("Inner: " + this.firstName + " " + this.lastname);
        };
        print();
    },
};
person.get();

// output: Outer: undefined undefined
//         Inner: undefined undefined

// Reason: the scope of this keyword is inside the arrowfunction itself.
