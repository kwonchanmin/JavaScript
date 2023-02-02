<template>
    <div class="text-bg-dark">
        <a href="#" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-1" style="color: yellow;" v-on:click="reLoad">Movie BoxOffice Rank</span>
        </a>
        
    </div>
</template>

<script>
export default {
    methods:{
        reLoad() {
            lacation.reload();
        }
    }
}
</script>

<style scoped>

</style>
