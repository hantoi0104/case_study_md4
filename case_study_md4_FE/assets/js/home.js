let is_show = false;
let is_reply = false
let is_show_chat =false;
let is_show_create_post = false;
function show_comment(){
    if(is_show) {
        document.querySelector(".container-comment").style.display = "none";
        is_show = false;
    }
        else{
        document.querySelector(".container-comment").style.display = "block";
        is_show = true;
    }
}
function show_reply(){
    if(is_reply) {
        document.querySelector(".container-reply").style.display = "none";
        is_reply = false;
    }
        else{
        document.querySelector(".container-reply").style.display = "block";
        is_reply = true;
    }
}

// Open message
$('#chat_icon').click(function(){
    if(is_show_chat) {
        document.querySelector(".nav-right-window-chat").style.display = "none";
        is_show_chat = false;
    }
    else{
        document.querySelector(".nav-right-window-chat").style.display = "block";
        is_show_chat = true;
    }
});
// close message
function close_chat(){
    document.querySelector(".nav-right-window-chat").style.display = "none";
}

// Open create post
function open_create_post(){

    if(is_show_create_post) {
        document.querySelector(".container-create-post").style.display = "none";
        is_show_create_post = false;
    }
    else{
        document.querySelector(".container-create-post").style.display = "block";
        $("body").append("<div class='color-body-create-post'></div>")
        is_show_create_post = true;
    }
}

// close create post
function close_post() {
    if (is_show_create_post) {
        document.querySelector(".container-create-post").style.display = "block";
        is_show_create_post = false;
    } else {
        document.querySelector(".container-create-post").style.display = "none";
        document.querySelector(".color-body-create-post").style.display = "none";
        is_show_create_post = true;
    }
}

function openChat(id, fullName, avatar, email, status) {
    document.querySelector(".nav-right-window-chat-one-one").style.display = "block";
    document.querySelector(".info-chat-one img").src = avatar;
    document.querySelector(".name-friend-chat-one").innerHTML = fullName;
    document.querySelector(".nav-right-window-chat").style.display = "none";
}

function close_chat_one_one() {
    document.querySelector(".nav-right-window-chat-one-one").style.display = "none";
}




