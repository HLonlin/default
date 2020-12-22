import Vue from 'vue'
import vueRouter from 'vue-router'
Vue.use(vueRouter)
    // 清除路由重复报错
const originalPush = vueRouter.prototype.push
vueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 静态路由
export const constantRouter = [{
        path: '',
        component: () =>
            import ('@/views/home/indexLayout/index'),
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () =>
                import ('@/views/home/index'),
            meta: {
                title: '首页',
                icon: 'home'
            }
        }]
    },
    // 通过es提案的import()实现懒加载，指定相同webpackChunkName的组件会被打包到同一js文件中
    {
        path: '/404',
        component: () =>
            import ( /*webpackChunkName: '包名',*/ '@/views/pages/404'),
        hidden: true
    },
    {
        path: '/login',
        component: () =>
            import ( /*webpackChunkName: '包名',*/ '@/views/pages/login'),
        hidden: true
    },
]

// 动态路由
export const asyncRouter = []

export default new vueRouter({
    // mode: 'history', //后端支持可开
    routes: constantRouter,
    //定义路由切换时页面如何滚动，只在支持 history.pushState 的浏览器中可用
    scrollBehavior: () => ({ y: 0 }),
})