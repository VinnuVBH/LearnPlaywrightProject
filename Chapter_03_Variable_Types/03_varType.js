// var variable can be redeclared, reassigned and is function scoped
var browser = "Google Chrome";
var browser = "Mozilla Firefox"; // Redeclaration possible with var, but not with let or const
console.log(browser); // Mozilla Firefox

var testcase = ["Login", "Signup", "Logout"];
for (var i = 0; i < testcase.length; i++) {

    console.log("Running testcase:" + testcase[i]);
}

console.log("Loop leaked outside: ", i); // i var has leaked out of for loop, which is not possible with let or const