function cafe(item, callWhenReady) {
    console.log("Waiting...");
    callWhenReady();
}

function callWhenReady() {
    console.log("Your order is ready");

}

// 1st way
cafe('Pizza', callWhenReady);

// 2nd way     this anonymus function without name is called back, not callWhenReady function
cafe('Burger', function () {
    console.log("Burger preparing");

})

// 3rd way    this anonymus function without name is called back, not callWhenReady function
cafe('Fries', () => {
    console.log("Fries preparing");

})