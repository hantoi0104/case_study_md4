function getEdit(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/profile/" + id,
        //xử lý khi thành công
        success: function (data) {
            showEdit(data.content);
        },
        error: function (err) {
            console.log(err)
        }
    })

}
function callEdit(profile){
    $.ajax({
        type: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/profile",
        data: JSON.stringify(profile),
        //xử lý khi thành công
        success: function (data) {
            getData();
        },
        error: function (err) {
            console.log(err)
        }
    })}
    function editYesUpFile() {
        let id = $("#id").val();
        let name = $("#nameEdit").val();
        let email = $("#email").val();
        let date = $("#date").val();
        let sex = $("#sex").val();
        let phone = $("#phone").val();
        let address = $("#address").val();
        let fileImg = document.getElementById("img").files;
        let formData = new FormData();
        formData.append("file", fileImg[0]);
        $.ajax({
            contentType: false,
            processData: false,
            type: "POST",
            data: formData,
            url: "http://localhost:8080/profile/upImg",
            success: function (data) {
                let profile = {
                    id: id,
                    name: name,
                    email: email,
                    date:date,
                    data:data,
                    sex: sex,
                    img: data,
                    phone:phone,
                    address:address
                }
                callEdit(profile)
            }
        })

}
function showEdit(profile) {
    document.getElementById("nameEdit").value = profile.name;
    document.getElementById("email").value = profile.email;
    document.getElementById("date").value = profile.date;
    document.getElementById("sex").value = profile.sex;
    document.getElementById("img").src = profile.img;
    document.getElementById("address").value = profile.address;
    document.getElementById("phone").value = profile.phone;
}
function create(data) {
    let sex = $("#sex").val();
    let address = $("#address").val();
    let profile = {
        name: name,
        price: price,
        date: date,
        img: data
    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/profile",
        data: JSON.stringify(profile),
        //xử lý khi thành công
        success: function (data) {
            getData();
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
        url: "http://localhost:8080/profile",
        //xử lý khi thành công
        success: function (data) {
            console.log("data")
            console.log(data)
            showData(data.content);
        },
        error: function (err) {
            console.log(err)
        }
    })
}
