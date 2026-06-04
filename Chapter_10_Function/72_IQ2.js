function testName(name) {
    console.log(`Running: ${name}`);
    // no return statment
}

let result = testName("Login"); //calles here so prints running once
console.log(result); // gives undefined because no return statement so nothing will be saved