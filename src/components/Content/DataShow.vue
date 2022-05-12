<template>
  <div id="dataShow">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "DataShow",
};
</script>

<style scoped>
#dataShow {
  position: fixed;
  width: 82%;
  height: 100%;
  left: 250px;
  background-color: #fff;
  box-shadow: 1px 19px 9px 0px #409eff;
}
</style>