function Ultra(){}
Ultra.prototype.ultraProp = true;

function Super(){}
Super.prototype = new Ultra();
console.log(Super.prototype);

function Sub(){}
Sub.prototype = new Super();
Sub.prototype.name = 'hello';


let s = new Super();
console.log(s.name);

let o = new Sub();
console.log(o.name);