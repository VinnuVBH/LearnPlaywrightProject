// callbacks are of 2 types
// 1. Synchronus - line by line, next code will wait until the callback is finished
// 2. Ashynchronus - callback when finished, until then other code runs. - used in Playwright
//    using setTimeout( funct(), milliseconds)

// Async

console.log("Test 1: start now");

setTimeout(function () {
    console.log("Test 2: Running...");

}, 2000);

console.log("Test 3: Finished");

