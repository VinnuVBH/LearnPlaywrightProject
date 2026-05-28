// Creating arrays

let browsers = ["Chrome", "Firefox", "Safari"];


// using Array
let scores = new Array(3); // here 3 is length
let scores2 = new Array(30, 22, 38);

console.log(browsers);
console.log(scores);
console.log(scores2);

console.log(browsers[3]); // gives undefined, not an Exception or error

// using Array.of

let test = Array.of(36, 78, 87);
console.log(test);

// using from

let chars = Array.from("hello"); // splits the letters and prints.
console.log(chars);




