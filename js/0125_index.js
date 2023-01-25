
let result = $.ajax({
    async: true, // 동기와 비동기를 나타낸다. async 자체가 비동기를 나타낸다. true면 비동기 false면 동기 ,
    //ajax는 기본이 비동기 이다. 동기로 놓고 돌리면 브라우져화면이 ajax 코드가 끝날 때까지 흰 화면으로 나타내는 문제점이 생긴다. 
     url : '캬캬',
    type : 'get',
    data : {} ,
    success: function(){
        // 이 코드가 1분뒤에 호출될지 2분뒤에 호출될지 알 수가 없다.
    }
});

let result2 = $.ajax({
    url : '호호',
    type : 'get',
    data : {} ,
    success: function(){
        // 이 코드가 1분뒤에 호출될지 2분뒤에 호출될지 알 수가 없다.
    }
});
// ajax호출을 해서 서버쪽 프로그램이 실행되고 그 결과가 우리에게 
// json으로 보내지게 되는데 당연히 시간이 걸린다.
// 그런데 그 시간을 기다리지 않는다.
// 그래서 ajax 호출은 바로 리턴된다. 당연히 리턴되는 값은 ajax함수의 리턴값이 아니다.
// 결과는 어떻게 받는가?
// event driven 방식으로 결과를 받는다.

alert('경고창이다');

// 대표적인 blocking 함수다.
// 함수의 작업이 끝날 때까지 (결과가 리턴될때까지)
// 함수를 호출한 곳에서 프로그램의 수행이 일시 중지되는 함수.