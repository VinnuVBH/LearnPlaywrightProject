function makeCount(start = 0) {
    let count = start;
    return {
        increment() { count++ },
        decrement() { count-- },
        getCount() { return count }
    }
}

let counter = makeCount(8);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());


