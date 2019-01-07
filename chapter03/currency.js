
var canadianDollar = 0.91;

function roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
}

// 将 canadianToUs 函数设定在 exports 模块中，所有引入这个模块的代码可以使用它
exports.canadianToUs = function(canadian) {
    return roundTwoDecimals(canadian * canadianDollar);
}

// USToCanadian 设置到 exports 模块中
exports.USToCanadian = function(us) {
	return roundTwoDecimals(us / canadianDollar);
}