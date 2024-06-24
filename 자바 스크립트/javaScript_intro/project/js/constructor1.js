function Person(){} // 내부 구현이 비어있는 일반함수
let p1 = new Person(); // new 키워드를 붙임으로써 객체를 생성하는 '생성자'가 된다.

// p1은 객체이므로 속성과 메소드를 생성할 수 있다.
p1.name = 'mark';
p1.introduce = function(){
    return 'My name is ' + this.name;
}
console.log(p1.introduce());