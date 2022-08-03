
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

function create_Message(){
    let message={};
}



