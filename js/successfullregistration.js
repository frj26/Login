//This is a simple function connected to successfullregistration.hmtl that allow us to display the name of the person once it has registered.

//The function starts on loading the page.
window.onload = function loadUser() {
//First we tell the system to look in the local storage for the string stored under the key "users".
    var inputUserProfile = localStorage.getItem("users");
//Once the system has the string, we tell it to parse the string into objects.
    var userProfile = JSON.parse(inputUserProfile);
//Once we have all the objects, we tell the system to display the object inputGivenName in the html id givenName
    document.getElementById("givenName").innerHTML = userProfile[0].inputGivenName;
}