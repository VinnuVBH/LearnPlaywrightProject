// CB can return

function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(15, 4, function (x, y) {
    return x + y;
})

console.log(sum);
