let process = [
    function(input) { return input + 10; }

]
let input = 1;
for(i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input);