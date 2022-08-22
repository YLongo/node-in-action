
const { url } = require('inspector');
const util = require('util');

let str = util.format('%s is %d', 'huruji', 12);
// huruji is 12
console.log(str);

// 参数少于占位符，那么多余的占位符不会被替换
str = util.format('%s is a %s%s', 'huruji', 'FE');
// huruji is a FE%s
console.log(str);

// 如果参数多于占位符，那么剩余的参数将通过 util.spect()方法转换为字符串
str = util.format('%s is a', 'huruji', 'FE');
// huruji is a FE
console.log(str);

str = util.format('huruji', 'is', 'a', 'FE');
// 如果没有占位符，就将以空格 分隔各个参数并拼接成字符串。
console.log(str);







