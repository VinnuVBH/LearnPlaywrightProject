let testMatrix = [
    ["Login", "Pass", 203],
    ["Checkout", "Fail", 404],
    ["Search", "Pass", 180]
];

// 3 test cases, 2 passed, 1 failed, etc

// iteration

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[0].length; j++) {
        console.log(testMatrix[i][j]);     // prints with adding new line

    }
    console.log(" ");

}

// another way of printing

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ");   // prints without adding new line
    }
    console.log(" ");

}

// using forEach loop - not generally used

testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();

});