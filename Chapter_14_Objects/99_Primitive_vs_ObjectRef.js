// primitive datatype vs non primitive (eg - Objects)

let a = 10;
let b = a;    // b will take the value of a and be stored in different reference.
console.log(a);
console.log(b);

b = 99;
console.log(a); // value of a will not change bcuz its primitive 
console.log(b);

//  but for non premitive like Object - when assigned to another obj reference, the value refernce in heap memory is same, so when value is updated in one, both will be updated

let obj1 = { Name: "Vinuu" };
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.Name = "Bob";   // will be updated for both because both refernec point to same heap memory
console.log(obj1);
console.log(obj2);


