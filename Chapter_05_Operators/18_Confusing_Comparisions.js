console.log(null == undefined); // true - both are considered equal with loose equality
console.log(null === undefined); // false - different types (null vs undefined)

console.log(NaN == NaN); // false - NaN is not equal to anything, even itself
console.log(NaN === NaN); // false - strict equality also returns false for NaN

console.log([] == []); // false - two different array references
console.log([] === []); // false - different references, even with strict equality
console.log({} == {}); // false - two different object references
console.log({} === {}); // false - different references, even with strict equality

let arr = [1, 2];
let sameArr = arr;
console.log(arr == sameArr); // true - same reference
console.log(arr === sameArr); // true - same reference and type

console.log([] == false); // true - [] becomes "", then 0, false becomes 0
console.log([] === false); // false - array vs boolean

console.log([0] == false); // true - [0] becomes "0", then 0, false becomes 0
console.log([0] === false); // false - array vs boolean

console.log("0" == false); // true - "0" becomes 0, false becomes 0
console.log("0" === false); // false - string vs boolean

console.log("" == false); // true - "" becomes 0, false becomes 0
console.log("" === false); // false - string vs boolean

console.log("1" == true); // true - "1" becomes 1, true becomes 1
console.log("1" === true); // false - string vs boolean

console.log("2" == true); // false - "2" becomes 2, true becomes 1
console.log("2" === true); // false - string vs boolean

console.log([1, 2] == "1,2"); // true - array becomes string "1,2"
console.log([1, 2] === "1,2"); // false - array vs string

console.log(0 == -0); // true - both are considered equal
console.log(0 === -0); // true - strict equality also considers them equal

console.log(false == 0); // true - false becomes 0
console.log(false === 0); // false - boolean vs number

console.log(true == 1); // true - true becomes 1
console.log(true === 1); // false - boolean vs number

console.log(null == 0); // false - null only equals undefined with ==
console.log(null < 0); // false - null becomes 0, 0 < 0 is false
console.log(null <= 0); // true - null becomes 0, 0 <= 0 is true
console.log(null > 0); // false - null becomes 0, 0 > 0 is false
console.log(null >= 0); // true - null becomes 0, 0 >= 0 is true

console.log(undefined == 0); // false - undefined doesn't equal 0
console.log(undefined < 0); // false - undefined becomes NaN
console.log(undefined > 0); // false - undefined becomes NaN
