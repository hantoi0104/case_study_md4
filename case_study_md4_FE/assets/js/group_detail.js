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
          <p id="status" style="margin: 20px;">${data.status}</p>
          <div>
            <button onclick="editGroup(${data.id})">Sửa thông tin nhóm</button>
            <button onclick="deleteGroup(${data.id})">Xóa Nhóm</button>
          </div><br>
    `;
    document.getElementById("groupDetail").innerHTML = str;
}

function deleteGroup(id) {
    let token = localStorage.getItem("token")
    confirm("Xóa nhóm bằng cách rời đi?") ?
        $.ajax({
            type: "DELETE",
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
                location.href = "group.html"
            },
            error: function (err) {
                console.log(err)
            }
        }) : ""
}


