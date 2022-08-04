function createAccount(){
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
let account = {
    email : email,
    fullName : fullname,
    passWord : password
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
            location.href = "login.html"
        },
        error: function (err) {
            console.log(err)
        }
    })}






