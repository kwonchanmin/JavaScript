
function searchBtn() {
    // 날짜를 가져와서 AJAX를 호출하면 된다.
    $.ajax({
        async : true,
        url : 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
        type : 'GET',
        timeout : 3000, // 천분의 1초 단위로 초를 적는다. ajax를 호출한 뒤 3초만 기달리고 결과가 리턴이 안되면 실패했다고 해주는거다. 이걸 안걸어주면 계속 기다리기 때문에 
        // timeout을 걸어주는게 일반적이다. 
        data : {
            key :'6e32c1eecd679c968eec7ee87f533a98',
            targetDt : ($('[type=date]').val()).replace(/-/g,'') // YYMMDD형식으로 변경해야된다. 지금은 YY-MM-DD로 입력되고 있기 때문이다.
            // 문자열 전환은 replace를 사용하며 -는 문자열이 아니기 때문에 //를 사용한 것이고 ''의 의미는 -를 공백으로 바꾸라는 의미이다.
            // str.replace(/AB/g, ''); 
            // 파라미터로 정규식을 전달하여 문자열에 존재하는 모든 'AB' 문자열을 공백으로 변환하여 삭제하였습니다.
            // 'AB' 문자열 앞뒤의 '/'는 정규식의 시작과 끝을 나타냅니다.
            // '/'뒤의 'g'는 'Global Search'를 의미하는 플래그입니다.
            // 'g' 플래그는 전역 탐색, 즉 전체 문자열을 탐색 하도록 합니다.
        },
        dataType : 'json', // 이것은  default값이 json이기 때문에 안써줘도 무방하다.
        success : function(data) {
            $('tbody').empty(); // 새로 검색을 하면 이전에 만든거는 없어지고 새로 만들어준다.
            // 성공하면 당연히 서버는 결과값을 JSON 문자열로 전달한다.
            // 그러면 이 문자열을 받아서 문자열을 분석해서 결과처리를 해야된다.
            // 이 JSON 문자열 처리가 쉽지 않다. -> 이걸 객체로 변경해서 우리한테 함수의 인자로 전달해준다.
            // 이 JSON을 분석해야된다.
            let arr = data.boxOfficeResult.dailyBoxOfficeList;
            // 배열안의 각 요소에 대해서 함수를 호출(Callback)한다.
            $.each(arr,function(idx,item) {
                 // idx : 반복할 때마다 숫자가 증가하 index값
                 // item : 반복할 때마다 추출되는 배열안에 있는 원소
                 // data를 정상적으로 가져올 수 있으면 이젠 이걸가지고 화면처리를 하면 된다.
                 // 태그를 만들어 보자.
                 let tr = $('<tr></tr>'); // <tr></tr>
                 let ranktd = $('<td></td>').text(item.rank); //<td>1</td>
                 let postertd = $('<td></td>');
                 let posterimg = $('<img />');
                 
                 // 이미지를 가져오기 위한 AJAX를 호출해야 된다.
                 $.ajax({
                    async : true,
                    url : 'https://dapi.kakao.com/v2/search/image',
                    type : 'GET',
                    data : {
                        query : item.movieNm + '포스터'
                    },
                    headers : {    // 인증에 대한 정보를 작성하는 코드는 headers다. 웹상에서 보면 -H로 작성되있다.
                        Authorization: 'KakaoAK 0b5d171371beef2d526a7ae4a14a3eed'
                    },
                    success : function(data){
                       let imgurl = data.documents[0].thumbnail_url;
                       // 클로저의 특성을 이용해서 posterimg의 링크를 유지하고 있다.
                       posterimg.attr('src',imgurl);
                    },
                    error : function() {
                        alert('이미지 검색 실패')
                    }

                 });
                 
                 let titletd = $('<td></td>').text(item.movieNm);
                 let auditd =$('<td></td>').text(item.audiCnt);
                 let opentd = $('<td></td>').text(item.openDt);
                 let deltd = $('<td></td>');
                 let delBtn = $('<button></button>').text('삭제').addClass('btn btn-danger');
                 tr.append(ranktd);
                 tr.append(postertd);
                 postertd.append(posterimg);
                 tr.append(titletd);
                 tr.append(auditd);
                 tr.append(opentd);
                 tr.append(deltd);
                 deltd.append(delBtn);
                 // 삭제버튼에 클릭이벤트에 대한 이벤트핸들러를 등록해준다.
                 delBtn.click(function() {
                    // jQuery event 처리방식에서 이벤트핸들러에 this가 등장하면 
                    // 이 this는 event source 문서객체를 지칭한다.
                    $(this).parent().parent().remove();
                 })
                 $('tbody').append(tr);

            })
        },
        error : function() {
            alert('실패')
        }
    });

    // 그런데 지금 클릭한게 <a>이다. <a>는 default event를 가지고 있다.
    // 그래서 default evnet를 막아줘야된다.
    event.preventDefault();
}