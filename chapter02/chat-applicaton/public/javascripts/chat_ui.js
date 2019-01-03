
// 对特殊字符进行转义
function divEscapedContentElement(message) {
    return $("<div></div>").text(message);
}

// 显示系统的消息
function divSystemContentElement(message) {
    return $("<div></div>").html("<i>" + message + "</i>");
}


// 处理用户的原始输入
function processUserInput(chatApp, socket) {
    var message = $("#send-message").val();
    var systemMessage;

    // 如果用户输入的是以 / 开头的内容，将其作为聊天命令
    if (message.charAt(0) == "/") {
        systemMessage = chatApp.processCommand(message);
        if (systemMessage) {
            $("messages").append(divSystemContentElement(systemMessage));
        }
    } else {
        // 将非命令广播给其它用户
        chatApp.sendMessage($("#room").text(), message);
        $("#messages").append(divEscapedContentElement(message));
        $("#messages").scrollTop($("#messages").prop("scrollHeight"));
    }

    $("#send-message").val("");
}

var socket = io.connect();

$(document).ready(function() {
    var chatApp = new Chat(socket);

    // 显示更名的结果
    socket.on("nameResult", function(result) {
        var message;

        if (result.success) {
            message = "You are now known as " + result.name + ".";
        } else {
            message = result.message;
        }

        $("#messages").append(divSystemContentElement(message));

    });

    // 显示房间的变更结果
    socket.on("joinResult", function(result) {
        $("#room").text(result.room);
        $("#messages").append(divSystemContentElement("Room changed"));
    });

    // 显示接收到的消息
    socket.on("message", function(message) {
        var newElement = $("<div></div>").text(message.text);
        $("#messages").append(newElement);
    });

    // 显示可用房间列表
    socket.on("rooms", function(rooms) {
        $("#room-list").empty();

        for (var room in rooms) {
            room = room.substring(1, room.length);
            console.log("room:" + room);
            if (room != '') {
                $("#room-list").append(divEscapedContentElement(room));
            }
        }

        // 点击房间名可以换到那个房间中
        $("#room-list div").click(function() {
            chatApp.processCommand("/join " + $(this).text());
            $("#send-message").focus();
        });

    });

    // 定期请求可用房间列表
    setInterval(function() {
        socket.emit("rooms");
    }, 1000);

    $("#send-message").focus();

    // 发送聊天消息
    $("#send-form").submit(function() {
        processUserInput(chatApp, socket);
        return false;
    });

});