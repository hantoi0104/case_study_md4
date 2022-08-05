function commentP(id){
    let idC="cmt"+id
    let cmt1=document.getElementById(idC);
    let content=cmt1.value
    let cmt={
        content:content,
        post: {
            id:id
        }
    }
    token=localStorage.getItem("token")

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        data: JSON.stringify(cmt),

        url: "http://localhost:8080/comment",
        success: function (data) {
            cmt1.value=""
            console.log(data)
        },
        error: function (err) {
            console.log(err)
        }
    })
}


function showCMTbyPost(data){
    let str=""

    str+=`<div class="top-comment">
                            <div>
                                <img src="../assets/img/avarta.jpg">
                            </div>
                            <div class="content-comment">
                                <p>Han Toi</p>
                                <span> Mới mua mà dao bán rồi</span>
                            </div>
                        </div>

                        <div class="bottom-comment" onclick="show_reply()">
                            <span style="font-size: 14px; font-weight: normal; margin-left:400px">reply</span>
                            <span style="font-size: 13px; font-weight: bold; ">10</span>
                        </div>
                        <div class="container-reply">
                            <div class="top-reply">
                                <div>
                                    <img src="../assets/img/avarta.jpg">
                                </div>
                                <div class="content-reply">
                                    <p>Han Toi</p>
                                    <span> Mới mua mà dao bán rồi</span>
                                </div>
                            </div>
                        </div>
`



}

function show_comment(id){
    if(is_show) {
        document.getElementById(id).style.display = "none";
        is_show = false;
    }
    else{
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/comment",
            //xử lý khi thành công
            success: function (data) {
                console.log(data.content)
            },
            error: function (err) {
                console.log(err)
            }
        })

        document.getElementById(id).style.display = "block";
        is_show = true;
    }
}