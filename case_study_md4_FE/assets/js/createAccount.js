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
            localStorage.setItem("token", data);
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
            checkmail(data);

        },
        error: function (err) {
            console.log(err)
        }
    })
}

function checkmail(data) {
    let emails = document.getElementById("email").value;
    console.log(emails)
    if (data.length == 0) {
        createAccount(emails)
        return;
    } else {
            if (checkMailver2(data,emails)){
                createAccount(emails)
            }else {
                document.getElementById('erorEmail').innerHTML = " email đã tồn tai";
        }
    }

}
function checkMailver2(accs,emails){
    for (const  acc of accs){

        if (acc.email==emails){
            return false
        }

    }
    return true
}



function searchAcc() {
    console.log(1)
    let search = document.getElementById("keySearch").value;
    console.log("hmmm")
    console.log(search)
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/register/search?fullName=" + search,
        //xử lý khi thành công
        success: function (data) {

            showSearch(data,search);
        },
        error: function (err) {
            console.log(err)
        }
    })

}

// function searchAcc(){
//     let name=document.getElementById("keySearch").value
//     $.ajax({
//         type: "GET",
//         headers: {
//             'Accept': 'application/json'
//         },
//         beforeSend: function (xhr) {
//             xhr.setRequestHeader ("Authorization", "Bearer " + token);
//         },
//         url: "http://localhost:8080/search/acc/"+name,
//         success: function (data) {
//             console.log(data)
//         },
//         error: function (err) {
//             console.log(err)
//         }
//     })
// }



function showSearch(data, search) {
    let str = " ";
    if (search == "") {
        str == ""
    } else {
        for (const d of data) {
            str += ` 
            <div class="item-search">
            <img src="${d.avatar}" width="50" height="50" alt="Logo" style="border-radius: 50%">
            <p class="user-Name-search" style="display: flex;justify-content: center " >${d.fullName}</p>
            </div>
           
`;
        }
    }
    document.getElementById("show").innerHTML = str;
}

function logout(){
    localStorage.clear();
    location.href = "login.html"
}
