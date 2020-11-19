/**
 * Math.js
 * 常用数学函数、
 * @author HLonlin <1021944439@qq.com>
 */
const math = {
  randomDecimal: function(max, min) { //随机小数
    var max = arguments[0] ? arguments[0] : 0;
    var min = arguments[1] ? arguments[1] : 0;
    return (Math.random() * (max - min) + min);
  },

  randomInteger: function(max, min) { //随机整数
    var max = arguments[0] ? arguments[0] : 0;
    var min = arguments[1] ? arguments[1] : 0;
    return parseInt(Math.random() * (max - min) + min);
  }
}
export default math;
