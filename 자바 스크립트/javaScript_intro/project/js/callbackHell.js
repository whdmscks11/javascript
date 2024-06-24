// 쇼핑몰 프로그램 -> 콜백 지옥 예시

// 로그인 - 비동기 작업
function login(username, callback) {
    setTimeout(() => {
        callback(username);
    }, 1000);
}

// 장바구니 상품 추가 - 비동기 작업
function addToCart(cart, product, callback) {
    setTimeout(() => {
        callback(product);
        return cart;
    }, 1000);
}

// 결제 - 비동기 작업
function makePayment(cardNum, products, callback){
    setTimeout(() => {
        callback(cardNum, products);
    }, 1000);
}

let cart = [];

login("조은찬", (username) => {
    console.log(`${username}님, 안녕하세요!`);
    addToCart(cart,"라면", (product) => {
        cart.push(product);
        console.log(`${product}을/를 장바구니에 추가했습니다.`);
        addToCart(cart, "김치", (product) => {
            cart.push(product);
            console.log(`${product}을/를 장바구니에 추가했습니다.`);
            makePayment("1234567890123456", cart, (cardNum) => {
                console.log(`${cardNum} 번호의 카드로 장바구니에 담겨 있는 상품들을 결제 했습니다. \n장바구니 목록 : ${cart}`)
            })
        } )
    })
})

/**

 위 예제를 보면 각각의 비동기 작업들이 이전 작업들을 의존할 때
 콜백 함수를 사용하면 비동기 작업을 순차적으로 수행할 수 있다.

 하지만 이렇게 콜백 함수들을 중첩 시키다 보면 코드의 가독성과 유지보수성이 떨어진다.
 이와 같은 현상을 '콜백 지옥'이라고 한다.

 만약 세개의 비동기 작업 외의 다른 작업들을 연달아 수행해야 한다면 코드는 기하급수적으로 훨씬 더 복잡해 질 것이다.
    예) login() -> addToCart() -> makePayment() -> reviewProduct(0 -> getCoupon() -> ...
 

 */