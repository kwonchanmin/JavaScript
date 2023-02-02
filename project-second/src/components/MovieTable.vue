<template>
 <div class="table-responsive">
      <table class="table table-striped table-sm table table-bordered table table-light table table-hover">
        <thead>
          <tr>
            <th scope="col" class="text-center">순위</th>
            <th scope="col" class="text-center">제목</th>
            <th scope="col" class="text-center">관람객 수</th>
            <th scope="col" class="text-center">개봉일</th>
          </tr>
        </thead>
        <tbody class="text-bg-dark">
          <MovieRow :item="item" v-for="item in list" :key="item.rank" class="table table-dark" />

        </tbody>
      </table>
    </div>   
</template>

<script>
import MovieRow from './MovieRow.vue'

export default {
    components : {
        MovieRow
    },
    props:{
        list : Array,
        imgurl : Array
    }
}
</script>

<style scoped>

</style>
