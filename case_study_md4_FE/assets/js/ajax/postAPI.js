
getPost(5)
function getPost(sizeHome) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',

        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/post/home/"+sizeHome,
        success: function (data) {
            showPost(data.content)
        },
        error: function (err) {
            console.log(err)
        }
    })
}

let maxScrollY=0;
let size1=5
$(window).bind('mousewheel', function(event) {
    console.log(window.scrollY)
    if (maxScrollY!=0&&maxScrollY==window.scrollY){
        size1+=5;
        getPost(size1)
    }
    if (window.scrollY>maxScrollY){
        maxScrollY=window.scrollY
    }



});





function  showPost(posts){
        let str=""
        for (const p of posts){
            countLike(p.id)
            str+=`<div class="post-top">
                <div class="dp">
                    <img src="${p.account.avatar}" alt="">
                </div>
                <div class="post-info">
                    <p class="name">${p.account.fullName}</p>
                    <span class="time">2 days ago</span>
                </div>
                <i class="fas fa-ellipsis-h"></i>
            </div>

            <div class="post-content">
                <p style="width: 500px;word-wrap: break-word;">${p.content}</p>
                <img src="${p.img}"/>
            </div>

            <div class="container-post-bottom">
                <div class="quantity-like-comment">
                    <div class="quantity-like">
                        <i class="fas fa-thumbs-up" style="color: #ffffff;
                         background-color: #0076e7; font-size: 10px; border-radius: 50%; padding: 5px"></i>
                        <span id="soLike${p.id}"></span>
                    </div>
                    <div class="quantity-comment" id="cmts${p.id}">
                        <span id="socmt${p.id}">4</span>
                        <span>bình luận</span>
                    </div>
                </div>
                <div class="post-bottom">
                    <div class="action" onclick="createLike(${p.id})">
                        <i class="far fa-thumbs-up"></i>
                        <span>Like</span>
                    </div>
                    <div class="action" onclick="show_comment(${p.id})">
                        <i class="far fa-comment"></i>
                        <span>Comment</span>
                    </div>
                    <div class="action">
                        <i class="fa fa-share"></i>
                        <span>Share</span>
                    </div>
                </div>

                <div style="display:none" class="container-comment" id="${p.id}">
                        <div class="write-comment">
                            <img width="30px" height="30px" class="userIMGcmt" src="">
                            <input id="cmt${p.id}"  placeholder=" Viết bình luận ">
                            <button type="button" onclick="commentP(${p.id})">Send</button>
                        </div>
                    <div class="all-comment" id="allcmt${p.id}" style="margin-bottom: 30px">
                        
                    </div>
                    <a href="" style="margin-top: 20px" onclick="loadCMT(${p.id})" class="moreCMT" id="moreCMT${p.id}">Xem thêm bình luận</a>
                </div>

            </div> 
            <br>
            <hr><hr>
            <br>`

        }
        document.getElementById("timeLine").innerHTML=str
        let moreCmt=document.querySelectorAll(".moreCMT")
        for (let i = 0; i <moreCmt.length ; i++) {
            moreCmt[i].addEventListener('click',function (ev){
                ev.preventDefault()
            })
        }
        let soLCmt=document.querySelectorAll(".quantity-comment")
        for (let i = 0; i <soLCmt.length ; i++) {
          let cm=  soLCmt[i].getAttribute("id")

            demBL(cm.split("cmts")[1])
        }

}

 function demBL(id){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/comment/dembl/"+id,
        success: function (data) {
            let ids="socmt"+id
            document.getElementById(ids).innerHTML=data;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function countCMTbyCMT(id){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/comment/dembl/cmt/"+id,
        success: function (data) {
            let ids="socmtbycmt"+id
            document.getElementById(ids).innerHTML=data;
        },
        error: function (err) {
            console.log(err)
        }
    })
}
