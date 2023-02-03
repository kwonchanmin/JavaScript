<template>
  <div id="app">
    <MovieHeader></MovieHeader>
    <MovieSearch></MovieSearch>
  </div>
</template>

<script>
import MovieHeader from './components/MovieHeader.vue';
import MovieSearch from './components/MovieSearch.vue';



export default {
   components:{
    MovieHeader,
    MovieSearch,
   }
}
</script>

