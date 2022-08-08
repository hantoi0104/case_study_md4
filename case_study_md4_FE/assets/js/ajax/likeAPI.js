

function  createLike(id){
        let like={
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
            data: JSON.stringify(like),

            url: "http://localhost:8080/like",
            success: function () {
                countLike(id)
                checkLike(id)
            },
            error: function (err) {
                console.log(err)
            }
        })
}

function countLike(id){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },

        url: "http://localhost:8080/like/"+id,
        success: function (data) {
            let idP="soLike"+id;
            document.getElementById(idP).innerText=data;
        },
        error: function (err) {
            console.log(err)
        }
    })
}

function checkLike(postID){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'

        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },

        url: "http://localhost:8080/like/check/"+postID,
        success: function (data) {
            showLike(data,postID)
        },
        error: function (err) {
            console.log(err)
        }
    })

}

function showLike(data,postID){
    let id1="not-like"+postID
    let id2="liked"+postID
    let id3="like"+postID
    document.getElementById(id3).style.color="royalblue"

    if (data!=''){
        document.getElementById(id1).style.display="none"
        document.getElementById(id2).style.display="block"
    }else {
        document.getElementById(id1).style.display="block"
        document.getElementById(id2).style.display="none"
        // document.getElementById(id3).style.color="white"
    }




}