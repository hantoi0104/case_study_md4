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