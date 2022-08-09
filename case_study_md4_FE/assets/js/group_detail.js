let id = localStorage.getItem("id");
let token = localStorage.getItem("token")
$.ajax({
    type: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    url: "http://localhost:8080/groups/" + id,
    //xử lý khi thành công
    success: function (data) {
        console.log(data)
        showGroup(data);
    },
    error: function (err) {
        console.log(err)
    }
})


$.ajax({
    type: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
    },
    url: "http://localhost:8080/groups/check/" + id,
    //xử lý khi thành công
    success: function (data) {
        console.log(data)

    },
    error: function (err) {
        console.log(err)
    }
})


function showGroup(data){
    let str = `
    <img src="${data.coverGroupImg}" id="img" style="height: 200px;width: 400px">
          <p id="name" style="margin: 20px;font-size: 40px">${data.groupName}</p>
          <p id="status" style="margin: 20px;">Chế độ - ${data.status}</p>
          <p></p>
          <div> 
            <button onclick="getEdit(${data.id})" style="margin: 30px" class="button button-glow button-border button-rounded button-primary">Thay đổi thông tin nhóm</button>
          </div><br>
            `;
    let str2 = `
            <button onclick="deleteGroup(${data.id})" style="margin-left: 10px;" class="button button-glow button-rounded button-caution" >Xóa Nhóm</button>
            `;
    document.getElementById("groupDetail").innerHTML = str;
    document.getElementById("btnDelete").innerHTML = str2;
}

getAccountGroup()
function getAccountGroup(){
    let token = localStorage.getItem("token")
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
            show_Account(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function show_Account(account){
    document.querySelector("nav .nav-right .profile").style.backgroundImage = `url("${account.avatar}")`
}
