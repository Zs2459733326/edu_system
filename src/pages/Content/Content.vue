<template>
  <div id="context">
    <Title />
    <hr />
    <div id="main">
      <!-- 触发 路由切换的代码在 此组件中 -->
      <Navigation />
      <!-- 实现 导航路由组件显示的代码 在此组件中 -->
      <DataShow />
    </div>
      <!-- 底部 版权信息 -->
    <Copyright />
  </div>
</template>

<script>
import Title from "../../components/Content/Title.vue";
import Navigation from "../../components/Content/Navigation.vue";
import DataShow from "../../components/Content/DataShow.vue";
import Copyright from "../../components/Content/Copyright.vue";

export default {
  name: "Context",
  components: {
    Title,
    Navigation,
    DataShow,
    Copyright,
  },
};
</script>

<style scoped>

</style>