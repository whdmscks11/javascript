let person = {
    name : "조은찬",
    'age' : 24, 
    introduce : function(){
         console.log("내 이름은 " + this.name + "이야.");
    },
    'greet' : function(){
         console.log("안녕! 반가워");
     }
}

let scores = {
    'mark' : 10,
    'lucy' : 20,
    'joseph' : 30
};

// 데이터 접근 방법 1
console.log(scores['mark']); // 10
console.log(scores['lucy']); // 20
console.log(scores['joseph']); // 30

// 데이터 접근 방법 2
console.log(scores.mark); // 10
console.log(scores.lucy); // 20
console.log(scores.joseph); // 30