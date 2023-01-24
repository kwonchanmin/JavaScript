

function myFunc() {
    // 버튼을 누르면 kakao 이미지 검색을 해서 그중 첫번째 이미지를 이용해서 DIV에 붙일꺼다.
    // 영화진흥위원회 OPEN API 사용한 것처럼

    $.ajax({
        async : true,
        url : 'https://dapi.kakao.com/v2/search/image',
        type : 'GET',
        headers : {
            Authorization: 'KakaoAK 0b5d171371beef2d526a7ae4a14a3eed'
        },
        data : {
            query : '아바타2'
        },
        dataType : 'json',
        success : function(data) {
            let arr = data.documents;
            $.each(arr,function(idx){
                let imgurl = arr[0].thumbnail_url;
                let myImg = $('<img/>').attr('src',imgurl);
            $('div').append(myImg); 
            })
        },
        error() {
            alert('뭔가 이상해')
        }
    });
}