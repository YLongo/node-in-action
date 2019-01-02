
// 对特殊字符进行转义
function divEscapedContentElement(message) {
    return $("<div></div>").text(message);
}

// 显示系统的消息
function divSystemContentElement(message) {
    return $("<div></div>").html("<i>" + message + "</i>");
}



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
    }
}