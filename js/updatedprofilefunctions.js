//This is a simple function connected to successfullregistration.hmtl that allow us to display the name of the person once it has registered.

//The function starts on loading the page.
window.onload = function loadUser() {
//First we tell the system to look in the local storage for the string stored under the key "users".
    var inputUserProfile = localStorage.getItem("updatedProfileUsers");
//Once the system has the string, we tell it to parse the string into objects.
    var userProfile = JSON.parse(inputUserProfile);
//Once we have all the objects, we tell the system to display the objects that we wish to display on the html.
    document.getElementById("profileGivenName").innerHTML = userProfile[0].givenName;

    document.getElementById("profileFamilyName").innerHTML = userProfile[0].familyName;

    document.getElementById("profileEmail").innerHTML = userProfile[0].email;

    document.getElementById("profilePassword").innerHTML = userProfile[0].password;

    document.getElementById("birthdate").innerHTML = userProfile[0].birthdate;

    document.getElementById("gender").innerHTML = userProfile[0].gender;

    document.getElementById("address").innerHTML = userProfile[0].address;
}