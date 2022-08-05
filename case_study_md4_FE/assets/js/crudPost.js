let contentT=document.getElementById("content");

function createPost(data){
        let content1=contentT.value;
        if (!content1&&data==""){
            alert("Chưa có gì để đăng !!!  ")
            return
        }

        token=localStorage.getItem("token")
        let post={
            content:content1,
            img:data
        }
        $.ajax({
            type: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Bearer " + token);
            },
            data: JSON.stringify(post),

            url: "http://localhost:8080/post",
            success: function () {
                contentT.value=""
                del_img()
                close_create_post();
                location.reload()
            },
            error: function (err) {
                console.log(err)
            }
        })

}
