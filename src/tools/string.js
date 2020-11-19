/**
 * String.js
 * 常用字符操作函数、
 * @author HLonlin <1021944439@qq.com>
 */
const string = {
  stringify: function(obj, sep, eq) { // qs.stringify
    sep = sep || '&';
    eq = eq || '=';
    let str = "";
    for (var k in obj) {
      str += k + eq + unescape(obj[k]) + sep
    }
    return str.slice(0, -1)
  },

  parse: function(str) { //qs.parse
    var obj = new Object();
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      let index = strs[i].indexOf("=")
      obj[strs[i].slice(0, index)] = unescape(strs[i].slice(index + 1));
    }
    return obj;
  },

  getRequest: function() { // 解析url地址
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      return parse(str)
    }
  },

  getUrlParam: function(name) { //获取指定参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); // 匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; // 返回参数值
  },
}
export default string;
