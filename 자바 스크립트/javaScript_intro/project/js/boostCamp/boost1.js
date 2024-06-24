function solution(telno) {
    // 전화번호 '-' 기호 무시 로직
    if(telno.includes('-')) {
        const numArr = telno.split('-');
        let temp = '';
        for (const num of numArr) {
            temp += num;
        }
        telno = temp;
    }

    const tel = telno;
    // '-' 기호 제거 확인 코드
    console.log("'-' 기호 제거 : " + tel);

    const failure = ["전국", "X"];
    const map = {
        "010": "휴대폰",
        "011": "휴대폰", "016": "휴대폰", "017": "휴대폰", "018": "휴대폰", "019": "휴대폰",
        "031": "경기", "032": "인천", "033": "강원",
        "041": "충청", "042": "대전", "044": "세종",
        "051": "부산", "052": "울산", "053": "대구",
        "054": "경북", "055": "경남",
        "061": "전남", "062": "광주", "063": "전북",
        "064": "제주"
    };

    // '001' , '002'로 시작하며 전화번호의 길이가 11 <= x <= 15인 번호는 국제번호로 지정
    if(tel.startsWith('00')) {
        if(tel[2] === '1' || tel[2] === '2'){
            if(tel.length > 10 && tel.length < 16) {
                return [ "국제", "O"];
            }
            return [ "국제", "X"];
        }
        return failure;
    }

    // 전화번호 DEFAULT 조건 
    if (tel.length > 11 || tel.length < 9) return failure; // 전화번호는 9-11자릿수이다. 
    else if (tel[0] !== '0') return failure; // 전화번호는 오직 '0'으로만 시작한다. 

    const top = tel.substring(0, 3); // 전화번호 앞 3자리
    const ext = tel.substring(tel.length - 4); // 전화번호 뒷 4자리

    // 서울 지역 ('02')
    if (tel[1] === '2') { 
        if (tel.length !== 10) return ["서울", "X"]; 
        if (ext[0] === ext[1] && ext[1] === ext[2] && ext[2] === ext[3]) return ["서울", "X"]; 
        return ["서울", "O"]; 
    }
    // 휴대폰 번호 ('010')
    else if (tel[1] === '1') { 
        if (!map[top]) return failure; 
        if (tel[2] !== '0') return ["휴대폰", "X"]; 
        if (tel.length === 11 && parseInt(tel[3]) % 2 === 0) return ["휴대폰", "O"]; 
        return ["휴대폰", "X"]; 
    }
    // 그외 지역 번호 
    else if (map[top]) { 
        if (tel.length === 10 && tel[3] === '0') return [map[top], "X"]; 
        return [map[top], "O"]; 
    }
    return failure; // 전화번호 앞 세자리가 map에 없는 경우, ["전국", "X"] 반환
}

console.log(solution("010-123-1234"));
console.log(solution("010-2234-1234"));
console.log(solution("02-1234-1234"));
console.log(solution("0212341111"));
console.log(solution("0311237890"));
console.log(solution("061-012-7890"));
console.log(solution("015-0157899"));
console.log(solution("042-2123-7890"));

// 국제번호 입출력 확인 코드 
console.log(solution("000-2123-7890"));
console.log(solution("00370405679"));
console.log(solution("002-212-7890"));
console.log(solution("002-1221237890"));
console.log(solution("001-212-789012"));
