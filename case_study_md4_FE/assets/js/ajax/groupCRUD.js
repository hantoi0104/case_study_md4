
function create(data) {
    let token = localStorage.getItem("token")
    let groupName = $("#groupName").val();
    let status = $("#status").val();
    let group = {
        groupName: groupName,
        status: status,
        coverGroupImg: data
    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/groups",
        data: JSON.stringify(group),
        //xử lý khi thành công
        success: function (data) {
            location.href = "group.html";

        },
        error: function (err) {
            console.log(err)
        }
    })
}

function uploadFile() {
    let token = localStorage.getItem("token")
    let fileImg = document.getElementById("coverGroupImg").files;
    if (fileImg.length === 0) {
        alert("Vui Lòng Upload File Ảnh Của Bạn");
        return;
    }
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
            create(data);
        }
    });
}

function deleteGroup(id) {
    let token = localStorage.getItem("token")
    confirm("Bạn thật sự muốn xóa?") ?
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
            showEdit(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showEdit(group) {

}
