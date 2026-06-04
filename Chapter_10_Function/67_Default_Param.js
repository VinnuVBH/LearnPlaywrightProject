// adding default values in parameters, borrowed from python

function retry(testName, maxRetries = 3, delay = 1000) {
    console.log(`Testcase ${testName} is tried for ${maxRetries} times and delayed by ${delay}ms`);
}
retry("Login"); // default values get displayed
retry("Registration", 5, 2000);