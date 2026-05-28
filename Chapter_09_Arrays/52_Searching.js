let result = ["Pass", "Fail", "Absent", "Topped", "Fail"];

// indexOf(element) - if element is present gives index, if not present -1

console.log(result.indexOf("Fail")); // 1
console.log(result.indexOf("Unknown")); // -1

// lastIndexOf(element) - searches last element with the name
console.log(result.lastIndexOf("Fail")); // 4

// includes(element) - boolean
console.log(result.includes("error")); // false

// find(condition) - returns 1st matching element
let nums = [23, 56, 67, 78];
console.log(nums.find(x => x > 50));

console.log(nums.findIndex(x => x > 50)); // gives the 1st index
console.log(nums.findLast(x => x > 50)); // gives the last index



