'use strict'
const path = require('path')

module.exports = {
  // 开发环境
  dev: {
    assetsSubDirectory: 'static',             // 编译输出的二级目录
    assetsPublicPath: '/',                    // 编译发布的根目录，可配置为资源服务器域名或CDN域名
    proxyTable: {                             // 配置后台代理
      '/api':{
        target:'',                            // 目标网址，如：http://news.baidu.com
        secure:true,                          // https需要配置的参数
        pathRewrite:{                         // 代替targe里面的地址，比如我们需要调用"http://news.baidu.com/user/add"接口，我们可以直接写成"/api/user/add"
          '^/api':'/api'
        },
        changeOrigin:true,                    // 接口跨域需要配置的参数
      }
    },
    host: '192.168.199.197',                        // 运行测试页面的域名ip
    port: 8888,                               // 运行测试页面的端口
    autoOpenBrowser: true,                    // 项目运行时是否自动打开浏览器
    errorOverlay: true,                       // 浏览器错误提示
    notifyOnErrors: true,                     // 跨平台错误提示
    poll: false,                              // 使用文件系统获取文件改动的通知devServer.watchOptions
    devtool: 'cheap-module-eval-source-map',  // 增加调试，该属性为原始源代码
    cacheBusting: true,                       // 使缓存失效
    cssSourceMap: false                       // 代码压缩后bug定位将非常困难，引入SourceMap记录压缩前后的位置信息记录，当产生错误时直接定位到压缩前的位置
  },
  // 生产环境
  build: {
    index: path.resolve(__dirname, '../dist/index.html'), // 编译输入的index.html文件
    assetsRoot: path.resolve(__dirname, '../dist'), 		  // 编译输出的静态资源路径（项目打包时的文件）
    assetsSubDirectory: 'static', 							          // 编译输出的二级目录
    assetsPublicPath: './', 									            // 编译发布的根目录，可配置为资源服务器域名或CDN域名
    productionSourceMap: false, 								          // 是否开启cssSourceMap、
    devtool: '#source-map', 								              // 增加调试，该属性为原始源代码
    productionGzip: false, 									              // 是否开启gzip
    productionGzipExtensions: ['js', 'css'], 				      // 需要使用gzip压缩文件的扩展名
    bundleAnalyzerReport: process.env.npm_config_report 	// 打包分析
  }
}
