/*
* store.js
* Vue状态管理模式
* state         存放状态
* mutations     state成员操作
* getters       加工state成员给外界
* actions       异步操作
* modules       模块化状态管理
*/
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
})

export default store;
