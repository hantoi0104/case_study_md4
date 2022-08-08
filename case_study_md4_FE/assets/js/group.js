getData();
getAccountGroup();
getAccData();



function getAccData(){
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
        url: "http://localhost:8080/groups/GroupAcc" ,
        //xử lý khi thành công
        success: function (data) {
            showData(data);
            // showAllGroup(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function getData() {
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
        url: "http://localhost:8080/groups",
        //xử lý khi thành công
        success: function (data) {
            // showData(data);
            showAllGroup(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function showData(data) {
    let str = "";
    for (const g of data) {
        console.log(g)
        str += `
            <li onclick="showDetail(${g.id})">
<!--                <span class="fa fa-user-friends"></span>-->
                <span><img src="${g.coverGroupImg}" style="width: 80px;height: 80px; border-radius: 7px;" ></span>
                <div style="margin-left: 30px;width: 120px">
                <p style="font-size: 25px">${g.groupName}</p><br>
                <p style="font-size: 15px">${g.status}</p>
                </div>
                <div>
                <p style="opacity: 0.7; filter: alpha(opacity=50);font-size: 13px; margin-top: 62px">- Ngày tạo<a>(${g.gcreate})</a></p>
                </div>
            </li>
                `;
    }
    document.getElementById("showGroup").innerHTML = str;
}

function showDetail(id){
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
    location.href = "group_detail.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showGroupFind(id){
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
            location.href = "group_find.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}


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
            getData();
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

function searchG() {
    let token = localStorage.getItem("token")
    let search = document.getElementById("search").value;
    console.log(search)
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/groups/search?name=" + search,
        //xử lý khi thành công
        success: function (data) {
            showAllGroup(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function showAllGroup(data) {
    let str = "";
    for (const g of data) {
        console.log(g)
        str += `
                <div onclick="showGroupFind(${g.id})">
                    <span class='page' href="#">
                        <img src="${g.coverGroupImg}" style="width: 70px;height: 70px; border-radius: 7px;" >
                        <p style="font-size: 18px;margin-left: 30px">${g.groupName}</p><br>
                        <p style="font-size: 15px">( ${g.status} )</p>
                </div>
                `;
    }
    document.getElementById("myGroup").innerHTML = str;
}

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
    document.getElementById("nameAcc").innerHTML = account.fullName
}