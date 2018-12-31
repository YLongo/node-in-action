
// 内置 HTTP 模块
var http = require("http");

// 内置文件系统模块
var fs = require("fs");

// 内置文件系统路径模块
var path = require("path");

// mime 模块提供 MIME 类型的能力
var mime = require("mime");

// 缓存文件内容的对象
var cache = {};

// 文件不存在时的响应
function send404(response) {
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: resource not found");
	response.end();
};

// 提供文件数据
function sendFile(response, filePath, fileContents) {
	response.writeHead(200, {
		"content-type": mime.lookup(path.basename(filePath))
	});

	response.end(fileContents);
};


function serveStatic(response, cache, absPtah) {
	if (cache[absPtah]) { // 检查文件是否在缓存中
		sendFile(response, absPtah, cache[absPtah]);
	} else {
		fs.exists(absPtah, function(exists) { // 检查文件是否存在
			if (exists) {
				fs.readFile(absPtah, function(err, data) { // 从硬盘中读取文件
					if (err) {
						send404(response);						
					} else {
						cache[absPtah] = data;
						sendFile(response, absPtah, data); // 从硬盘读取文件并返回
					}
				})
			} else {
				send404(response);  // 返回 404
			}
		})
	}
};


// 创建 HTTP 服务器，用匿名函数定义对每个请求的处理行为
var server = http.createServer(function(request, response) {
	var filePath = false;
	if (request.url == '/') {
		console.log("url" + request.url);
		filePath = "public/index.html"; // 返回默认的 HTML 文件
	} else {
		filePath = "public" + request.url; // 将 URL 路径转为文件的相对路径
		console.log(filePath);
	}

	var absPtah = "./" + filePath;

	// 返回静态文件
	serveStatic(response, cache, absPtah); 
});

server.listen(3000, function() {
	console.log("server listening on port 3000");
});

var chatServer = require("./lib/chat_server");
chatServer.listen(server);