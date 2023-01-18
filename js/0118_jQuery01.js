// alert('소리없는 아우성')
// blocking 함수 

// 함수선언문으로 만든 일반함수
function myFunc() {
    // jQuery를 이용해서 먼가 작업을 수행해 보자.
    // 1. 전체 선택자(Universal seletor) => *
    // $('*').css('color','red ') // 모두 다 선택하라는 의미. (body 내에 있는 모든 element를 다 선택하라는 의미)
    // 2. 타입 선택자 (Type selector) => tag명
    // $('li').remove();
    // 3. 아이디 선택자 (ID selector) => id명으로 선택
    //    모든 tag에는 id라는 속성이 붙을 수 있다.
//    let name = $('#gang').text(); // #이 나오면 무조건 id 선택자이다.  text()는 tag사이에 있는 값을 알아낼 수 있다.
//         console.log(name);
    // 4. 클래스 선택자(Class selector) => class명으로 선택 => .
    //      모든 tag에는 class라는 속성이 붙을 수 있다.
    //      class의 값은 중복을 허용한다.
    //      이 class속성은 원래 무슨 일을 하는 속성인가요??
    //      기본적으로 style을 지정할 때 사용하는 속성이다.
    // $('.myClass').css('background-color','yellow') // class의 속성값이 myClass 인걸 찾아서 
    // 5. 구조 선택자(자식선택자와 후손선택자)
    //     자식 선택자는 기호를 >를 이용하고 그리고 다른 selector와 혼합해서 사용
    //      text()는 값을 알아내는 method다.
    //      text('변경할 값)는 값을 변경하는 method
    //  $('div > div').text('소리없는 아우성')  
    //      후손 선택자는 공백을 이용한다.
    // $('div li').remove();
    // 6. 동위선택자( +, ~)
   //  + : 바로 뒤에 나오는 형제를 치칭
    //  ~ : 내 뒤에 나오는 형제 모두를 지칭
    //    alert($('#gang + li').text());
    // $('#shin ~ *').remove();
    // 7. 속성선택자 : 속성가지고 찾을 수 있다. => []
    // console.log($('[type]').attr('value')); 
}


// jQuery의 기본 사용 방법
// 1. 기본 사용법
//    $("selector").method()
//    selector : CSS에서 사용하는 특수한 표기법이 나온다.
//    $('h1')  h1 element를 찾으라는 의미
//    method : jQuery에서 정해져 있는 method로 특수한 기능을 수행
// 2. 또 다른 사용법
//    $