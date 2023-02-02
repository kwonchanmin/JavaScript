<template>
    <tr>
            <td class="text-center">{{ item.rank }}</td>
            <td class="text-center"> <a href="#" data-bs-toggle="modal" data-bs-target="#moviemodal"
                v-on:click="searchInfo(item.movieCd)">{{ item.movieNm }}</a> </td>
            <td class="text-center">{{ item.audiAcc }}</td>
            <td class="text-center">{{ item.openDt }}</td>
          </tr>
</template>

<script>
export default {
    props :{
        item : Object
    },
    methods:{
      
    }
   
   
}
</script>

<style scoped>

</style>
