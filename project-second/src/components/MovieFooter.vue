<template>
    <div class="px-3 py-2 text-bg-white text-bg-dark" align="center">
              <button type="button" class="btn btn-danger " v-on:click="selDelete">선택삭제</button>
            </div>
</template>

<script>
export default {
    methods :{
        selDelete(){
            this.list = this.list.filter(
            (item) => !this.checklist.includes(item.movieNm)
          );
          this.checklist = [];
        }
    }
}
</script>

<style scoped>

</style>
