// 함수 선언문
function myFunc() {
   console.log($('#apple').text());
   console.log($('#apple +li').text());
   console.log($('ul > li.myList').text());
   console.log($('form > input').attr('id'));
   console.log($('ol > li:first').text());
   console.log($('ol > li:first + li').text());
   console.log($('ol > li:last').text());
}