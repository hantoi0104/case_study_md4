$(document).ready(function () {
    $('.form-submit-login').click(
        function login() {
            let user = {};
            user.email = $('#email-login').val();
            user.passWord =$('#password-login').val();
            $.ajax({
                type: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:8080/api/user",
                data: JSON.stringify(user),
                //xử lý khi thành công
                success: function (data) {
                    if(data.length!=0){
                        console.log(data)
                        location.href = "home.html";
                    }
                    else {
                        console.log("null")
                        $('#email-login').val("");
                        $('#password-login').val("");
                    }
                },
                error: function (err) {
                    console.log(err)
                }
            })

        })
})