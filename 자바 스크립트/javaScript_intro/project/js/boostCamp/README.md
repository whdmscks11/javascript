## 기능 요구사항 : 
> OOO 회사에 입사 첫날, 예전 개발자가 만들다 멈춘 전국 전화번호 규칙을 판단해 주는 코드를 공유해 주었다. 우선 이 코드를 분석하고 개선하는 과정을 나름대로 잘 기록해두자. 학습 결과를 제출할 때 기록한 내용을 제출해야 한다. 


 ### 서울 지역 판단 조건 정리
 1. 먼저 조건문으로 전화번호의 두번째 자리 수가 '2'인지 확인한다. 
 2. 위 조건에 부합하는 경우, '02'를 포함한 전체 전화번호 자릿 수가 10자리가 아닌 경우 '["서울", "X"]'를 반환한다.
 3. 마지막으로 전화번호 뒷 4자리를 확인하는데, 4자리 모두 같은 숫자라면 위 조건과 마찬가지로 '["서울", "X"]'를 반환한다.
 4. 2번과 3번 조건에 해당하지 않는 경우, '["서울", "O"]'를 반환한다. 


 ### 휴대폰 번호 판단 조건 정리
1. 먼저 조건문으로 전화번호의 두번째 자리 수가 '1'인지 확인한다. 
2. 전화번호 앞 3자리가 주어진 map 객체에 존재하지 않으면 failure["전국", "X"]를 반환한다. 
3. 전화번호가 [ 011, 016, 017, 018, 019 ] 중 하나로 시작한다면 '["휴대폰", "X"]'를 반환한다. 
4. 전화번호가 11자리이고, 중간 4자리중 첫번째 수가 [ 0, 2, 4, 6, 8 ]중 하나일 경우 ["휴대폰", "O"] 반환
5. 2-4번 조건에 해당하지 않으면 휴대폰으로 인정하지 않는다. 


### 그 외의 지역 번호 판단 조건 정리
1. 전화번호 앞 세자리가 map 객체에 존재하는지 확인한다. 없다면 failure["전국", "X"] 반환.
2. **'해당 지역'에 들어갈 지역명은 map[top]으로 결정된다. [top : 전화번호 앞 세자리]**  
전화번호가 10자리인 경우, 중간번호가 0으로 시작한다면 '["해당 지역", "X"]'를 반환하고, 그렇지 않으면 '["해당 지역", "O"]'를 반환한다. 
3. 9, 11자리 전화번호의 경우, 앞 세자리 번호가 map 객체의 속성으로 존재하면 '["해당 지역", "O"]'를 반환한다. 


## 디버깅 과정
- 먼저 코드를 복사해 돌려 보았는데, 올바르게 입력된 전화번호들도 'failure'가 반환되는 것을 볼 수 있었다. 개선 요구 사항에도 표기되어 있듯이 '-'가 입력되어도 정상적으로 로직이 수행되어야 한다. 코드를 고치기 전 먼저 로직을 분석할 필요가 있어 보였다. 
함수의 인자로 들어 오는 데이터가 어떻게 로직내에서 사용되는지 알아야, 이 로직이 훼손되지 않는 선에서 기능을 잘 추가 할 수 있을 것이기 때문이다. 
- 인자로 넘어온 문자열을 'const tel'이라는 상수에 값을 담는다. 즉 이 변수 이후부터는 전화번호를 호출만 가능할 뿐, 내부 값이 변경되는 로직을 수행할 수는 없다. 그렇다면 이 변수가 선언되기 전에 전화번호에 포함되어 있는 '-' 기호를 없애고, 해당 변수에 수정된 문자열을 할당하면 첫번째 문제가 해결될 것 같았다. 
- 이후부터는 함수내에 선언되어 있는 변수와 객체, 조건문들을 해석해 예전 개발자가 의도를 파악했다. 주석으로 각 라인이 어떤 작업을 도출해 내는지 간단하게 적어 놓은 후 필요한 로직을 구현하기 시작했다. 참고로 코드 구현을 끝낸후에는 보기에 복잡해지지 않게 일부 주석들은 README 파일에 옮겨 적었다. 
- 가장 먼저 입력된 전화번호에 포함된 '-'를 제거할 필요가 있다. 많은 방법들이 있겠지만 현재로서 내가 생객해 낸것은 문자열을 '-'를 기준으로 분리하여 배열에 담고 새로운 빈 문자열에 각 요소를 하나씩 더하는 방법이다. 언어 자체를 접한지 얼마 되지 않았기 때문에 다른 방법들이 잘 떠오르지 않았다. 다른분들의 코드를 보고 정말 다양한 방법으로 이 문제를 해결할 수 있다는 것을 깨달았고, 그분들이 작성한 코드를 보면서 최대한 '내것'으로 만들려고 노력했다. 
- 두번째로는 '국제 번호 추가' 로직이다. 이 로직을 구현하기까지는 시간이 오래 걸리진 않았다. 다만 코드 구현 위치에 대해 약간 고민했는데, 그 결과 '전화번호 DEFAULT 조건' 로직 전에 구현하기로 결정했다. 이렇게 한 이유는 국제번호의 길이 때문이다. 요구사항에서 국제번호는 앞 세 자리 포함 11자리에서 15자리이다. 만약 '전화번호 DEFAULT 조건' 이후에 코드를 작성한다면 
    <pre> 
    if (tel.length > 11 || tel.length < 9) return failure;
    </pre>
이 부분에서 코드가 막혀 국제 번호 판단 로직까지 오지도 못할 것이다. 따라서 국제번호 로직을 가장 윗 부분에 위치하도록 했다. 
- 이후에는 정상적으로 코드가 실행되는 지 확인했고, 추가된 부분에 대한 출력 코드도 작성해 주었다. 이로써 나의 첫번째 미션을 무사히 잘 마쳤다.