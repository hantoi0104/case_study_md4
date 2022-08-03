let is_show = false;
let is_reply = false
let is_show_chat =false;
let is_show_create_post = false;
let is_show_chat_one_one =false;
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


// load friend
function getFriend() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/friend",
        //xử lý khi thành công
        success: function (data) {
            console.log("data")
            console.log(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}



