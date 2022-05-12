//  此文件 用来构建 Vuex 的核心 store
import Vuex from "vuex";
import Vue from 'vue'
import rts from "../assets/js/rts";
// 将其 注册为全局插件
Vue.use(Vuex) 

const actions = {

}
const mutations = {

}
const state = {
    rts:rts
    
}
const getters = {

}
const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters 
})
export default store