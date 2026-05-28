// splicing

let arr = [1, 2, 3, 4];
console.log(arr);

// splice(index , delete count, item to add)

arr.splice(1, 1, 30); // p1 - index where splicing starts, p2 - no. of elements deleted, p3 - element to replace that place
console.log(arr);

arr.splice(2, 0, 67);
console.log(arr);

arr.splice(3, 2, 7, 45);
console.log(arr);


