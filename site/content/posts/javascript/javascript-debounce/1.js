function log(text) {
    console.log(text);
}

function debounce(func, wait) {
    let timeoutId;
    return function(...args){
        console.log(...args);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    }
}

const debounceFunc = debounce(log, 1000);
debounceFunc("Hello");
debounceFunc("World");
debounceFunc("!");
debounceFunc("JavaScript");
debounceFunc("Debounce");
debounceFunc("Function");
debounceFunc("Test");
debounceFunc("Test 2");