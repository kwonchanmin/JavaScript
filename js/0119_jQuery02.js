
// event handler
function myMouseEnter() {
    // 1. event가 발생한 객체를 찾아야된다.
    // $(event.target).css('color','white');
    // $(event.target).css('background-color','black')
    $(event.target).addClass('myEnterStyle');
}

function myMouseLeave() {
    // $(event.target).css('color','black');
    // $(event.target).css('background-color','white')
    $(event.target).removeClass('myEnterStyle');
}

function myFunc() {
    alert('버튼 눌렸다');
}

function secondFunc() {
    alert('DIV 눌렸다.')
}