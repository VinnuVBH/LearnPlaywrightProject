let a = [11, 4];
let b = [24, 5];

let c = a.concat(b);
console.log(c);

// spread - modern way
let d = [...a, ...c]; // ...a means all the elements of a
console.log(d);

// join - joins elements of the array into 1 string
let s = ["Pass", "Fail", "Skip"].join(" | ");
console.log(s);

