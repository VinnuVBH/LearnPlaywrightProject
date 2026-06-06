let a = { Name: "Vinnu" };
let b = { Name: "Vinnu" };
// both a and b are stored in different reference in heap area even if values are same

if (a === b) {
    console.log("True");

}
else console.log("False"); // gives false - reference is different