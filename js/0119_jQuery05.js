
function myFunc() {
    // 새로운 element를 jQuery로 만들자
    // $('<li></li>').text('이순신').attr('id','myID').addClass('myStyle') // <li></li>를 실제로 만드는 방법이다. 
    // 위에서 만든 결과값: <li id="myID" class="myStyle">이순신</li>
    // let li =  $('<li></li>').text('이순신');
    //<li>이순신</li>
    // 이렇게 만들어진 jQuery객체를 내가 원하는 곳에 부착할 수 있다.
    // 사용하는 method는 4가지가 있다.
    // 1. append() : 자식으로 붙이고 제일 마지막 자식으로 붙인다.
    // $('ul').append(li);
    // 2. prepend() : 자식으로 붙이고 제일 앞에 자식으로 붙인다.
    //    $('ul').prepend(li);
    // 3. before() : 형제로 붙이고 앞에 붙인다.
        // $('ul>li:last').before(li);
    // 4. after() : 형제로 붙이고 바로 다음에 붙인다.
    //  $('ul>li:first').after(li);

    // 새로운 이미지를 만들어 보자.
    // <img src="./image/삼겹살.jpeg">
    // let myImg = $('<img />').attr('src','./image/삼겹살.jpeg')  // <img>
    // $('ul').after(myImg);
}

function addHandler() {
    // 1. eventHandler를 붙일 element를 찾아보자.
    //  그 다음에 이벤트 핸들러를 특정 이벤트에 등록해요!
    // $('ul>li:last').on('click', function() {
    //     console.log('강감찬 소환!!!!!!!!!!!!!!!');
    // })
    // 위의 형태가 기본이다. 이걸 축약해서 써보자.
//     $('ul>li:last').click(function() {
//         console.log('강감찬 소환!!!!!!!!!!!!!!!');
//     })
    // 이벤트는 이렇게 jQuery로 등록하고 사용하는 방식으로
    // HTML에 이벤트 처리내용이 나오지않고 모두 Javascript code로 표현한다.

    // 마지막으로 주의해 할 점 2가지만 더 하고 event에 대한 애기를 정리해보자.
    
}