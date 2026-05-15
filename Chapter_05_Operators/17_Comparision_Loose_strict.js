console.log(45 == '45'); // true - loose equality operator
console.log(45 === '45'); // false - strict equality operator because here it compares both value and type. 45 is number and '45' is string. So, it returns false.

console.log(0 == ''); // true - because '' is converted to 0 and then compared
console.log(0 === ''); // false - because 0 is number and '' is string

console.log(false == 0); // true - because false is converted to 0 and then compared
console.log(false === 0); // false - because false is boolean and 0 is number   
console.log(true == 1); // true - because true is converted to 1 and then compared
console.log(true === 1); // false - because true is boolean and 1 is number 
console.log(false == ''); // true - because false is converted to 0 and '' is converted to 0 and then compared
console.log(false === ''); // false - because false is boolean and '' is string

console.log(0 == ""); // true - because 0 is converted to 0 and '' is converted to 0 and then compared
console.log("0" == 0); // true - because "0" is converted to 0 and then compared
console.log('' == '0'); // false - Transitively broken - because '' is converted to 0 and '0' is converted to 0 and then compared

console.log(null == 0); // false
console.log(null == undefined); // true
console.log(null === undefined); // false - because null is object and undefined is undefined

console.log(5 != "5"); // false - loose inequality operator
console.log(5 !== "5"); // true - strict inequality operator because here it compares both value and type. 5 is number and '5' is string. So, it returns true.