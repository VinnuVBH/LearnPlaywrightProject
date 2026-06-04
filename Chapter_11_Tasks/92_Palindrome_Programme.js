let stmt = "madam";
let stlength = stmt.length - 1;
let reverse = "";
function reverseIt() {
    for (let i = stlength; i >= 0; i--) {
        let r = stmt.charAt(i);
        reverse = reverse + r;
    }
    return reverse;
}

let reverseStmt = reverseIt();

if (stmt === reverseStmt) {
    console.log(`${stmt} is a palindrome`);

}
else console.log(`${stmt} is not a palindrome`);




