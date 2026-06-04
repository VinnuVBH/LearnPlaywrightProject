let str = "  Hello world! world   ";

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

console.log(str.replace("world", "India")); // replaces only 1st word match
console.log(str.replaceAll("world", "India"));

// Concatination

console.log("Hello " + "Vinnu");
"Hello ".concat("World!");  // not an error, just doesnt print
`${"Hello"} ${"World"}`;

let r = "pass, Fail, Win, Loose".split(","); // splits into elements wherever there is given character
console.log(r);

console.log(r.join("-")); // joins elements with the given character



