function test(testName, callback) {
    console.log(testName);
    callback();
}

test('Login', () => {
    console.log("Login credentials verification");
    // Playwright code here
})