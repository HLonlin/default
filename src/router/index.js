import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

// 通过es提案的import()实现懒加载，指定相同webpackChunkName的组件会被打包到同一js文件中
const Index = () => import( /*webpackChunkName: 'ImportFuncDemo',*/ "@/components/index");

console.log(process.env);
const Router = new vueRouter({
  routes: [{
    path: '/',
    name: 'index',
    component: Index,
    meta: {}, //路由元信息
    children: []
  }],
  scrollBehavior(to, from, savedPosition) { //自定义路由切换时页面如何滚动，只在支持 history.pushState 的浏览器中可用
    // return 期望滚动到哪个的位置
  }
});
// 清除路由重复报错
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default Router;
