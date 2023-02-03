<template>
    <div>
        <div class="px-3 py-2 border-left mb-0 text-bg-dark">
              <div class="container d-flex flex-wrap jestify-content-center">
                <form class="col-12 d-flex" role="search">
                  <input type="date" v-model="searchDate" class=" form-control" placehodler="search" aria-label="search" >
                  <button type="button" class="col-1 btn btn-outline-light" @click="movieFunc">검색</button> 
                </form>
              </div>
            </div>
       <!-- Modal -->
    <div class="modal" id="moviemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-dark bg-white">{{ detailInfo.movieNm }} </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>
              <div>
                <div class="text-dark bg-white"> 제작년도 :{{ detailInfo.prdtYear }}</div>
              </div>
              <div v-for="nation in detailInfo.nations" :key="nation.nationNm">
                <div class="text-dark bg-white"> 제작국가 :{{ nation.nationNm }}</div>
              </div>
              <div v-for="director in detailInfo.directors" :key="director.peopleNm">
                <div class="text-dark bg-white"> 감독 :{{ director.peopleNm }}</div>
              </div>
              <div v-for="actor in detailInfo.actors" :key="actor.peopleNm">
                <div class="text-dark bg-white"> 배우 :{{ actor.peopleNm }}</div>
              </div>
              <div class="text-dark bg-white"> 상영시간 :{{ detailInfo.showTm }}</div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


        <div class="px-3 py-2 text-bg-white text-bg-dark" align="right">
          <button type="button" class="btn btn-danger" v-on:click="selDelete">선택삭제</button>
        </div>
    <div class="table-responsive text-bg-dark">
      <table class="table table-striped table-sm table table-bordered table table-light table table-hover">
        <thead>
          <tr>
            <th scope="col" class="text-center">선택</th>
            <th scope="col" class="text-center">순위</th>
            <th scope="col" class="text-center">포스터</th>
            <th scope="col" class="text-center">제목</th>
            <th scope="col" class="text-center">관람객 수</th>
            <th scope="col" class="text-center">개봉일</th>
            <th scope="col" class="text-center">삭제</th>
          </tr>
        </thead>
        <tbody class="text-bg-dark">
          <tr v-for="item in list" :key="item.rank" class="table table-dark">
            <td><input type="checkbox" :value=item.movieNm v-model="checklist"></td>
            <td class="text-center">{{ item.rank }}</td>
            <td><img v-bind:src="imgurl[item.rnum - 1]" /></td>
            <td class="text-center"> <a href="#" data-bs-toggle="modal" data-bs-target="#moviemodal"
                v-on:click="searchInfo(item.movieCd)">{{ item.movieNm }}</a> </td>
            <td class="text-center">{{ item.audiAcc }}</td>
            <td class="text-center">{{ item.openDt }}</td>
            <td><button type="button" class="btn btn-danger" v-on:click="removeRow(item.rank)">삭제</button></td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
    
</template>

<script>


export default{
    data() {
        return {
            list : [],
            searchDate : '',
            imgurl:[],
            checklist : [],
            detailInfo : []
        }
    },
    methods:{
        movieFunc() {
           let cmp = this;
            axios({
                url:'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
                method:'GET',
                params: {
                    key:'6e32c1eecd679c968eec7ee87f533a98',
                    targetDt:this.searchDate.replace(/-/g,'')
                }
            })
            .then(res => {
                cmp.list= res.data.boxOfficeResult.dailyBoxOfficeList;
                console.log(cmp.list);
                let img = this;
              cmp.list.forEach(function (item, idx) {  
                axios({
                  url: 'https://dapi.kakao.com/v2/search/image',
                  method: 'GET',
                  params: {
                    query: item.movieNm + '포스터'
                  },
                  headers: {
                    Authorization: 'KakaoAK 0b5d171371beef2d526a7ae4a14a3eed'
                  }
                })
                  .then(function (result) {
                    Vue.set(img.imgurl, idx, result.data.documents[2].thumbnail_url); 
                  })
                  .catch(function (err) {
                    console.log(err)
                  })
              });


            })
            .catch(function(err){
                console.log(err);
                alert('날짜 고를줄 모르냐?')
            })
        },
        removeRow: function (rank) {
          this.list = this.list.filter((e) => e.rank !== rank);
          this.checklist = [];
        },
        selDelete: function () {
          this.list = this.list.filter(
            (item) => !this.checklist.includes(item.movieNm)
          );
          this.checklist = [];
        },
        searchInfo: function (movieCd) {
          let esc = this;
          axios({
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
            method: 'GET',
            params: {
              key: '6e32c1eecd679c968eec7ee87f533a98',
              movieCd: movieCd
            },
            responseType: 'json' // 기본값
          })
            .then(function (res) {
              esc.detailInfo = res.data.movieInfoResult.movieInfo
            })
            .catch(function (err) {
              console.log(err)
            })
        },
        reLoad: function () {
          location.reload();
        }

      }
    }

</script>

<style>
.right {
    float: right;
}
</style>