let token = localStorage.getItem("token");
getAccount();
getProfile();
function getAccount(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/user",
        success: function (data) {
            console.log(data)
            document.getElementById("avatar-admin-info").src =`${data.avatar}`
            document.getElementById("fullName-admin-info").innerText = `${data.fullName}`;

        },
        error: function (err) {
            console.log(err)
        }
    })
}

function getProfile(){
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/profile",
        success: function (data) {
            console.log(data.id)
            show_Profile(data);
            show_editProfile(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function editProfile(){
    $.ajax({
        type: "PUT",
        headers: {
            'Accept': 'application/json'
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader ("Authorization", "Bearer " + token);
        },
        url: "http://localhost:8080/api/profile",
        success: function (data) {
            console.log(data)

        },
        error: function (err) {
            console.log(err)
        }
    })
}
function  show_Profile(profile){
    document.querySelector("#cover-profile-admin").src =`${profile.coverImg}`
    document.querySelector("#country-profile-info").innerHTML = profile.country;
    document.querySelector("#email-profile-info").innerHTML = profile.account.email;
    document.querySelector("#phone-profile-info").innerHTML = profile.phoneNumber;
    document.querySelector("#gender-profile-info").innerHTML =profile.gender;
    document.querySelector("#date-profile-info").innerHTML =profile.dateOfBirth;

}
function show_editProfile(profile){
    document.querySelector("#nameEdit").value = profile.account.fullName;
    document.querySelector("#emailEdit").value = profile.account.email;
    document.querySelector("#dateEdit").value = profile.dateOfBirth;
    document.querySelector("#genderEdit").value = profile.gender;
    document.querySelector("#addressEdit").value = profile.country;
    document.querySelector("#phoneEdit").value = profile.phoneNumber;
    document.querySelector("#imgCoverEdit").src =`${profile.coverImg}`
    document.querySelector("#imgAvatarEdit").src =`${profile.account.avatar}`
}