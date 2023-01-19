
function innerFunc() {
    alert('클릭했네?');
    event.stopPropagation(); // 상위 tag인 div에게 전파가 되야 하지만 그걸 막는 코드 
}

function outerFunc() {
    alert('Div 클릭했네?');
}