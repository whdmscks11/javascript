let num = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(num.sort()); // [1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9]

let sortfunc = function(a, b){ return a - b; }
console.log(num.sort(sortfunc)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]
