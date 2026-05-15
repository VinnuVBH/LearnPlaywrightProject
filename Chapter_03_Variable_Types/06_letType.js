// let variable can be reassigned but cannot of redeclared, and is block scoped
let a = 10;
// let a = 20;  Syntax error, because in let, redeclaration is not possible

let testStatus = "Pending";

if (testStatus == "Pending") {
    let timeTaken = "5 Minutes";
    console.log("Time taken is:" + timeTaken)
}

// console.log("Time taken is:" + timeTaken) // Printing here gives error because let is block scoped.

// block scoping in let
let b = 10; // a Global scope
console.log(b);

scoping();

function scoping() {
    let b = 20; // a Local scope
    console.log(b);

    if (true) {
        let b = 30;
        console.log(b);
    }
    console.log(b);
}
console.log(b); 
