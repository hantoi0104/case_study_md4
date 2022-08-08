let stompClient = null;

function connect_Socket(email) {
    let socket = new WebSocket('ws://localhost:8080/socket/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({username: email,}, function (frame) {
        console.log("ok")
        console.log('Connected: ' + frame);
        stompClient.subscribe('/user/' + email + '/private', function (message) {
            let msg = JSON.parse(message.body);
            console.log(msg.receiver.id)
            console.log(JSON.parse(message.body).message)
            append_Window_Chat(msg.sender.id, msg.sender.fullName,
                msg.sender.avatar, msg.sender.email, msg.sender.status)
            showMessage(msg.message, msg.sender.id, msg.sender.avatar);
        });
    });
}

// Hiển thị tin nhắn đến
function showMessage(message, id, avatar) {
    console.log(`#new-message-chat-${id}`)
    document.querySelector(`#new-message-chat-${id}`).innerHTML = `${message}`;
    document.querySelector(`#new-message-chat-${id}`).style.fontWeight = "bold";
    document.querySelector(".chat-one-one-middle").innerHTML +=
      `<div class="box-index-message-receiver">
                    <img src="${avatar}" >
                    <div>
                    <p>${message}</p>
                    </div>                  
                    </div>`

    $("#input-chat-friend").val("")

}

// Hiển thị danh sách bạn bè
function show_Friend_Chat(data) {
    let str = "";
    for (const d of data) {
        console.log(d)
        str += `<div class="friend-chat">
                    <div class="item-friend" onclick="append_Window_Chat('${d.id}' ,'${d.fullName}','${d.avatar}','${d.email}','${d.status}')" >
                        <img src="${d.avatar}" alt="">
       
                        <div class="info-friend-chat">
                            <p style="width: 100px; font-size: 17px; margin:10px 0px 0px 10px"> ${d.fullName}</p>
                            <p  id="new-message-chat-${d.id}" style="width: 250px; font-size: 13px; margin:5px 0px 0px 10px"> Tin nhan gan nhat</p>
                        </div>
                        <div class="icon-edit-chat">
                            <i class="fas fa-ellipsis-h" style="font-size: 18px"></i>
                        </div>
                    </div>
                </div>`
    }
    document.querySelector('.window-chat-main').innerHTML = str;
}

// Thêm cửa sổ chát
function append_Window_Chat(id, fullName, avatar, email, status) {
    document.querySelector(`#new-message-chat-${id}`).style.fontWeight = "normal";
    let a = document.querySelector(".nav-right-window-chat-one-one");
    console.log(a);
    if (a == null) {
        $(".nav-left").append(`<div class="nav-right-window-chat-one-one">
            <div class="chat-one-one-top">
                <div class="info-chat-one">
                    <img src="${avatar}" alt="">
                    <div>
                        <p class="name-friend-chat-one" style="width: 100px; font-size: 17px; margin:5px 0px 0px 10px">${fullName}</p>
                        <p style="width: 250px; font-size: 12px; margin:2px 0px 0px 5px"> Hoạt động 4 giờ trước</p>
                    </div>
                </div>
                <div class="action-chat-one">
                    <i class="fas fa-video"></i>
                    <i class="fas fa-phone-alt"></i>
                    <i class="fas fa-window-close" onclick="close_chat_one_one()"></i>
                </div>
            </div>
            <div class="chat-one-one-middle">
            </div>
            <div class="chat-one-one-bottom">
                <div class="chat-one-one-bottom-left">
                    <i class="fas fa-plus-circle"></i>
                    <i class="fas fa-images"></i>
                    <i class="fas fa-grin-alt"></i>
                </div>
                <div class ="chat-one-one-bottom-right">
                    <div class="send-message-input">
                        <input id="input-chat-friend" placeholder="Nhập tin nhắn">
                        <i class="fas fa-thumbs-up" ></i>
                    </div>
                    <div class="send-message-button"  onclick="sendMessage('${id}','${email}')" >
                        <p>Send</p>
                    </div>

                </div>
            </div>`)
        //Call ajax lấy tin nhắn
        getMessageByFriend(id);
        document.querySelector(".nav-right-window-chat").style.display = "none";
    }
}

// Đóng cửa sổ Chat
function close_chat_one_one() {
    $(".nav-right-window-chat-one-one").remove();

}

// Gửi tin nhắn Chat
function sendMessage(id_Receiver, email_Receiver) {
    let message = {
        sender: {
            id: account_login.id,
            email: account_login.email,
            fullName: account_login.fullName,
            avatar: account_login.avatar,
            status: account_login.status
        },
        receiver: {
            id: id_Receiver,
            email: email_Receiver,
        },
        message: document.querySelector('#input-chat-friend').value,
    }
    stompClient.send("/app/private-message", {}, JSON.stringify(message));
    document.querySelector('#input-chat-friend').value = "";
    document.querySelector(".chat-one-one-middle").innerHTML +=
                    `<div class="box-index-message-sender">
                      <div>
                         <p>${message.message}</p>
                      </div>
                      <img src="${account_login.avatar}">
                    </div>`

}

// Hiện thị tin nhắn bạn bè trong của sổ Chat one one
function show_Message_Chat_friend(message) {
    let str = "";
    for (const m of message) {
        console.log(m)
        if (m.sender.id === account_login.id) {
            str += `<div class="box-index-message-sender">
                      <div>
                         <p>${m.message}</p>
                      </div>
                      <img src="${m.sender.avatar}">
                    </div>`
        } else {
            str += `<div class="box-index-message-receiver">
                    <img src="${m.sender.avatar}" >
                    <div>
                    <p>${m.message}</p>
                    </div>                  
                    </div>`
        }
    }
    document.querySelector(".chat-one-one-middle").innerHTML = str;
}

// Giả mã Token
function parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
