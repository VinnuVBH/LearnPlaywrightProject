let score = [
    [25, 35, 20],   // student 1
    [23, 45, 50],   // student 2
    [33, 44, 26]    // student 3
];

// i need sum or scores of every student

let rowSum = score.map(row => row.reduce((a, b) => a + b));
console.log(rowSum);

let suiteResults = [
    ["Login - Pass", "Registered - Pass", "Logout - Pass"],  // Authentcation suite
    ["Search - Pass", "Filter - Fail", "Sort - Pass"],       // Search suite
    ["CHeckout - Fail", "Payment - Fail", "Confirm - Pass"]  // Payment suite
];

// all test cases which have failed
for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[0].length; j++) {
        if (suiteResults[i][j].includes("Fail")) {
            console.log(suiteResults[i][j]);

        }
    }
}