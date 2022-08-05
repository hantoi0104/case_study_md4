let id = localStorage.getItem("id");
$.ajax({
    type: "GET",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    url: "http://localhost:8080/groups/" + id,
    //xử lý khi thành công
    success: function (data) {
        console.log(data)
        showGroup(data);
    },
    error: function (err) {
        console.log(err)
    }
})

function showGroup(data){
    document.getElementById("name").innerHTML = data.groupName;
    document.getElementById("img").src = data.coverGroupImg;
    document.getElementById("status").innerHTML = data.status;
}