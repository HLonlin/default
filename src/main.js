import Vue from 'vue';

import 'normalize.css/normalize.css'; // A modern alternative to CSS resets

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'; // lang i18n
import VCharts from 'v-charts';

import '@/styles/default.css';

import tool from '@/tools';
import axios from '@/service';
import api from '@/service/api';
import cookies from "js-cookie";
import indexDB from "@/indexdb";
Vue.prototype.$tool = tool;
Vue.prototype.$axios = axios;
Vue.prototype.$api = api;
Vue.prototype.$cookies=cookies;
Vue.prototype.$indexDB=indexDB;

import App from './App';
import router from './router';
import store from './store'


import '@/icons'; // icon

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
