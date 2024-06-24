const a = 1;

function cal(func, num) {
    if (typeof func === "function") {
        return func(num);
    }
    return null;
}

function increase(num) {
    return num + 1;
}

function decrease(num) {
    return num - 1;
}


console.log(cal(increase, 1));
console.log(cal(decrease, 1));
console.log(cal(a, 1));