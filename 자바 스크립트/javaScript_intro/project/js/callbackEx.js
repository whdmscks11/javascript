function getData(callback){
    setTimeout(() => {
        console.log("서버에서 데이터를 받아 왔습니다.");
        callback({name:"조은찬"});
    }, 2000);
}

// data는 객체 리터럴
getData((data) => {
    console.log("서버에서 받아 온 데이터 : " + data.name);
})
