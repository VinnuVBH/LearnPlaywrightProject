let scores = [56, 78, 96, 30, 66];
console.log(scores);

// map - transforms elements using a condition and gives new array

let grades = scores.map(s => s > 60 ? "Pass" : "Fail");
console.log(grades);

// filter - creates new array but only keeps which passes the condition

let passing = scores.filter(a => a > 50);
console.log(passing);

// reduce - sums all the elemets

let sum = scores.reduce((a, b) => a + b, 0);
console.log(sum);

// flat - merges all the arrays

let mergeArrays = [[2, 4], [45, 68], 5];
console.log(mergeArrays.flat());