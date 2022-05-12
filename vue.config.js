const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  // 配置代理服务器
  devServer:{
    proxy:{
      '/course':{
        target:'http://127.0.0.1:3007',
        pathRewrite:{'^/course':''} , 
        changeOrigin:true
      }
    }
  }
})
