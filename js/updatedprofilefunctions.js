
window.onload = function loadUser() {

    var inputUserProfile = localStorage.getItem("updatedProfileUsers");

    var userProfile = JSON.parse(inputUserProfile);

    document.getElementById("profileGivenName").innerHTML = userProfile[0].givenName;

    document.getElementById("profileFamilyName").innerHTML = userProfile[0].familyName;

    document.getElementById("profileEmail").innerHTML = userProfile[0].email;

    document.getElementById("profilePassword").innerHTML = userProfile[0].password;

    document.getElementById("birthdate").innerHTML = userProfile[0].birthdate;

    document.getElementById("gender").innerHTML = userProfile[0].gender;

    document.getElementById("address").innerHTML = userProfile[0].address;


}