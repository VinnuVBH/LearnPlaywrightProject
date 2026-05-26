let status = 0;
console.log(typeof status); // Output: number
switch (status) {
    case false:             // switch is always ===, do datatype is also compared
        console.log("Status is false");
        break;
    case 0:
        console.log("Status is 0");
        break;
}