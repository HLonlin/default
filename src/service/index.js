/**
 * service.js
 * 请求服务配置文件
 * @author HLonlin <1021944439@qq.com>
 */
import axios from 'axios';
import {
  Message,
  MessageBox
} from 'element-ui';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
  // headers: {
  //   'Content-Type': ''
  // }
});

// request拦截器
service.interceptors.request.use(
  config => {
    // config.headers.Token = "testCode"; // 自定义请求头
    return config;
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    return Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.status !== 200) { // status非200抛出错误
      Message({
        message: res.message,
        type: 'error',
        duration: 3 * 1000
      });
      return Promise.reject('error');
    } else {
      return res;
    }
  },
  error => {
    console.log('err' + error); //for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
