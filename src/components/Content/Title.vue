<template>
  <div id="title">
    <img src="http://59.77.64.250/logo/logo_school.png" alt="学校名称" />
    <img
      src="http://59.77.64.250/logo/logo_jw.png
"
      alt="教务管理系统"
    />
    <ul>
      <li>欢迎您：XXX 同学 <a href="javascript:;">退出</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Title'
};
</script>

<style scoped>
#title {
  position: relative;
  width: 100%;
  height: 105px;
  overflow: hidden;
  background-color: #fff;
}
#title img:nth-of-type(2) {
  position: absolute;
  top: 4px;
}
#title ul {
  position: absolute;
  top: 44px;
  right: 10px;
}
</style>