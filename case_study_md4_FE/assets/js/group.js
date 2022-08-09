getGroup();

function getGroup() {
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
            showGroup(data);

        },
        error: function (err) {
            console.log(err)
        }
    })
}
function showGroup(data) {
    document.getElementById("showGroup")
    let str = "";
    for (const g of data) {
        let ngayTao=new Date(g.gcreate)
        let createDay=ngayTao.getDate()+"/"+ngayTao.getMonth()+"/"+ngayTao.getFullYear()
        str += `
            <li onclick="showDetail(${g.id})">
                <span><img src="${g.coverGroupImg}" style="width: 80px;height: 80px; border-radius: 7px;" ></span>
                <div style="margin-left: 30px;width: 120px">
                <p style="font-size: 25px">${g.groupName}</p><br>
                <p style="font-size: 15px">${g.status}</p>
                </div>
                <div>
                <p style="opacity: 0.7; filter: alpha(opacity=50);font-size: 13px; margin-top: 62px">- Ngày tạo<a>(${createDay})</a></p>
                </div>
            </li>
                `;
    }
    document.getElementById("showGroup").innerHTML = str;
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


function searchG() {
    let token = localStorage.getItem("token")
    let search = document.getElementById("search").value;
    if (search!=""){
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


}

function showAllGroup(data) {
    let str = "";
    for (const g of data) {
        str += `
                <div onclick="showGroupFind(${g.id})">
                    <span class='page' href="#">
                        <img src="${g.coverGroupImg}" style="width: 70px;height: 70px; border-radius: 7px;" >
                        <div class="group-info-search">
                         <p style="font-size: 18px;margin-left: 30px">${g.groupName}</p><br>
                        <p style="font-size: 15px;margin-left: 30px">-${g.status}-</p>
                        </div>
                </div>
                `;
    }
    document.getElementById("myGroup").innerHTML = str;
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