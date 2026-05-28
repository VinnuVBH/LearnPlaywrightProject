let statuses = ["Pass", "Fail", "Skip"];
console.log(statuses);
console.log(statuses[2]);
console.log(statuses[-1]); // undefined without at

console.log(statuses.at(-1)); // Skip - borrowed from python, at accesses from last.
console.log(statuses.at(-2)); // Fail

// Modifying

statuses[1] = "Blocked";
console.log(statuses);
