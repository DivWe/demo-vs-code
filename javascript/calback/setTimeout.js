// Syntax: setTimeout(() => {}, 5000);

// setTimeout(() => {
//     console.log("The setTimeout() method sets a timer which executes a function once the timer expires.")
// }, 2000);

//---------------------------------
let armyName;
const army = () => {
    console.log(`Welcome ${armyName}`);
};

const timefunc = () => {
    setTimeout(() => {
        armyName = "Purple army";
        console.log(armyName);
    }, 5000);
};

timefunc();
army();
