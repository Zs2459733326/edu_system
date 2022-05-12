// 全局路由配置

// 引入 Vue
import Vue from 'vue'
// 引入路由插件
import VueRouter from 'vue-router'
// 引入 封装过后的 axios
// import rts from "../assets/js/rts";

Vue.use(VueRouter)

// 引入需要管理的路由组件
// import Context from '../pages/Context/Context.vue'
// import Login from '../pages/Login/Login.vue'

// 创建一个路由器
const router = new VueRouter({
    routes: [
        // 整体内容部分路由
        {
            name: 'Content',
            path: '/Content',
            component: () => import('../pages/Content/Content.vue'),
            // 独享路由守卫
            // beforeEnter(to, from, next){
            //     localStorage.getItem('$key')
            // },
            children: [
                // 首页路由
                {
                    name: 'home',
                    path: 'home',
                    component: () => import('../pages/Content/Home/Home.vue')
                },
                // -----------网上选课内容------------
                // 1、学生选课
                {
                    name: 'StudentSelectingCourses',
                    path: 'StudentSelectingCourses',
                    component: () => import('../pages/Content/CurriculaVariable/StudentSelectingCourses.vue')
                },
            ]
        },
        // 登录界面路由
        {
            name: 'Login',
            path: '/',
            component: () => import('../pages/Login/Login.vue')
        },
    ]
})

// 全局路由守卫 路由前置
router.beforeEach((to, from, next) => {
    const str = /Content/
    console.log(to.path);
    if (str.exec(to.path)) {
        if (!localStorage.getItem('token')) {
            alert('您没有权限执行此操作，请先登录')
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router