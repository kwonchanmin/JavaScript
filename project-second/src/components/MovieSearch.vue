<template>
    <div>
        <input type="date" v-model="searchDate"  placehodler="search" aria-label="search">
        <button type="button" @click="myFunc">검색</button> 
        <hr>
    </div>
</template>

<script>
import MovieTable from '../components/MovieTable.vue'

export default {
    components:{
        MovieTable
    },
    data() {
        return {
        list: [],
        imgurl: [],
        searchDate: '',
        }
    },
    methods: {
    myFunc: function () {
          // Axios를 이용한 AJAX 호출
          let cmp = this;
          axios({
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            method: 'GET',
            // JQuery에서는 data를 통해 정보를 넘겨줬는데 Vue 에서 data는 POST,PUT,DELETE 메소드 방식에만 적용이 가능
            // Vue 에서는 params가 URL parameter를 치징한다. Query String으로 전달되는 데이터를 의미하며 당연히 GET방식
            // JQuery:data = Vue:params
            params: {
              key: '6e32c1eecd679c968eec7ee87f533a98',
              targetDt: this.searchDate.replace(/-/g, '')
            },
            responseType: 'json' // 기본값
          })
            .then(res => {  // .then = 성공했을 때 호출
              cmp.list = res.data.boxOfficeResult.dailyBoxOfficeList;
              localStorage.setItem(this.list,this.list)
              this.list=[]
              console.log(cmp.list)
                
            })
            .catch(function (err) { // .catch() = 실패했을 때 호출
              console.log(err)
              alert('날짜 고를 줄 모르냐?')
            });
        },
   }
}
</script>

<style scoped>

</style>
