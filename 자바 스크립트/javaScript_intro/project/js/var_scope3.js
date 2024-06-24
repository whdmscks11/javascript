// const 선언 
const a = 1;

// const a = 10; 동일한 이름의 변수 선언 불가
// a = 10; 재할당 불가 

if(a === 1){
    // 스코프가 다르면 동일 이름 변수 선언 가능 
    const a = 10;
    console.log(a);
}
console.log(a);