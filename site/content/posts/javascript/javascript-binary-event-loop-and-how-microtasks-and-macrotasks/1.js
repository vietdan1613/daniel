console.log("Start");

Promise.resolve().then(() => {
    console.log("X2");
});

setTimeout(() => {
    console.log("Macrotask");
}, 0);


Promise.resolve().then(() => {
    console.log("X1");
});

setTimeout(() => {
    console.log("Macrotask1");
}, 0);

console.log("End");