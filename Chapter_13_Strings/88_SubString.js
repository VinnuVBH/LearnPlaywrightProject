let str = "Login_test_Pass_003";

// using slice(start, end) - also negative index supported
let strPart = str.slice(6, 10);
console.log(strPart);

let testNumber = str.slice(-3); // gives from the last
console.log(testNumber);

// using substring(start, end) - negative indexes  not supported

let subStr = str.substring(0, 5);
console.log(subStr);

