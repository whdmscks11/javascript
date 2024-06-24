function cal(mode){
    const funcs = {
        'plus':function(num1, num2){
            return num1 + num2
        },
        'minus':function(num1, num2){
            return num1 - num2
        }
    }
    return funcs[mode]
}

console.log(cal('plus')(2,1))
console.log(cal('minus')(2,1))
