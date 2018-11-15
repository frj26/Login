var users = [];
var updatedProfileUsers = [];
var addAddress = document.getElementById("addAddress");

window.onload = function loadUser() {
    var inputUserProfile = localStorage.getItem("users");
    var userProfile = JSON.parse(inputUserProfile);

        var givenName = userProfile[0].inputGivenName;
        var familyName = userProfile[0].inputFamilyName;
        var birthdate = userProfile[0].inputBirthdate;
        var gender = userProfile[0].inputGender;
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

addAddress.addEventListener("click",

function addAddress(e){
    e.preventDefault()
    var inputUserProfile = localStorage.getItem("users");

    var userProfile = JSON.parse(inputUserProfile);

        var givenName = userProfile[0].inputGivenName;
        var familyName = userProfile[0].inputFamilyName;
        var email = userProfile[0].inputEmail;
        var password = userProfile[0].inputPassword;
        var birthdate = userProfile[0].inputBirthdate;
        var gender = userProfile[0].inputGender;
        var streetNumber = document.getElementById("streetNumber").value;
        var postalCode = document.getElementById("postalCode").value;
        var city = document.getElementById("city").value;
        var country = document.getElementById("country").value; 
        //We are calling street number, postal code, city, and country just to check that everything is filled in. As with the whole address we add comas and dots, when it saves that one it breaches the address fill check.
        //Now we make a var address with all the previous elements in order to make the address in one line.
        var address = document.getElementById("streetNumber").value + ', ' + document.getElementById("postalCode").value + '. ' + document.getElementById("city").value + ', ' + document.getElementById("country").value + '.';
    
if(streetNumber && postalCode && city && country){

    var user = {givenName, familyName, email, password, birthdate, gender, address};

    updatedProfileUsers.push(user);
    //JSON Stringify is making all the objecs into a string so it can store it in the local storage.
    var usersString = JSON.stringify(updatedProfileUsers);
    //Saving the string into the local storage. "users" is the key, and userString is what is going to be saving.
    localStorage.setItem('updatedProfileUsers', usersString);

    document.location.href = 'updatedprofile.html';
        }
else{alert("Please fill in your address.")
        }
    }
)