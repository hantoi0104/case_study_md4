getAccount();

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
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/friend",
        success: function (data) {
            console.log(data)
            show_Account(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}



function show_Account(account){
    document.querySelector("nav .nav-right .profile").style.backgroundImage = `url("${account.avatar}")`
    document.querySelector(".container .left-panel .profile").style.backgroundImage = `url("${account.avatar}")`
}
