object = {v1:10, v2:50, v3:100}

function sum(){
    let total = 0;
    for(const index in this) {
        total += this[index];
    }
    return total;
}

console.log(sum.apply(object));