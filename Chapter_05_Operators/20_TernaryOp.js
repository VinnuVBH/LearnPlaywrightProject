// Condition ? True : False

let actualStatusCode = 200;
let expectedStatusCode = 200;

let resultStatus = actualStatusCode === expectedStatusCode ? "Pass" : "Fail";
console.log("Test Result:", resultStatus);


let responseTime = 850;
let sla = 1000;

let slaStatus = responseTime <= sla ? "Within SLA" : "Exceeds SLA";
console.log(`Resonse Time Status: ${responseTime} ms - ${slaStatus}`);

// Nested ternary operation

let age = 25;
let goa_on = age >= 18 ? (age >= 21 ? "yey.. I'm gonna drink" : "ohh no, no drinks for me") : "No Goa for me";
console.log(goa_on);