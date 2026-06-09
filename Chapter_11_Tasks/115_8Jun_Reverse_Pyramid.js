// Reverse pyramid
// ***
// **
// *

let n = 3;

for (let i = n; i >= 1; i--) {
    let row = " ";
    for (let j = i; j >= 1; j--) {
        row += "*";
    }
    console.log(row.trim());

}