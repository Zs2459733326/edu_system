<template>
  <div id="login">
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="100px">
        <!-- 输入用户名 -->
        <el-form-item label="用户名">
          <el-input v-model="form.studentID"></el-input>
        </el-form-item>
        <!-- 输入密码 -->
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password"></el-input>
        </el-form-item>
        <!-- 输入验证码 -->
        <el-form-item label="验证码" >
          <div class="verCode">
            <el-input type="text" v-model="iptStr" style="width: 80px; margin-right: 10px"/>
            <div class="show">
              <span v-for="(num, index) in nums" :key="index" :style="style[index]">{{ num }}</span>
            </div>
            <a href="javascript:;" @click="setRandomNum">换一张</a>
            <!-- <button >提交</button> -->
          </div>
        </el-form-item>
        <!-- 选择用户类型 -->
        <div id="radio">
          <el-radio class="opt" v-model="form.radio" label="1">部门</el-radio>
          <el-radio class="opt" v-model="form.radio" label="2">教师</el-radio>
          <el-radio class="opt" v-model="form.radio" label="3">学生</el-radio>
          <el-radio class="opt" v-model="form.radio" label="4">访客</el-radio>
        </div>

        <!-- 登录 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit" :plain="true"
            >登录</el-button
          >
          <el-button>清空表单</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from "axios";
// 处理 axios 在发送 post 请求时，如果使用data参数的话，后端无法收到数据的问题
// 在使用 params 配置项 传递参数时，就不会出现这个问题
import qs from "qs";

export default {
  data() {
    return {
      form: {
        radio: "1",
        studentID: "",
        password: "",
      },
      iptStr: "",
      nums: [],
      style:[]
    };
  },
  computed: {
    // 将 生成的验证码数组 转换为 字符串
    numsStr() {
      return this.nums.join("");
    },
  },
  methods: {
    // 登录
    onSubmit() {
      // 若信息没有填充完整 弹出提示
      if (this.form.studentID.trim().length == 0 || this.form.password.trim().length == 0 || this.iptStr.trim().length == 0)  return this.$message.error("您需要填写完整的登录信息！");
      // 判断 验证码是否输入 正确
      if (this.iptStr !== this.numsStr) return this.$message.error("验证码错误！");
        // 信息填充完整后 发送请求 验证 用户名和密码
        axios({
          method: "POST",
          url: "http://localhost:8080/course/login/loginCheck",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          // 这里如果是在 jQuery里封装的 $ajax 就不会出现这个问题
          data: qs.stringify({
            studentID: this.form.studentID,
            password: this.form.password,
          }), // 传入的参数应该是一个对象
        }).then((res, err) => {
          // 请求失败
          if (err) {
            return err.message;
          } else {
            // 请求成功 身份验证通过
            if (res.data.status == 0) {
              this.$router.push({
                name: "Content",
              });
              // 请求成功 密码错误
            } else if (res.data.status == 1) {
              this.$message.error(res.data.msg);
              // 请求成功 但用户不存在
            } else if (res.data.status == 2) {
              this.$message.error(res.data.msg);
            }
          }
        });
      
    },
    // 验证码部分
    // 生成0~9的随机数 并且将其放入 nums数组中
    setRandomNum() {
      this.nums = [];
      for (let i = 0; i < 4; i++) {
        this.nums.push(getRandom(0, 9));
      }
      // 设置 每个验证码数字的 随机样式
      this.style = [
        {fontSize: getRandom(12, 20) + 'px',
         color: 'rgb(' + getRandom(0, 200) + ',' + getRandom(0, 200) + ',' + getRandom(0, 200) + ')',
         transform: ' rotate(' + getRandom(-20, 20) + 'deg)'
         },
          {fontSize: getRandom(12, 20) + 'px',
         color: 'rgb(' + getRandom(0, 200) + ',' + getRandom(0, 200) + ',' + getRandom(0, 200) + ')',
         transform: ' rotate(' + getRandom(-20, 20) + 'deg)'
         },
          {fontSize: getRandom(12, 20) + 'px',
         color: 'rgb(' + getRandom(0, 200) + ',' + getRandom(0, 200) + ',' + getRandom(0, 200) + ')',
         transform: ' rotate(' + getRandom(-20, 20) + 'deg)'
         },
          {fontSize: getRandom(12, 20) + 'px',
         color: 'rgb(' + getRandom(0, 200) + ',' + getRandom(0, 200) + ',' + getRandom(0, 200) + ')',
         transform: ' rotate(' + getRandom(-20, 20) + 'deg)'
         },
      ]
    },
    
  },
  mounted() {
    this.setRandomNum();
  },
};
// 获得 生成随机数的函数
// form~to 为随机数的取值范围
function getRandom(form, to) {
  return Math.round(Math.random() * (to - form) + form);
}
</script>

<style scoped>
#login {
  position: absolute;
  width: 400px;
  height: 400px;
  top: 60%; 
  left: 30%;
  transform: translate(-50%, -50%);
  
}
/* 卡片整体 */
.box-card {
  padding-right: 50px;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
/* 选择用户类型 */
#radio {
  margin-left: 50px;
}
#radio .opt {
  margin-right: 10px !important;
  margin-bottom: 30px !important;
}
.verCode .show {
  position: absolute;
  left:140px;
  top:5px;
  display: flex;
  justify-content: center;
  width: 60px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #eee;
  /* 禁止选中当前元素内的内容 */
  user-select: none;
  
}


</style>