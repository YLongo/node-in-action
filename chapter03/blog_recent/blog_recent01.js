
var http = require("http");
var fs = require("fs");

// 创建 http 服务器并用回调定义响应逻辑
http.createServer(function(req, res) {
    if (req.url == "/") {
    	fs.readFile("./titles.json", function(err, data) {
    		if (err) {
    			console.log(err);
    			res.end("Server Error");
    		} else {
    			var titles = JSON.parse(data.toString());
    			fs.readFile("./template.html", function(err, data) {
    				if (err) {
    					console.log(err);
    					res.end("Server Error");
    				} else {
    					var tmpl = data.toString();
    					var html = tmpl.replace("%", titles.join("</li><li>"));
    					res.writeHead(200, {"Content-Type": "text/html"});
    					res.end(html);
    				}
    			});
    		}
    	});
    }
}).listen(8000, "127.0.0.1");