// let 선언 
let i = 1;

// for문 조건식에 전역변수와 동일한 이름의 변수 선언 가능 
console.log('함수 내부1');
for(let i = 0; i < 5; i++){
    console.log(i); // for문 조건식 'i'
}
console.log('함수 외부');
console.log(i); // line 2

console.log('함수 내부2');
for(let i = 0; i < 5; i++){
    let i = 10; // for문 조건식에서 사용한 변수와 동일한 이름의 변수를 for문 내부에서 선언 가능 
    console.log(i); // 가장 가까운 변수 'i'를 호출 -> line 14
}
console.log('함수 외부');
console.log(i); // line 2

for(let i = 0; i < 5; i++){
    i = 5; // for문 조건식 'i'
    console.log(i); // line 21
}
