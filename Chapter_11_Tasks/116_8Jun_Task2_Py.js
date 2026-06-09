// Normal pyramid
//   *
//  ***
// *****

let n = 3;
let c = 5;
for (let i = 1; i <= n; i++) {
    let r = " "
    for (let j = 1; j <= n - i; j++) {
        r += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        r += "*";
    }

    console.log(r);
}