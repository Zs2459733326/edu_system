<template>
  <div id="nav">
    <el-row class="tac">
      <el-col style="width: 200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
        >
          <!-- 首页 -->
          <el-menu-item index="1" @click=" $router.replace({name:'home'})">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!-- 网上选课 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>网上选课</span>
            </template>
            <el-menu-item index="2-1" @click="$router.replace({name:'StudentSelectingCourses'})">学生选课</el-menu-item>
            <el-menu-item index="2-2">选体育课</el-menu-item>
            <el-menu-item index="2-3">重修报名</el-menu-item>
            <el-menu-item index="2-4">全校性选修课</el-menu-item>
            <el-menu-item index="2-5">学生院系选修课</el-menu-item>
            <el-menu-item index="2-6">转专业申请</el-menu-item>
          </el-submenu>
          <!-- 活动报名 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>活动报名</span>
            </template>
            <el-menu-item index="3-1">学科竞赛</el-menu-item>
            <el-menu-item index="3-2">网上报名</el-menu-item>
          </el-submenu>
          <!-- 教学质量评价 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>教学质量评价</span>
            </template>
            <el-menu-item index="4-1">暂无资源</el-menu-item>
          </el-submenu>
          <!-- 信息维护 -->
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>信息维护</span>
            </template>
            <el-menu-item index="5-1">个人信息</el-menu-item>
            <el-menu-item index="5-2">密码修改</el-menu-item>
            <el-menu-item index="5-3">辅修报名</el-menu-item>
          </el-submenu>
          <!-- 信息查询 -->
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>信息查询</span>
            </template>
            <el-menu-item index="6-1">专业推荐课查询</el-menu-item>
            <el-menu-item index="6-2">学生个人课表</el-menu-item>
            <el-menu-item index="6-3">学生选课情况查询</el-menu-item>
          </el-submenu>
          <!-- 毕业设计 -->
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>毕业设计</span>
            </template>
            <el-menu-item index="7-1">查看公告</el-menu-item>
          </el-submenu>
          <!-- 公共信息查询 -->
          <el-submenu index="8">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>公共信息查询</span>
            </template>
            <el-menu-item index="8-1">机构设置</el-menu-item>
            <el-menu-item index="8-2">管理文件</el-menu-item>
            <el-menu-item index="8-3">教学计划查询</el-menu-item>
            <el-menu-item index="8-4">教室借用</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'Navigation',
  methods:{

  }
};
</script>

<style scoped>
#nav {
  position: fixed;
  width: 230px;
  height: 100%;
  box-shadow: 1px 19px 9px 0px #409eff;
  box-sizing: border-box;
  background-color: #fff;
  overflow: auto;
}
ul {
  border: 0px;
}
</style>