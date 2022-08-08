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

function deleteGroup(id) {
    let token = localStorage.getItem("token")
    confirm("Xóa nhóm bằng cách rời đi?") ?
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Bearer " + token);
            },
            url: "http://localhost:8080/groups/delete/" + id,
            //xử lý khi thành công
            success: function (data) {
                location.href = "group.html"
            },
            error: function (err) {
                console.log(err)
            }
        }) : ""
}

function getEdit(id){
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
            localStorage.setItem("id",data.id);
            location.href = "group_edit.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}

