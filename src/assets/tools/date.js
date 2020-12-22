/**
 * Date.js
 * 常用日期函数、
 * @author HLonlin <1021944439@qq.com>
 */
const date = {
  /**
   * 获取num天前/后的毫秒级时间戳 num为正可以获得未来的时间，num为负可以获得过去时间
   * @param {number} num - num为正可以获得未来的时间，num为负可以获得过去时间
   */
  getCurrentTime: function(num) {
    let Dater = new Date();
    var num = arguments[0] ? arguments[0] : 0;
    return Dater.getTime() + num * 24 * 60 * 60 * 1000;
  },
  /**
   * 获取当前日期并默认以“/”字符连接
   * @param {string} split - 连接符
   */
  getCurrentDate: function(split) {
    let Dater = new Date();
    var split = arguments[0] ? arguments[0] : '/';
    let currentDate=Dater.getFullYear() + split + Dater.getMonth() + split + Dater.getDate();
    return currentDate;
  },
  /**
   * 根据unit获取当前时间戳 h截止时、h截止分、h截止秒、ms截止毫秒
   * @param {string} unit - 规定返回单位的级别
   */
  getTimeStamp: function(unit) {
    let Dater = new Date();
    switch (unit) {
      case 'h':
        return new Date(Dater.getFullYear() + '/' + Dater.getMonth() + '/' + Dater.getDate() + ' ' + Dater.getHours() +
          ':00').getTime() / 1000;
        break;
      case 'm':
        return new Date(Dater.getFullYear() + '/' + Dater.getMonth() + '/' + Dater.getDate() + ' ' + Dater.getHours() +
          ':' + Dater.getMinutes()).getTime() / 1000;
        break;
      case 's':
        return Math.round(Dater / 1000);
        break;
      case 'ms':
        return Dater.getTime();
        break;
      default:
        return Dater.getTime();
    }
  },
}
export default date;
