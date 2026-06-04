// rest of the parameters with spread concept
// ... reults means, result = []
function result(testName, ...results) { // always ...param should be in the last, not 1st
    console.log(testName);
    console.log(results);
}
result("login", 2, 5, 6); // can add any number of parameters
result("Register", "Vinn", 3);
