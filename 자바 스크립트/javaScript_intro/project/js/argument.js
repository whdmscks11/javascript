function sum() {
    let _sum = 0;
    for(let i = 0; i < arguments.length; i++){
        console.log(`${i} : ${arguments[i]}`);
        _sum += arguments[i];
    }
    return _sum;
}

console.log("result : " + sum(1,2,3,4));