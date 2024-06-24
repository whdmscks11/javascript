// let 선언

let a = 1;
// let a = 10; --> 컴파일 에러 
a = 2; // 값 변경 

console.log(a); // line 5 결과

// 함수 내에서 동일한 이름의 변수 선언 
function func1(){
    // 함수 내부에서 선언한 변수는 함수 내에서만 유효
    let a = 10;
}
func1();

console.log(a); // line 5 결과

// 함수 내에서 기존 변수 값 변경 --> 함수 내부에 있는 변수 a는 전역 변수 a를 참조한다. 따라서 값을 변경하면 전역 변수 a에 영향을 미침.
function func2(){
    a = 20;
}
func2();
console.log(a); // line 20 결과 

// 그러나 내부에서 동일한 이름의 변수를 선언한 후에 값 변경하면 전역변수가 아닌 함수 내 지역변수를 참조하게 됨.
function func3(){
    let a = 30;
    a = 50;
}
func3();
console.log(a); // line 20 결과 