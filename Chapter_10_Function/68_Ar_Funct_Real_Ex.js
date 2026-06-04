// if (ourStatusCOde >= 200 && ourStatusCode < 300)
// normal function
function readCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
        return "Parsing is successful";
    else return "Not successful";
}
let result = readCode(200);
console.log(result);

// function as an expression
const funcEx = function readCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300)
        return "Parsing is successful";
    else return "Not successful";
}

// with arrow function

const arroeEx = (statusCode) => {
    if (statusCode >= 200 && statusCode < 300)
        return "Parsing is successful";
    else return "Not successful";
} 
