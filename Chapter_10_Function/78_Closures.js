// will never use in Playwright

function outer() {
    let message = "Hello";
    console.log("Outer called");

    function inner() {
        console.log(message);
        console.log("Inner executed");

    }
    return inner;   // when inner funtion needs to be executed but it is not called, it can be returned.

}
let fn_inner = outer(); // inner is returned here and stored in fn_inner
fn_inner(); // when this is called, inner function is automatically called and executed