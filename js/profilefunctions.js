//This function does two things:
//1. Load the information stored in local storage to personalize the profile.
//2. Save the address information to have a more extended profile.

//First we create a new array that will include the already stored information plus the address information.
var updatedProfileUsers = [];

//In here we are telling the system to call the button called "addAddress" for a later use.
var addAddress = document.getElementById("addAddress");

//This function will load with the opening of the page. And it will load the information on local storage to display it on the html.
window.onload = function loadUser() {
    
    //Here we are telling the system to look for the information stored in local storage with the key "users".
    var inputUserProfile = localStorage.getItem("users");
    
    //Once we have the information, we tell the system to parse it as it was stored as a string.
    var userProfile = JSON.parse(inputUserProfile);
    
    //Now that we have the information parsed, we can look into the objects and look for the exact value that we want to display on the html.
    //We assign the information to new variables. 
    var givenName = userProfile[0].inputGivenName;
    var familyName = userProfile[0].inputFamilyName;
    var birthdate = userProfile[0].inputBirthdate;
    var gender = userProfile[0].inputGender;
    var email = userProfile[0].inputEmail;
    var password = userProfile[0].inputPassword;
    
    //Next we are telling the system to display the value of the previous variables in the html in order to personalize it.
    document.getElementById("givenName").innerHTML = givenName;
    document.getElementById("familyName").innerHTML = familyName;
    document.getElementById("birthdate").innerHTML = birthdate;
    document.getElementById("gender").innerHTML = gender;
    document.getElementById("email").innerHTML = email;
    document.getElementById("password").innerHTML = password;

}
//Here the second function begins.
//We tell the system to listen to a click in the button assigned previously with the name "addAddress".
//Once it is clicked it will begin the function.
addAddress.addEventListener("click",

//This function begins with preventDefault in order to prevent the information of being stored in the URL.
function addAddress(e){
    e.preventDefault()

    //First we tell the system again to find the information stored in local storage under the key "users", as we wich to save this information together with the added information, and not separately.
    var inputUserProfile = localStorage.getItem("users");

    //Once we have the string stored in local storage, we tell the system to parse it in order to find the objects stored.
    var userProfile = JSON.parse(inputUserProfile);

    //Now here we tell the system to call the specific values of the objects that we wish to save again.
    var givenName = userProfile[0].inputGivenName;
    var familyName = userProfile[0].inputFamilyName;
    var email = userProfile[0].inputEmail;
    var password = userProfile[0].inputPassword;
    var birthdate = userProfile[0].inputBirthdate;
    var gender = userProfile[0].inputGender;
    
    //In this variables we tell the system to find the values added to the html, in this case the address.
    //We are calling street number, postal code, city, and country just to check that everything is filled in. As with the whole address we add comas and dots, when it saves that one it breaches the address fill check.
    var streetNumber = document.getElementById("streetNumber").value;
    var postalCode = document.getElementById("postalCode").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value; 
    
    //Now we make a var address with all the previous elements in order to make the address in one line.
    var address = document.getElementById("streetNumber").value + ', ' + document.getElementById("postalCode").value + '. ' + document.getElementById("city").value + ', ' + document.getElementById("country").value + '.';
    //As we called the address variables one by one to make a check that everything is filled in, the system now checks that everything is filled in before it proceeds.

    if(streetNumber && postalCode && city && country){

        //Once everything is filled in, we create a variable with all the objects. Thats why we use {} and not [] or ().
        var user = {givenName, familyName, email, password, birthdate, gender, address};

        //Now we tell the system to push into the array we created before the variable created before.
        updatedProfileUsers.push(user);

        //JSON Stringify is making all the objecs into a string so it can store it in the local storage.
        var usersString = JSON.stringify(updatedProfileUsers);

        //Now that we have a string, we tell the system to save it under the key "updatedProfileUsers".    
        localStorage.setItem('updatedProfileUsers', usersString);

        //Once it saves the information, it proceeds to forwards us to the updatedprofile.html page.
        document.location.href = 'updatedprofile.html';
        
    }

    else{
        alert("Please fill in your address.")
    }
}

)