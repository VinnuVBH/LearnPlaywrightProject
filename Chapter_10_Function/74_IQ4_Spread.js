function add(a, b, c) {
    return a + b + c;
}
let num = [3, 55, 6];
add(...num);   //  no output bcuz not saved and printed.




// here we should use spread operator in both, while calling and in param of function

let responceCodes = [201, 400, 204];

function hasError(...codes) {
    return codes.some(s => s >= 204);
}
let result = hasError(...responceCodes); // true
console.log(result);