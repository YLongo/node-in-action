const queryString = require('querystring');

let str = 'keyWord=node.js&name=huruji';
let obj = queryString.parse(str);

console.log(obj);