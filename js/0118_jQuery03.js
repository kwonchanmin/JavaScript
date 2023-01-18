function myFunc() {
    // check가 된 checkbox부터 찾아보자.
    console.log($('[type=checkbox]:checked + span').text());  // 타입이 체크박스이고 체크된것만 다 찾아서 보여봐라
}