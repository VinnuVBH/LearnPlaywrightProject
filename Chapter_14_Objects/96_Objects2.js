let a = { status: "Pass" };
console.log(a.status); // prints value if that key

let b = a; // b with point ro the same reference as 'a', new memory will not be created
console.log(b.status);
console.log(a.status);

b.status = "Fail"; // updating the value of status key
console.log(b.status);
console.log(a.status); // value will be changed in the reference, so value is updated even for 'a'

if (a === b) {
    console.log("True"); // gives true - the reference is same

}
else console.log("False");


// this is called call by reference concept