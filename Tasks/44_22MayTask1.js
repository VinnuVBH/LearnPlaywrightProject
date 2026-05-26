// Triangle classifier

let sideA = 3; sideB = 3; sideC = 5;

if (sideA === sideB && sideB === sideC) {
    console.log("It is a Equilateral triangle");
}
else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("It is a Isosceles triangle");
}
else {
    console.log("It is a Scalene triangle");
}