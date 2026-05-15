// for let, printing before declaring shows "ReferenceError"
console.log(letHoisting); // printing before declaring - here its reference error

//TDZ starts from here, so we cannot access letHoisting variable before this line, because it is in temporal dead zone.



let letHoisting = "Hi vinnu";
console.log(letHoisting);