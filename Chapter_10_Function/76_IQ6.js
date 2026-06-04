let gx = 10;


// Nested scope / Blocked scope
function outer() {
    let x = 10;

    function inner() {
        let y = 20;
        console.log(x);
    }
    inner();
    console.log(y); // error bcoz cant use y outside function

}

outer();