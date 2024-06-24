let arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = function () {
        console.log("함수 내부 호출");
        return i;
    }
}

// for ...in : 객체의 모든 열거 가능한 속성 키를 순회합니다. [ 배열의 경우, 인덱스를 반환한다. ]
for (const value in arr) {
    console.log(arr[value]());
}
