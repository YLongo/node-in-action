
// ./ 表示模块跟程序放在同一目录下
var currency = require("./currency");

console.log("50 Canadian dollars equals this amount of US dollars");

console.log("currency:" + currency);

currency.canadianToUS(50);


console.log(currency.canadianToUS(50));

console.log("30 US dollars equals this amount of Canadian dollars");
console.log(currency.USToCanadian(30));