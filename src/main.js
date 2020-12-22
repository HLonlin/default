import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui'; // ui组件库
import 'element-ui/lib/theme-chalk/index.css'; // element_ui CSS
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n
import VCharts from 'v-charts'; // 基于 Vue2.0 和 echarts 封装的 v-charts 图表组件

import '@/assets/styles/icon/iconfont.css' // 图标
import '@/assets/styles/default.css'; // 默认样式

import tool from '@/assets/tools'; // 常用函数集
import axios from '@/service';
import api from '@/service/api';
import cookies from "js-cookie";
import indexDB from "@/indexdb";
Vue.prototype.$tool = tool;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$cookies = cookies;
Vue.prototype.$indexDB = indexDB;

import App from './App';
import router from './router';
import store from './store'

Vue.use(ElementUI, {
    locale
});
Vue.use(VCharts);

// 生产环境下不启动提示消息
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: {
        App
    },
    template: '<App/>'
})