<template>
     <div class="px-3 py-2 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center ">
          <a href="#" class="d-flex align-items-center text-white text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
              <use xlink:href="#bootstrap"></use>
            </svg>
            <span class="fs-1" style="color: yellow;" v-on:click="reLoad">Movie BoxOffice Rank</span>
        </a>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    methods:{
        reLoad: function () {
          location.reload();
        }

    }
}
</script>
