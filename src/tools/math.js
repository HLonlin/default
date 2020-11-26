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
  },
  /**
   * @param {Number} n
   * 只保留12为整数2位小数
   */
  amountInWords: function(n) {
    if (n == 0 || n === '' || n === null) { // 输入0处理
      return '零元整';
    }
    if (typeof n !== 'number' && isNaN(n)) {
      return '内容中含有数字以外的字符'
    }

    var unit = "千百拾亿千百拾万千百拾元角分", // 定义用到的大写数字
      head = n < 0 ? '负' : '', // 处理输入数值的正负问题
      n = Math.abs(n) + "00",
      str = "";

    // 整数、小数位数限制
    var indexpoint = n.indexOf('.');
    if (indexpoint >= 0) {
      let decimal = n.substr(indexpoint + 1);
      n = n.substring(n.indexOf('.'), n.indexOf('.') - 12) + n.substr(indexpoint + 1, 2);
      // if (decimal.length - 2 >= 2) { // 限制输入2位小数
      // 	lowLetter.value = head === '负' ? -Math.round(Number(n)) / 100 : Math.round(Number(n)) / 100;
      // 	if (lowLetter.value == 0 || lowLetter.value === '') { // 输入0处理
      // 		return '零元整';
      // 	}
      // }
    } else { // 限制输入12位整数
      n = (n / 100).toString().slice(0, 12);
      // lowLetter.value = head === '负' ? -n : n;
      n += '00';
    }

    unit = unit.substr(unit.length - n.length); // 截取需要使用的unit单位
    for (var i = 0; i < n.length; i++) {
      console.log(i)
      str += "零壹贰叁肆伍陆柒捌玖".charAt(n.charAt(i)) + unit.charAt(i); //遍历转化为大写的数字
    }

    // 替换掉数字里面的零字符，得到结果
    return head + str.replace(/零(千|百|拾|角)/g, "零")
      .replace(/(零)+/g, "零")
      .replace(/零(万|亿|元)/g, "$1")
      .replace(/(亿)万|壹(拾)/g, "$1$2")
      .replace(/^元零?|零分/g, "")
      .replace(/元$/g, "元整");
  },
  /**
   * @param {Object} entry
   * @param {Object} output
   * 用于监听entry输入框数字转换为大写输出到output
   */
  amountInWordsListening: function(entry, output) {
    if (entry.value == 0 || entry.value === '') { // 输入0处理
      return output.value = '零元整';
    }

    var unit = "千百拾亿千百拾万千百拾元角分", // 定义用到的大写数字
      head = entry.value < 0 ? '负' : '', // 处理输入数值的正负问题
      n = Math.abs(entry.value) + "00",
      str = "";

    // 整数、小数位数限制
    var indexpoint = n.indexOf('.');
    if (indexpoint >= 0) {
      let decimal = n.substr(indexpoint + 1);
      n = n.substring(n.indexOf('.'), n.indexOf('.') - 12) + n.substr(indexpoint + 1, 2);
      if (decimal.length - 2 >= 2) { // 限制输入2位小数
        lowLetter.value = head === '负' ? -Math.round(Number(n)) / 100 : Math.round(Number(n)) / 100;
        if (lowLetter.value == 0 || lowLetter.value === '') { // 0处理
          return output.value = '零元整';
        }
      }
    } else { // 限制输入12位整数
      n = (n / 100).toString().slice(0, 12);
      lowLetter.value = head === '负' ? -n : n;
      n += '00';
    }

    unit = unit.substr(unit.length - n.length); // 截取需要使用的unit单位
    for (var i = 0; i < n.length; i++) {
      str += "零壹贰叁肆伍陆柒捌玖".charAt(n.charAt(i)) + unit.charAt(i); //遍历转化为大写的数字
    }

    // 替换掉数字里面的零字符，得到结果
    output.value = head + str.replace(/零(千|百|拾|角)/g, "零")
      .replace(/(零)+/g, "零")
      .replace(/零(万|亿|元)/g, "$1")
      .replace(/(亿)万|壹(拾)/g, "$1$2")
      .replace(/^元零?|零分/g, "")
      .replace(/元$/g, "元整");
  }
}
export default math;
