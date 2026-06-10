function print() {
    console.log("Normal function printing");

}

function placeOrder(item, callback) {
    console.log("Callback function printing");
    callback();    // here print() is getting called. 
}

// 1st way of callback
placeOrder("Apple", print);

// 2nd way using anonymus function

placeOrder("Mango", function () {
    console.log("Call using anonymus function");

});

// 3rd way using arrow

placeOrder("Banana", () => {
    console.log("Callback using Arrow function");

})