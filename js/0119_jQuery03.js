
function myFunc() {
    // console.log($('ul > li').text()); 
    $('ul>li').each(function(idx,item) {
        // idx = 순번 (0부터 1씩 증가)
        // item : 현재 사용되는 문서객체 (document opbject)
        // .text() 앞에는 jQuery객체가 나와줘야된다.
        console.log($(item).text()); // li가 내용물이 많고 하나씩 출력하고 싶을 때 이렇게 작성해주면 하나씩 따로 따로 출력이 가능해진다. 
        // each는 for 문과 같은 반복문이다. 
    });
}

function removeBtn() {
    // $('button[disabled]').removeAttr('disabled'); // []를 사용하면 그 안에있는 속성을 가진 button을 찾는 것이다.
    
    // 밑에있는 코드는 속성의 값을 알아내라 는 의미다.
    // alert($('button[disabled]').attr('data-author')); // attr은 속성을 알아내거나 변경할 때 사용한다.
    
    //속성의 값을 변경하라는 의미다. 인자를 2개를 주면 변경
    $('button[disabled]').attr('data-author','신사임당');
}