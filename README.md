# default_project

> 开箱即用的 Vue 项目模版

### 技术选型

----|----|----
</br>
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)</br>
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)</br>
Vuex | 全局状态管理框架 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)</br>
Element | 前端 UI 框架 | [https://element.eleme.io/](https://element.eleme.io/)</br>
Axios | 前端 HTTP 框架 | [https://github.com/axios/axios](https://github.com/axios/axios)</br>
v-charts | 基于 Echarts 的图表框架 | [https://v-charts.js.org/](https://v-charts.js.org/)</br>
Js-cookie | cookie 管理工具 | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)</br>
nprogress | 进度条控件 | [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)</br>
vue-element-admin | 项目脚手架参考 | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)</br>

### 项目布局

```luaout
src -- 源码目录
├── assets -- 资源文件
    ├── images -- 图片资源
    ├── styles -- 样式资源
    ├── tools -- 常用函数
├── indexdb -- 前端数据库indexDB
├── router -- vue-router路由配置
├── service -- axios网络请求定义
├── store -- vuex的状态管理
└── views -- 前端页面
    ├── home -- 首页
    ├── pages -- 子页面
    ├── components -- 通用组件
```

## 搭建步骤

- 下载 node 并安装：[https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi](https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi);
- 克隆源代码到本地，使用 IDEA 打开，并完成编译;
- 在命令行中运行命令：npm install,下载相关依赖;
- 在命令行中运行命令：npm run dev,运行项目;
- 访问地址：[http://192.168.199.197:8080];

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at http://192.168.199.197:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

有关工作原理的详细说明，请查看[docs for vue.js](https://cn.vuejs.org/v2/guide/).
