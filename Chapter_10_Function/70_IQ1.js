function testCase(name, status, duration) {
    return ` ${name} ${status} ${duration}`;
}
testCase("Login", "Pass", 20); // no output because the return is not assigned and printed.