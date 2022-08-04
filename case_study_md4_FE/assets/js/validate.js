function FromValidate()
{
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorName = document.getElementById("errorName");
    let regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/;
    let errorEmail = document.getElementById('erorEmail');
    let reGexEmail = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
    let errorPass = document.getElementById('errorPass');

    if (fullname =='' || fullname == null) {
        errorName.innerHTML = "Họ tên không được để trống!";
    } else if (!regexName.test(fullname)) {
        errorName.innerHTML = "Họ tên không hợp lệ!";
    } else {
        errorName.innerHTML = '';
    }

    if (email == '' || email == null) {
        errorEmail.innerHTML = "Email không được để trống!";
    } else if (!reGexEmail.test(email)) {
        errorEmail.innerHTML = "Email không hợp lệ!";
    } else {
        errorEmail.innerHTML = '';
    }

    if (password == '' || password == null) {
        errorPass.innerHTML = "Mật khẩu vui lòng không để trống!";
    } else {
        errorPass.innerHTML = "";
    }

    let password_confirmation = document.getElementById("password_confirmation").value;
    let errorConPass = document.getElementById('errorConPass');

    if (password_confirmation == '' || password_confirmation == null) {
        errorConPass.innerHTML = "Xác nhận mật khẩu vui lòng không để trống!";
    }else if(password_confirmation !== password){
        alert("Xác nhận mật khẩu không trùng khớp!");
    }else{
        errorConPass.innerHTML = "";
    }

    if (fullname  && email && password_confirmation && password && password == password_confirmation){
        alert("đăng ký thành công")
        createAccount();
    }
}