
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
let c=0
$(window).bind('mousewheel', function(event) {
        c++
    let y=window.scrollY

    if (c==10){
        if (maxScrollY!=0&&maxScrollY==y){
            size1+=5;
            getPost(size1)
        }
        c=0
    }
    if (y>maxScrollY){
        maxScrollY=y
    }
});


function checkdate(datePost){
    let now=new Date();
    let e=now.getTime()-datePost.getTime()
    e=e/1000
    if (e<60){
        return "Vừa xong"
    }else if (e<3600){
        let min=e/60
        return Math.floor(min)+" phút trước"
    }else if (e<86400){
        let hours=e/3600
        return Math.floor(hours)+" giờ trước"
    }else if (e<604800){
        let days=e/86400
        return Math.floor(days)+" ngày trước"
    }else if (e<2419200){
        let weeks=e/604800
        return Math.floor(weeks)+" tuần trước"
    }
}



function  showPost(posts){
        let str=""
        for (const p of posts){
            countLike(p.id)
            let dateP=new Date(p.datePost);
            let time= checkdate(dateP)
            str+=`<div class="post-top">
                <div class="dp">
                    <img src="${p.account.avatar}" alt="">
                </div>
                <div class="post-info">
                    <p class="name">${p.account.fullName}</p>
                    <span class="time">${time}</span>
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
                        <i class="fas fa-thumbs-up"  style="color: #ffffff;
                         background-color: #0076e7; font-size: 10px; border-radius: 50%; padding: 5px"></i>
                        <span id="soLike${p.id}"></span>
                    </div>
                    <div class="quantity-comment" id="cmts${p.id}">
                        <span id="socmt${p.id}">4</span>
                        <span>bình luận</span>
                    </div>
                </div>
                <div class="post-bottom">
                    <div class="action" id="like${p.id}"  style="width: 50px;display: flex;justify-content: space-between" onclick="createLike(${p.id})">
                        <i class="far fa-thumbs-up" id="not-like${p.id}"></i>
                        <i class="fas fa-thumbs-up" id="liked${p.id}" style="display: none;"></i>
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

        for (const p of posts){
            checkLike(p.id)
        }


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
