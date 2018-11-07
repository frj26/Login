var users = [];
var updatedProfileUsers = [];
var addInformation = document.getElementById("addInformation");

window.onload = function loadUser() {
    var inputUserProfile = localStorage.getItem("users");
    var userProfile = JSON.parse(inputUserProfile);

        var givenName = userProfile[0].inputGivenName;
        var familyName = userProfile[0].inputFamilyName;
        var birthdate = userProfile[0].inputBirthdate
        var gender = userProfile[0].inputGender
        var email = userProfile[0].inputEmail;
        var password = userProfile[0].inputPassword;

        // let password = userProfile[0].inputPassword

        // let repeatPassword = userProfile[0].inputRepeatPassword

    document.getElementById("givenName").innerHTML = givenName;
    document.getElementById("familyName").innerHTML = familyName;
    document.getElementById("birthdate").innerHTML = birthdate;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("email").innerHTML = email;
    document.getElementById("password").innerHTML = password;

}

addInformation.addEventListener("click",

function addInformation(e){
    e.preventDefault()
    var inputUserProfile = localStorage.getItem("users");

    var userProfile = JSON.parse(inputUserProfile);

        var givenName = userProfile[0].inputGivenName;
        var familyName = userProfile[0].inputFamilyName;
        var email = userProfile[0].inputEmail;
        var password = userProfile[0].inputPassword;
        var birthdate = document.getElementById("birthdate").value;
        var gender = document.getElementById("gender").value;
        var streetNumber = document.getElementById("streetNumber").value;
        var postalCode = document.getElementById("postalCode").value;
        var city = document.getElementById("city").value;
        var country = document.getElementById("country").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
    
if(birthdate && gender && streetNumber && postalCode && city && country && phoneNumber){

    var user = {givenName, familyName, email, password, birthdate, gender, streetNumber, postalCode, city, country, phoneNumber};

    updatedProfileUsers.push(user);
    //JSON Stringify is making all the objecs into a string so it can store it in the local storage.
    var usersString = JSON.stringify(updatedProfileUsers);
    //Saving the string into the local storage. "users" is the key, and userString is what is going to be saving.
    localStorage.setItem('updatedProfileUsers', usersString);

    document.location.href = 'updatedprofile.html';
        }
else{ alert("Please fill in all the information.")
        }
    }
)
