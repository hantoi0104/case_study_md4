let is_show = false;
let is_reply = false
let is_show_chat =false;
let is_show_create_post = false;
let is_show_chat_one_one =false;


$('body').on('DOMMouseScroll', function(e){
    if(e.originalEvent.detail < 0) {
        console.log('up 2');
    }
    else {
        console.log('down 2');
    }
});
// let scrollP=0;
// let maxScroll=0;
// $(window).bind('mousewheel', function(event) {
//     if (event.originalEvent.wheelDelta >= 0) {
//        scrollP--;
//         console.log(scrollP)
//
//     }
//     else {
//        maxScroll=++scrollP;
//         console.log(maxScroll)
//         console.log(scrollP)
//        if (maxScroll%10==0){
//            console.log(1)
//        }
//
//     }
// });





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
        document.querySelector(".container-create-post").style.display = "block";
        document.getElementById("manche").style.display="block"
        document.body.style.overflowY="hidden"
}

// close create post
function close_create_post() {
    document.querySelector(".container-create-post").style.display = "none";
    document.getElementById("manche").style.display = "none";
    document.body.style.overflowY = "scroll"
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


