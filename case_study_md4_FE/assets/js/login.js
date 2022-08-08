$(document).ready(function () {
    $('.form-submit-login').click(
        function login() {
            let account = {};
            account.email = $('#email-login').val();
            account.passWord = $('#password-login').val();
            $.ajax({
                type: "POST",
                headers: {
                    //kiểu dữ liệu nhận về
                    // 'Accept': 'application/json',
                    // kiểu truyền đi
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:8080/api/login",
                data: JSON.stringify(account),
                //xử lý khi thành công
                success: function (data) {
                    console.log(data)
                    console.log(1)
                    if (data!=''){
                        localStorage.setItem("token", data);
                        // location.href = "home.html"
                    }else {
                        alert("tk k chinh xac")
                    }
                },
                error: function (err) {
                    console.log(err)
                }
            })
        })
})