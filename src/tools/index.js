/**
 * 常用Fn工具集、
 * @author HLonlin <1021944439@qq.com>
 */
import arr from '@/tools/arr.js';
import date from '@/tools/date.js';
import math from '@/tools/math.js';
import string from '@/tools/string.js';
const tools = {};

Object.assign(tools, arr, date, math, string);
export default tools;
