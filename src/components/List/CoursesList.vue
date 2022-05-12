<template>
  <el-table
  fixed:false
    :data="tableData"
    height="500px"
    border
    style="width: 100%;"
    :row-style="{ height: '20px' }"
    :cell-style="{ padding: '0px' }"
    
  >
    <el-table-column
      fixed
      prop="courstId"
      label="课程代码"
      width="120"
    ></el-table-column>
    <el-table-column
      fixed
      prop="courstName"
      label="课程名称"
      width="120"
    ></el-table-column>
    <el-table-column fixed prop="courstNature" label="课程性质">
    </el-table-column>
    <el-table-column fixed prop="credit" label="学分"> </el-table-column>
    <el-table-column fixed prop="week" label="周学时"> </el-table-column>
    <el-table-column fixed prop="courstIntroduce" label="课程介绍">
      <!-- 这里使用slot-scope="scope"的意义是什么 -->
      <!-- <template slot-scope="scope"> -->
      <el-button type="text" size="medium">查看课程介绍</el-button>
      <!-- </template> -->
    </el-table-column>
    <el-table-column prop="choose" label="选否"> </el-table-column>
    <el-table-column prop="ramain" label="余量"> </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios'
export default {
  name: "ContentList",
  data() {
    return {
      a: '<a href="">查看课程介绍</a>',
      tableData:[]
    };
  },
  mounted(){
    axios({
      method:'GET',
      url:'http://localhost:8080/course/SelectingCourses/StudentSelectingCourses',
      params:{

      }
    }).then((res, err)=>{
      if(err){
        console.log('请求数据失败');
      }else{
        console.log(res.data);
        this.tableData = res.data.data
        
        // this.tableData.push(res.data.data[0])
      }
    })
  }
};
</script>
