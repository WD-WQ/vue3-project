<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="layout_container">
    <div class="layout_slider">123</div>
    <div class="layout_tabbar">456</div>
    <div class="layout_main">
      <p style="height: 10000px; background-color: red;"></p>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.layout_container{
  width: 100%;
  height: 100vh;
}
.layout_slider{
  width: 20%;
  height: 100vh;
  background-color: #001529;
}
.layout_tabbar{
  position: fixed;
  right: 0;
  top: 0;
  width: 80%;
  height: 10%;
  background-color: blue;
}
.layout_main{
  box-sizing: border-box;
  position: fixed;
  overflow: auto;
  width: 80%;
  height: 90%;
  bottom: 0;
  right: 0;
  padding: 20px;
  background-color: pink;
}
</style>