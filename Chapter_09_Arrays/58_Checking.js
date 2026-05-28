// checking an array - boolean outcome

let result = Array.isArray([1, 4, 6]);
console.log(result);
let r = Array.isArray('a'); // always need [] for array
console.log(r);

// every and some

console.log([20, 58, 49].every(s => s > 50));
console.log([60, 58, 69].every(s => s > 50));

// Platwright API ex

let result1 = [200, 201, 205].every(statusCode => statusCode >= 200);
console.log(result1);

// some() - atleast 1 should pass then true

console.log([20, 58, 49].some(s => s > 50));
