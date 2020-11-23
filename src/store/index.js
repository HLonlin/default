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
import getters from './getters.js';
import indexDB from '@/store/modules/indexDB.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    indexDB
  },
  mutations: {
    addState(state, item) { // 增加
      state[item.key] = item.val;
    },
    delState(state, id) { //删除
      for (let key in state) {
        if (key === id) {
          delete state[key];
        }
      }
    },
    delStateAll(state) { // 清空
      for (let key in state) {
        delete state[key];
      }
    },
  },
  actions: {
    addState(state, item) { // 增加
      state.commit('addState', item);
    },
    delState(state, id) { //删除
      state.commit('delState', id);
    },
    delStateAll(state) { // 清空
      state.commit('delStateAll');
    },
  },
  getters
})

export default store;
