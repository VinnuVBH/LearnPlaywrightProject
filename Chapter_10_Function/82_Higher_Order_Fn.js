// A function that makes another function as its argument or returns another function id Higher order function
// Function as an argument
function runWithLogging(testFn, testName) {
    console.log(`Starting: ${testName}`);
    let results = testFn();
    console.log(`Finishing: ${testName} -> ${results}`);
    return results;
}

function loginTest() {
    return "Pass";
}

function loginTest2() {
    return "Fail";
}

runWithLogging(loginTest, "1st login");