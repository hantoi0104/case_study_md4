

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
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                console.log(err)
            }
        })





}