function Person(name){
    this.name = name;
    this.introduce = function() {
        return 'My name is ' + this.name;
    }
}

let p1 = new Person('mark');
let p2 = new Person('joseph');

console.log(p1.introduce());
console.log(p2.introduce());