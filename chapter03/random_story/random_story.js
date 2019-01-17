

var fs = require("fs");

var request = require("request");

var htmlparser = require("htmlparser");

var configFilename = "./rss_feeds.txt";


// 确保包含 RSS 预定源 URL 列表的文件存在
function checkForRSSFile() {
	fs.exists(configFilename, function(exists) {
		if (!exists) {
			return next(new Error("Missing RSS file:" + configFilename));
		}

		next(null, configFilename);
	});
}


// 读取并解析包含预定源 URL 的文件
function readRSSFile(configFilename) {
	fs.readFile(configFilename, function(err, feedList) {
		if (err) {
			return next(err);
		}

		feedList = feedList.toString().replace(/^\s+|\s+$/g, '').split("\n");
		// 随机选择一个预定源 URL
		var random = Math.floor(Math.random() * feedList.length);
		next(null, feedList[random]);
	});
}


// 向选定的预定源发送 HTTP 请求获取数据
function downloadRSSFeed(feedUrl) {
	request({
		uri: feedUrl
	}, function(err, res, body) {
		if (err) {
			return next(err);
		}
		if (res.statusCode != 200) {
			return next(new Error("Abnomal response status code"));
		}

		next(null, body);
	});
}


// 将预定源数据解析到一个条目数组中
function parseRSSFeed(rss) {
	var handler = new htmlparser.RssHandler();
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(rss);

	if (!handler.dom.items.length) {
		return next(new Error("No RSS items found"));
	}

	var item = handler.dom.items.shift();

	console.log("item:" + JSON.stringify(item));
	console.log(item.title);
	console.log(item.link);
}

var tasks = [
	checkForRSSFile,
	readRSSFile,
	downloadRSSFeed,
	parseRSSFeed
];


// 如果任务出错，则抛出异常
function next(err, result) {
	if (err) {
		throw err;
	}

	// 从任务数组中取出下个任务
	var currentTask = tasks.shift();

	if (currentTask) {
		currentTask(result);
	}
}

next();