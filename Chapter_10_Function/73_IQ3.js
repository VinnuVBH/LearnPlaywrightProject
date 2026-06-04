say("Vinnu");  // no error because hoisting in possible in functions

function say(name) {
    return "Hi " + name;
}

sayHi("Bob");  // error, because function as expression hoisting goes to TDZ so cant call before declaration

const sayHi = function (name) {
    return "Hi " + name;
};