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

    parse: function(str) { // qs.parse
        var obj = new Object();
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            let index = strs[i].indexOf("=")
            obj[strs[i].slice(0, index)] = unescape(strs[i].slice(index + 1));
        }
        return obj;
    },

    getRequest: function() { // 解析url地址
        var url = location.search; // 获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            return parse(str)
        }
    },

    /**
     * 
     * @param {*} name 
     */
    getUrlParam: function(name) { // 获取指定参数
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); // 匹配目标参数
        if (r != null) return unescape(r[2]);
        return null; // 返回参数值
    },

    /**
     * 
     * @param {string} str 
     */
    trim: function(str) { // 去除首尾空格
        try {
            return (str || '').replace(/^\s+|\s+$/g, "");
        } catch (err) {
            console.log(err);
        }
    },

    /**
     * 
     * @param {string} str 
     */
    tags: function(str) { // 去除标签
        try {
            return (str || '').replace(/<(\w*?)>|<\/\w*?>|<\w.*?>/g, "");
        } catch (err) {
            console.log(err);
        }
    },

    /**
     * 
     * @param {string} str 需要检测的字符串
     * @param {string} regExp 包含的字符
     */
    in_str: function(str, regExp) { // 是否包含某个字符串
        return str.indexOf(regExp) == -1 ? false : true;
    },

    // 正则
    regExp_chinese: /[\u4e00-\u9fa5]/g, // 汉字
    regExp_number: /^[0-9]*$/, // 数字
    regExp_letter: /^[A-Za-z]+$/ // 字母

}
export default string;