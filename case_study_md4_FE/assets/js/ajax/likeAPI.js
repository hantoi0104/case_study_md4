

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