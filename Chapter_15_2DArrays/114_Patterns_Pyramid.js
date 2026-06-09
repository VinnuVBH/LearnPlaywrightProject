// *
// **
// ***

// print this

let n = 3; // identifier for number of rows
for (let i = 1; i <= n; i++) {
    let py = " "                      // creating here bcoz it should add * to space
    for (let j = 1; j <= i; j++) {
        py += "*";
    }
    console.log(py.trim());            // printing here bcoz it should print each line

}
