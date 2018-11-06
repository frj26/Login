window.onload = function loadUser() {

    var inputUserProfile = localStorage.getItem("updatedProfileUsers");

    var userProfile = JSON.parse(inputUserProfile);

    document.getElementById("profileGivenName").innerHTML = userProfile[0].givenName;

}