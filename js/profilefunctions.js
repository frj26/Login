
window.onload = function loadUser() {

    var inputUserProfile = localStorage.getItem("users");

    var userProfile = JSON.parse(inputUserProfile);

    document.getElementById("givenName").innerHTML = userProfile[0].inputGivenName;

    document.getElementById("familyName").innerHTML = userProfile[0].inputFamilyName;

    document.getElementById("email").innerHTML = userProfile[0].inputEmail;

}