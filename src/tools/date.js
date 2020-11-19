/**
 * Date.js
 * 常用日期函数、
 * @author HLonlin <1021944439@qq.com>
 */
const date = {
  getDate:function (num) { // 获取num天前/后的时间 num为正可以获得未来的时间，num为负可以获得过去时间
    var  num = arguments[0] ? arguments[0] : 0;
    return new Date().now() + num * 24 * 60 * 60 * 1000;
  }
}
export default date;
