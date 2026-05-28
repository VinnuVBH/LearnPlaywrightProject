let tests = ["Login", "password", "Logout"];

// normal iteration

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

// using of

for (i of tests) {
    console.log(i);
}

// gives elements with index
tests.forEach((i, index) => { console.log(i, index) });

// using in

for (let test in tests) {
    console.log(tests[test]);
}