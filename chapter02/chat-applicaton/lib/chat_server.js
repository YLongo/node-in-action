
var socketio = require("socket.io");

var io;

var guestNumber = 1;
var nickNames = {};
var namesUsed = {};
var currentRoom = {};

exports.listen = function(server) {
	// 启动 socket.io 服务器
	io = socketio.listen(server);
	io.set("log level", 1);
	// 定义每个用户连接的处理逻辑
	io.sockets.on("connection", function(socket) {
		// 在用户连接时，赋予一个用户名
		guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed);
		// 在用户连接时，将他放入聊天室 Lobby 中
		joinRoom(socket, "Lobby");
		// 处理用户的相关信息
		handleMessageBroadcasting(socket, nickNames);
		
	});
}