import axios from "axios";
// 处理 axios 在发送 post 请求时，如果使用data参数的话，后端无法收到数据的问题
// 在使用 params 配置项 传递参数时，就不会出现这个问题
import qs from "qs";
export default (method, url, data, that)=>{
    axios({
        method: method,
        url: url,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // 这里如果是在 jQuery里封装的 $ajax 就不会出现这个问题
        data: qs.stringify(data), // 传入的参数应该是一个对象
      }).then((res, err) => {
        // 请求失败
        if (err) {
          return err.message;
        } else {
          // 请求成功 身份验证通过
          if (res.data.status == 0) {
            that.$router.push({
              name: "Content",
            });
            // 请求成功 密码错误
          } else if (res.data.status == 1) {
            that.$message.error(res.data.msg);
            // 请求成功 但用户不存在
          } else if (res.data.status == 2) {
            that.$message.error(res.data.msg);
          }
        }
      });
}
