//  lexographic sorting - Default

let fruits = ["Banana", "Guvava", "Apple"];
let sortedFruits = fruits.sort();
console.log(sortedFruits);

let nums = [10, 9, 1, 3]; // the 1st letter os numbers are sorted
nums.sort();
console.log(nums); // 1, 10, 3, 9

// normal sorting of number arrays using " => " function

nums.sort((a, b) => a - b);
console.log(nums); // normal ascending sorting
nums.sort((a, b) => b - a);
console.log(nums); // normal descending sorting
