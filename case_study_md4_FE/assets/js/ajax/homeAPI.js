let token = localStorage.getItem("token");
let info_token = parseJwt (token);
console.log(info_token)
getAccount();
getAllFriend();
function getAccount(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/user",
        success: function (data) {
            console.log(data)
            show_Account(data)
            connect_Socket(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function getAllFriend(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/friend",
        success: function (data) {
            show_Friend_Chat(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function show_Account(account){
    document.querySelector("nav .nav-right .profile").style.backgroundImage = `url("${account.avatar}")`
    document.querySelector(".container .left-panel .profile").style.backgroundImage = `url("${account.avatar}")`
    document.querySelector(".container .left-panel .full-name-account").innerText =`${account.fullName}`

}

<!--                    ${JSON.stringify(d)}-->
function show_Friend_Chat(data){
    let str ="";
    for (const d of data) {
        console.log(d)
        str += `<div class="friend-chat">
                    <div class="item-friend" onclick="openChat('${d.id}' ,'${d.fullName}','${d.avatar}','${d.email}','${d.status}')" >
                        <img src="${d.avatar}" alt="">
       
                        <div>
                            <p style="width: 100px; font-size: 17px; margin:10px 0px 0px 10px"> ${d.fullName}</p>
                            <p style="width: 250px; font-size: 13px; margin:5px 0px 0px 10px"> Tin nhan gan nhat</p>
                        </div>
                        <div class="icon-edit-chat">
                            <i class="fas fa-ellipsis-h" style="font-size: 18px"></i>
                        </div>
                    </div>
                </div>`
    }
    document.querySelector('.window-chat-main').innerHTML = str;
}


