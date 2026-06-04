let env = "Staging"; // global scope

function setUpConfig() {
    let timeout = 3000;
    console.log(env);  // can access global scope
    console.log(timeout);  // can access local scope
}

setUpConfig();
console.log(env);  // can access global scope
console.log(timeout);  // error - cannot access local scope