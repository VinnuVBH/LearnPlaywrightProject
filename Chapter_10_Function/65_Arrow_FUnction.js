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