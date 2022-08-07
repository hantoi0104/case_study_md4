let link= document.getElementById("duphong")
let image= document.getElementById("img")
let inputFile =document.getElementById("inputFile")

function choosefile(filename) {
        if (filename.files[0]!=undefined){
            link.files=filename.files;
        }
        let reader = new FileReader();
        reader.onload = function (e) {

            image.style.display="flex"
            $('#image').attr('src', e.target.result);
        }
        reader.readAsDataURL(link.files[0])


}
function del_img(){
    link.value=""
    inputFile.value=""
    image.style.display="none"

}


function uploadFilePost() {
    token=localStorage.getItem("token")
    if (link.files[0] == undefined) {
        createPost("");
        return
    }
    let formData = new FormData();
    formData.append("file", link.files[0]);
    $.ajax({
        contentType: false,
        processData: false,
        type: "POST",
        data: formData,
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/upfile",
        success: function (data) {
            createPost(data);
        }
    });
}