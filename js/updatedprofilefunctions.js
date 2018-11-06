
window.onload = function loadUser() {

    var inputUserProfile = localStorage.getItem("updatedProfileUsers");

    var userProfile = JSON.parse(inputUserProfile);

    document.getElementById("profileGivenName").innerHTML = userProfile[0].givenName;

    document.getElementById("profileFamilyName").innerHTML = userProfile[0].familyName;

    document.getElementById("profileEmail").innerHTML = userProfile[0].email;

    document.getElementById("profilePassword").innerHTML = userProfile[0].password;

    document.getElementById("birthdate").innerHTML = userProfile[0].birthdate;

    document.getElementById("gender").innerHTML = userProfile[0].gender;

    document.getElementById("streetNumber").innerHTML = userProfile[0].streetNumber;
    
    document.getElementById("postalCode").innerHTML = userProfile[0].postalCode;

    document.getElementById("city").innerHTML = userProfile[0].city;

    document.getElementById("country").innerHTML = userProfile[0].country;

    document.getElementById("phoneNumber").innerHTML = userProfile[0].phoneNumber;


}