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
        showEdit(data);
    },
    error: function (err) {
        console.log(err)
    }
})

function showEdit(group) {
    document.getElementById("nameEdit").value = group.groupName;
    document.getElementById("statusEdit").value = group.status;
    document.getElementById("imageEdit").src = group.coverGroupImg;
    document.getElementById("id").value = group.id;
}

function checkEdit(){
    let fileImg = document.getElementById("imgEdit").files;
    if (fileImg.length === 0){
        editNoUpFile();
    }else {
        editYesUpFile()
    }
}

function editNoUpFile() {
    let id = $("#id").val();
    let groupName = $("#nameEdit").val();
    let status = $("#statusEdit").val();
    let coverGroupImg = document.getElementById("imageEdit").src;
    let group = {
        id: id,
        groupName: groupName,
        status: status,
        coverGroupImg: coverGroupImg
    }
    callEdit(group);
}

function editYesUpFile() {
    let token = localStorage.getItem("token")
    let id = $("#id").val();
    let groupName = $("#nameEdit").val();
    let status = $("#statusEdit").val();
    let fileImg = document.getElementById("imgEdit").files;
    let formData = new FormData();
    formData.append("file", fileImg[0]);
    $.ajax({
        contentType: false,
        processData: false,
        type: "POST",
        data: formData,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/groups/coverGroupImg",
        success: function (data) {
            let group = {
                id: id,
                groupName: groupName,
                status: status,
                coverGroupImg: data
            }
            callEdit(group)
        }
    });
}

function callEdit(group){
    let token = localStorage.getItem("token")
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/groups/edit",
        data: JSON.stringify(group),
        //xử lý khi thành công
        success: function (data) {
            location.href = "group.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}