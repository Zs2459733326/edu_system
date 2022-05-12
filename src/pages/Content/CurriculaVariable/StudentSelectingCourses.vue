<template>
  <div id="StudentSelectingCourses">
    <!-- 学生个人基本信息 -->
    <div id="studentData">
      <p>
        <span>学号：2019036544</span>
        <span>姓名：墨竹</span>
        <span>学院：数学与信息工程学院</span>
        <span>行政班：191</span>
      </p>
      <p>
        <span>2021-2022 学年第 2 学期选课</span>
        <span>
          年级：
          <select>
            <option value="">2019</option>
          </select>
        </span>
        <span> 已选课程：<input type="text" /></span>
      </p>
    </div>
    <!-- 课程列表 -->
    <div id="coursesList">
      <!-- 数据 -->
     <CoursesList/>
      <!-- 操作 -->
      <div id="handle">
        <el-button >快速选课</el-button>
        <el-button >本专业课</el-button>
        <el-button >选修课程</el-button>
        <el-button >跨专业选课</el-button>
        <el-button >特殊课程</el-button>
        <el-button >选体育课</el-button>
        <el-button >清空选课</el-button>
        <el-button >已选课程</el-button>
        <el-button >查看课表</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CoursesList from '../../../components/List/CoursesList.vue'
export default {
  name: "StudentSelectingCourses",
  components:{
    CoursesList
  }
};
</script>

<style scoped >
#studentData {
  box-shadow: 0px 5px 9px 0px #f1f3f4;
  
}
#studentData p {
  margin: 10px 0 10px 10px;
}
#studentData span {
  margin-right: 100px;
}
#handle {
  margin-left: 20%;
}
</style>