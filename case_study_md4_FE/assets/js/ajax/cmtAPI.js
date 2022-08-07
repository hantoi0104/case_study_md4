
function  addCMTinCMT(cmt){
    let idallC= "container-reply"+cmt.comment.id

    $('#'+idallC).append(`
                            <div class="top-reply">
                               <div>
                                    <img style="margin-left: 3px;" src="${cmt.account.avatar}">
                                </div>
                                <div style="    margin-left: 10px;margin-right: 16px;margin-bottom: 10px" class="content-reply">
                                    <p>${cmt.account.fullName}</p>
                                    <span> ${cmt.content}</span>
                                </div>
                            </div>     
                        `)

}
function  addCMT(data){
    let idallC= "allcmt"+data.post.id

    $('#'+idallC).prepend(`<div class="top-comment">
                            <div>
                                <img src="${data.account.avatar}">
                            </div>
                            
                            <div class="content-comment">
                                <h5>${data.account.fullName}</h5>
                                <p style="word-wrap: break-word; width: 440px"> ${data.content}</p>
                            </div>
                        </div>

                        <div class="bottom-comment" onclick="show_reply(${data.id},${data.post.id})">
                            <span style="font-size: 14px; font-weight: normal; margin-left:400px">reply</span>
                            <span style="font-size: 13px; font-weight: bold; " id="socmtbycmt${data.id}">10</span>
                        </div>
                        <div class="container-reply" id="container-reply1${data.id}">
                            <div id="container-reply${data.id}">
                            
                            </div>
                            <div id="container-reply2${data.id}">
                            
                            </div>
                        </div>`
    )
    countCMTbyCMT(data.id)
}


function commentP(id){
    let idC="cmt"+id
    let cmt1=document.getElementById(idC);
    let content=cmt1.value
    if (content!=""){
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
                addCMT(data)

                demBL(id)
            },
            error: function (err) {
                console.log(err)
            }
        })
    }else {
        alert("chưa có gì để nhắn cả")
    }

}

function  commentC(id,postID){

    let idcm="cmtincmt"+id;


    let cmt1=document.getElementById(idcm)

    let content=cmt1.value
    if (content!=""){
        let cmt={
            content:content,
            comment: {
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
                addCMTinCMT(data)
                countCMTbyCMT(id)
                demBL(postID)
            },
            error: function (err) {
                console.log(err)
            }
        })


    }else {
        alert("chưa có gì để nhắn cả")
    }


}


function showCMTbyPost(comments,id){

    let idallC= "allcmt"+id
    let str=""
    for (const c of comments) {
        str+=`<div class="top-comment">
                            <div>
                                <img src="${c.account.avatar}">
                            </div>
                            
                            <div class="content-comment">
                                <h5>${c.account.fullName}</h5>
                                <p style="word-wrap: break-word; width: 440px"> ${c.content}</p>
                            </div>
                        </div>

                        <div class="bottom-comment" onclick="show_reply(${c.id},${c.post.id})">
                            <span style="font-size: 14px; font-weight: normal; margin-left:400px">reply</span>
                            <span style="font-size: 13px; font-weight: bold; " id="socmtbycmt${c.id}"></span>
                        </div>
                        <div class="container-reply" id="container-reply1${c.id}">
                            <div id="container-reply${c.id}">
                            
                            </div>
                            <div id="container-reply2${c.id}">
                            
                            </div>
                            
                        </div>
`

    }
    document.getElementById(idallC).innerHTML=str
    for (const  c of  comments){
        countCMTbyCMT(c.id)
    }
    let userIMG=document.querySelectorAll(".userIMGcmt")
    for (let i=0;i<userIMG.length;i++){
        userIMG[i].src=acc.avatar
    }

}
function showCMTbyCMT(comments,id,postID){


    let idc1="container-reply2"+id
    let idallC= "container-reply"+id
    let str=""
    for (const c of comments) {
        str+=`<div class="top-reply">
                               <div>
                                    <img style="margin-left: 3px;" src="${c.account.avatar}">
                                </div>
                                <div style="    margin-left: 10px;margin-right: 16px;margin-bottom: 10px" class="content-reply">
                                    <p>${c.account.fullName}</p>
                                    <span> ${c.content}</span>
                                </div>
              </div>              
`
    }
    document.getElementById(idallC).innerHTML=str

    str1=`        <div class="write-comment">
                                    <img style="    margin-left: 43px;" width="30px" height="30px" class="userIMGcmt" src="">
                                    <input style="    margin-left: 10px; margin-right: 10px;" id="cmtincmt${id}"  placeholder=" Viết bình luận ">
                                    <button style="    margin-right: 22px;" type="button" onclick="commentC(${id},${postID})">Send</button>
                                </div>`

    document.getElementById(idc1).innerHTML=str1

    let userIMG=document.querySelectorAll(".userIMGcmt")
    for (let i=0;i<userIMG.length;i++){
        userIMG[i].src=acc.avatar
    }

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
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Bearer " + token);
            },
            url: "http://localhost:8080/comment/"+id+"?size="+5,

            //xử lý khi thành công
            success: function (data) {
                showCMTbyPost(data.content,id)
                CMTgoc(id,data.content)
            },
            error: function (err) {
                console.log(err)
            }
        })
        document.getElementById(id).style.display = "block";
       is_show = true;
    }
}

function show_reply(id,postID){
    let idc="container-reply1"+id
    if(is_reply) {
        document.getElementById(idc).style.display= "none";
        is_reply = false;
    }
    else{
        $.ajax({
            type: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Bearer " + token);
            },
            url: "http://localhost:8080/comment/recmt/"+id,

            //xử lý khi thành công

            success: function (data) {
                showCMTbyCMT(data,id,postID)
            },
            error: function (err) {
                console.log(err)
            }
        })
        document.getElementById(idc).style.display = "block";
        is_reply = true;
    }
}

let size=5;
let idPost;
function  loadCMT(id){
    if (idPost!=id){
        size=10;
    }else {
        size+=5;
    }
    idPost=id;
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/comment/"+id+"?size="+size,

        //xử lý khi thành công
        success: function (data) {
            showCMTbyPost(data.content,id)
            CMTgoc(id,data.content)

        },
        error: function (err) {
            console.log(err)
        }
    })
}

function  CMTgoc(id,cmts){

    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/comment/demblver2/"+id,

        //xử lý khi thành công
        success: function (data) {
            let moreCMTid="moreCMT"+id;
            if (data<=cmts.length){
                document.getElementById(moreCMTid).style.display="none"

            }else {
                document.getElementById(moreCMTid).style.display="block"
            }


        },
        error: function (err) {
            console.log(err)
        }
    })
}