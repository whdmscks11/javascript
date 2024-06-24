let arr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = function (id) {
        return function () {
            console.log("함수 내부 호출");
            return id;
        }
    }(i);
}
// for ...of :  배열이나 이터러블 객체의 값 자체를 순회합니다.
for (const value of arr) {
    console.log(value());
}