
// 함수선언문 - event handler
function myFunc() {
    
    // JQuery를 이용해서 AJAX 호출
    // ajax()함수를 이용해서 호출한다.
    // 그런데 호출할 때 여러가지 정보를 넣어야된다.
    // 여러가지 정보를 객체literal 이용해서 객체로 만들어서 인자로 전달.
    $.ajax({
        // url: AJAX 호출할 서버쪽 프로그램 URL
        url:'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        // async:비동기방식으로 호출할 것인지 동기방식으로 호출할 것인지 여부
        // 기본값은 true다. 그런데 비동기는 뭔가?
        async: true,
        // 서버쪽 프로그램에게 전달할 데이터를 명시한다. 여러개의 데이터를 일반적으로 전달하기 때문에 객체를 이용한다.
        data:{
            key:'6e32c1eecd679c968eec7ee87f533a98',
            targetDt:'20230119'
        },
        //type은 AJAX호출의 방식으로 GET, POST를 명시하면 된다.
        type: 'GET',
        // 호출 결과를 어떤 데이터 형식으로 받을 지를 설정
        // default 값이 json이다.
        dataType: 'json',
        // 이런 내용을 가지고 호출하면 결국 둘중에 하나다 성공하던가 에러가 나던가.
        // 만약 성공하면 서버가 보내준 JSON문자열을 jQuery가 Javascript객체로 변환
        // 그리고 그 객체를 success의 함수의 인자로 전달
        success:function(data) {
            
            let arr = data.boxOfficeResult.dailyBoxOfficeList;
            $.each(arr,function(idx){
                let rank = arr[idx].rank
                let title = arr[idx].movieNm;
                let audi = arr[idx].audiCnt;
                let openDt = arr[idx].openDt;
                let tr = $('<tr></tr>');
                let checkbox = $('<input type="checkbox"/>')
                let ranktd = $('<td></td>').text(rank);
                let titletd = $('<td></td>').text(title);
                let auditd = $('<td></td>').text(audi);
                let openDttd = $('<td></td>').text(openDt);
                let btntd = $('<td></td>')
                let deleteBtn = $('<button class="btn btn-danger" onclick="deletebtn()" >삭제</button>');
                tr.append(checkbox);
                tr.append(ranktd);
                tr.append(titletd);
                tr.append(auditd);
                tr.append(openDttd);
                tr.append(btntd);
                btntd.append(deleteBtn);
                $('tbody').append(tr);
            })
        },
        error:function() {
            console.log('뭔가 이상해');
        }
    })
    
}

function deletebtn() {
   
        $('[type=checkbox]:checked').each(function(idx,item){
            $('td').parent().prop('tr').remove()
        })
    
}
