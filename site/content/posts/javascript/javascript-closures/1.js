function outer() {
    let count = 0;
    
    return {
        increase() {
            count++;
            console.log(count);
        },
        decrease() {
            count--;
            console.log(count);
        }   
    }
}

const counter = outer();
counter.increase(); // 1
counter.increase(); // 2
counter.decrease(); // 1