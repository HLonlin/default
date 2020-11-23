/**
 * Array.js
 * 常用数组函数、
 * @author HLonlin <1021944439@qq.com>
 */
const Arr = {
  unique: function(arr) { // 数组去重 双层循环，外层循环元素，内层循环时比较值。值相同时，则删去这个值（ES5中最常用）
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) { //第一个等同于第二个，splice方法删除第二个
          arr.splice(j, 1);
          j--;
        }
      }
    }
    return arr;
  },

  unique_ES6: function(arr) { // 利用ES6 Set去重（ES6中最常用）
    return Array.from(new Set(arr))
  },

  maxToMin: function(arr) { // 大到小排序
    arr.sort(function(a, b) {
      return b - a;
    });
    return arr;
  },

  minToMax: function(arr) { // 小到大排序
    arr.sort(function(a, b) {
      return a - b;
    });
    return arr;
  },
  objMinToMax: function(arr, key) { // 根据数组对象某属性小到大排序
    function compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      }
    }
    return arr.sort(compare(key));
  },
  objMaxToMin: function(arr, key) {  //根据数组对象某属性大到小排序
    function compare(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value2 - value1;
      }
    }
    return arr.sort(compare(key));
  }
}
export default Arr;
