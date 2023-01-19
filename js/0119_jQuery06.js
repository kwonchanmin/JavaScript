
// document라는 javascript가 제공하는 문서객체가 있다.
// document는 DOM을 지칭하는 문서객체다.
// document가 준비되었다는 의미는 DOM객체가 만들어졌다는 의미이고
// browser가 HTML을 모두 읽어서 파싱까지 끝냈다는 의미
// 즉, 그 시점 browser가 HTML을 모두 읽은 시점을 의미
// 이런 코드가 워낙 많이 사용된다.
// $(document).ready(function() {
    
//     $('ul>li').click(function() {
//         alert('안녕하세요쿠르트')
//     })
// }) 
// 축약으로 $() 이렇게 표현하고 이게 document.ready다.
// $(function() {
    
//     $('ul>li').click(function() {
//         // 만약 jQuery event처리에서 event handler안에서 this가 나오면
//         // event source에 대한 문서객체(document object)
//         alert($(this).text()); // 내가 원하는 문서객체에 대한 걸 뽑고 싶을 때 사용
//     })
// })

// this의 의미는 크게 3가지로 나타낼 수 있다.
// 1. 일반함수에서 this => window 객체(전역객체)
// 2. 객체에 함수로써 this => 함수를 호출한 객체를 지칭
// 3. 생성자함수에서 this => 생성자 함수가 생성하는 객체를 지칭

function myFunc() {
    alert('진짜 갈래???');
    // default event를 처리하지 않으려면 
    event.preventDefault(); // default event를 안 일어나게 하는 코드
}