<template>
  <div id="app" class="text-bg-dark">
    <MovieHeader></MovieHeader>
    <MovieSearch></MovieSearch>
    <MovieTable></MovieTable>
    <MovieRow></MovieRow>
    <MovieFooter></MovieFooter>
  </div>
</template>

<script>
import MovieHeader from './components/MovieHeader.vue';
import MovieSearch from './components/MovieSearch.vue';
import MovieTable from './components/MovieTable.vue';
import MovieRow from './components/MovieRow.vue';
import MovieFooter from './components/MovieFooter.vue';


export default {
   components:{
    MovieHeader,
    MovieSearch,
    MovieTable,
    MovieRow,
    MovieFooter
   }
}
</script>


<style>
body {
    text-align: center;
    background-color: #F6F6F8;
}

input {
    border-style: groove;
    width: 200px;
}

button {
    border-style: groove;
}

.shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
}
</style>
