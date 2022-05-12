<template>
  <div class="main">
    <img src="http://59.77.64.250/logo/logo_school.png" alt="学校名称" />
    <!--  -->
    <login-test/>
  </div>
</template>

<script>
import LoginTest from "../../components/Login/LoginTest.vue";
export default {
  name: "Login",
  components: {
    LoginTest,
  },
};
</script>

<style scoped>
/* 此操作可以在 不操作 DOM 的情况下，实现单个路由组件的全屏背景设置 */
.main {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../../public/3bvqbtnzn0.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom center;
}
</style>