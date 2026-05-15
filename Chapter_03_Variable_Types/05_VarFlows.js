// Reason why var is function scoped and not block scoped

var a = 10; // a Global scope
console.log(a);

scoping();

function scoping() {
    var a = 20; // a Local scope
    console.log(a);

    if (true) {
        var a = 30;
        console.log(a);
    }
    console.log(a); // shows 30 because var is function scoped and not block scoped, so it has overridden the value of a in the function scope
}
console.log(a);

