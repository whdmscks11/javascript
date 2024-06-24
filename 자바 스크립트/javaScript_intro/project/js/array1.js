// 값 추가
let alphabets = ['a', 'b', 'c', 'd', 'e'];
alphabets.push('f');
console.log(alphabets) // ['a', 'b', 'c', 'd', 'e', 'f']

// 복수 값 추가
alphabets = alphabets.concat(['g', 'h']);
console.log(alphabets) // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// 앞에서 추가
alphabets.unshift('z');
console.log(alphabets) // ['z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

// index로 지정한 위치부터 deleteCount만큼의 값 삭제 후, items 추가
alphabets.splice(2, 2, 'x', 'y');
console.log(alphabets) // ['z', 'a', 'x', 'y', 'd', 'e', 'f', 'g', 'h']

// 값 삭제
alphabets.shift();
alphabets.pop();
console.log(alphabets); // ['a', 'x', 'y', 'd', 'e', 'f', 'g']


let arr = ['c', 'b', 'e', 'a', 'd'];

// 값 정렬
arr.sort();
console.log(arr); // ['a', 'b', 'c', 'd', 'e']

arr.reverse();
console.log(arr); // ['e', 'd', 'c', 'b', 'a']