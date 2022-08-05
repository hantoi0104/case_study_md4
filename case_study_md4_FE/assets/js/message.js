
function open_chat_one_one() {
    if (is_show_chat_one_one) {
        document.querySelector(".nav-right-window-chat-one-one").style.display = "none";
        is_show_chat_one_one = false;
    } else {
        document.querySelector(".nav-right-window-chat-one-one").style.display = "block";
        document.querySelector(".nav-right-window-chat").style.display = "none";
        is_show_chat_one_one = true;
    }
}

function close_chat_one_one() {
    document.querySelector(".nav-right-window-chat-one-one").style.display = "none";
}

//chat one to one
let token = localStorage.getItem("token");
let info_token = parseJwt (token);
console.log(info_token)
let stopClient = null;
let Account = null;

function connect(){
    let socket = new WebSocket('ws://localhost:8081/socket/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/private', function (message) {
            console.log("anh ok")
            console.log(JSON.parse(message.body).message)
            showMessage(JSON.parse(message.body).message);

        });
    });
}

function send_Message(){
    console.log("send ok")
    stompClient.send("/app/hello", {}, JSON.stringify({'message': $("#textMessage").val()}));
}

function showMessage(message) {
    document.querySelector("#textAreaMessage").innerHTML += `<p>${message}</p>`;
    $("#textMessage").val("")

}

function parseJwt (token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
