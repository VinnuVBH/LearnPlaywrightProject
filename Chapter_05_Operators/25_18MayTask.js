let a = 40;
let b = 30;
let c = a > b ? a : b;
console.log("the maximum value is " + c);

let d = 50;
let e = a > b ? a > d ? a : d : b > d ? b : d;
console.log("the maximum value is " + e);