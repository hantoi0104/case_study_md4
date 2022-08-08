function createAccount(emails) {
    let fullname = document.getElementById("fullname").value;
    let email = emails
    let password = document.getElementById("password").value;
    let account = {
        email: email,
        fullName: fullname,
        passWord: password
    }

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/api/register",
        data: JSON.stringify(account),
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            // localStorage.setItem("token", data);
            alert("đăng ký thành công")
            location.href = "login.html"
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function getData() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/api/register",
        //xử lý khi thành công
        success: function (data) {
            console.log("data")
            console.log(data)
            checkmail(data);

        },
        error: function (err) {
            console.log(err)
        }
    })
}

function checkmail(data) {
    let emails = document.getElementById("email").value;
    if (data.length == 0) {
        createAccount(emails)
        return;
    } else {
        console.log(emails)
        for (const a of data) {
            console.log(a.email)
            if (a.email !== emails) {
                createAccount(emails)
                return;
            }
        }
    }
    document.getElementById('erorEmail').innerHTML = " email đã tồn tai";
}


function search() {
    let search = document.getElementById("search").value;
    console.log("hmmm")
    console.log(search)
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/api/register/search?fullName=" + search,
        //xử lý khi thành công
        success: function (data) {
            console.log(data)
            console.log(search)
            showSearch(data, search);
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function showSearch(data, search) {
    let str = " ";
    if (search == "") {
        str == ""
    } else {
        for (const d of data) {
            str += ` <tr>
            <td><img src="${d.avatar}" width="50" height="50" alt="Logo" style="border-radius: 50%"></td>
            <td style="display: flex;justify-content: center " >${d.fullName}</td>
        </tr>`;
        }
    }
    document.getElementById("show").innerHTML = str;
}


