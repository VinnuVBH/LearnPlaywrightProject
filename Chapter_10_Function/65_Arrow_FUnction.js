const greet = function (name) {
    return "Hi " + name;
}
let r = greet("modi");
console.log(r);

// with => function

//   remov function keyword, remove {}, remove return and add "=>" between parameter and return  
const gr = (name) => "Hi " + name;
console.log(gr("Bob"));

let doubleIt = n => n * 2;
console.log(doubleIt(10));

function add1(a, b) {
    return a + b;
}
// param     return
const add2 = (a, b) => a + b;
console.log(add2(35, 4));

function hi() {
    return "Hey everyone";
}
let stm = hi();
console.log(stm);

const stm2 = () => "Hey2";
console.log(stm2());

// if a big logic
const greet3 = name => {
    let a = "Hi " + name;
    return a;
}
console.log(greet3("Vinnu"));
