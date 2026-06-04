// Searching and checking 

let url = "https://courses.thetestingacademy.com";

console.log(url.includes("courses")); // gives boolean output

console.log(url.startsWith("https")); // true
console.log(url.endsWith("happy")); // false

console.log(url.indexOf("u")); // gives index of 1st u present
console.log(url.lastIndexOf("u")); // gives index of last u present


console.log(url.indexOf("nowhe")); // -1 = means it does not exist

// concept of regex (regular expression - includes /xyz/ symbol)
console.log(url.search(/the/)); // will return index from where it starts
