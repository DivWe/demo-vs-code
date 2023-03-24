// normal swapping

// let a = 10;
// let b = 20;
// console.log(`before swapping a: ${a}`);
// console.log(`before swapping b: ${b}`);
// b = a + b;
// a = b - a;
// b = b - a;
// console.log(`After swapping a: ${a}`);
// console.log(`After swapping b: ${b}`);

// object or array destructuring

// let a = 10;
// let b = 20;
// console.log(`before swapping a: ${a}`);
// console.log(`before swapping b: ${b}`);
// [a,b] = [b,a]; // destructing assisgnment
// console.log(`After swapping a: ${a}`);
// console.log(`After swapping b: ${b}`);

let [greeting, ...intro] = ["Hello", "Welcome", "to", "guvi"];
console.log(greeting);
console.log(intro);