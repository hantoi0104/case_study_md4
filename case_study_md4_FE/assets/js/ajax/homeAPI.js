let token = localStorage.getItem("token");
let info_token = parseJwt (token);
console.log(info_token)
let account_login;
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
            account_login = data;
            show_Account(data)
            connect_Socket(data.email)
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

function getMessageByFriend(id){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/message/friend/" + id,
        success: function (data) {
            show_Message_Chat_friend(data);
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







