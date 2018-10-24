var users = [];

var addInformation = document.getElementById("addInformation");

window.onload = function loadUser() {

    var inputUserProfile = localStorage.getItem("users");

    var userProfile = JSON.parse(inputUserProfile);

        let givenName = userProfile[0].inputGivenName;

        let familyName = userProfile[0].inputFamilyName;

        let email = userProfile[0].inputEmail;

        let password = userProfile[0].inputPassword;

        // let password = userProfile[0].inputPassword

        // let repeatPassword = userProfile[0].inputRepeatPassword

    document.getElementById("givenName").innerHTML = givenName;

    document.getElementById("familyName").innerHTML = familyName;

    document.getElementById("email").innerHTML = email;

    document.getElementById("password").innerHTML = password;

}

addInformation.addEventListener("click",

function addInformation(){
    //It is working now, I just need to figure out how to bring the first information back and store it again.
    var givenName = document.getElementById("givenName");
    var familyName = document.getElementById("familyName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.getElementById("gender").value;
    var streetNumber = document.getElementById("streetNumber").value;
    var postalCode = document.getElementById("postalCode").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    var user = {givenName, familyName, email, password, birthdate, gender, streetNumber, postalCode, city, country, phoneNumber};

    users.push(user);
    //JSON Stringidy is making all the objecs into a string so it can store it in the local storage.
    var usersString = JSON.stringify(users);
    //Saving the string into the local storage. "users" is the key, and userString is what is going to be saving.
    localStorage.setItem('users', usersString);

    document.location.href = "successfullregistration.html";

    }
)

//Now we should add address and other things.
