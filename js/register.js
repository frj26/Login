//This function is highly important to begin storing information in local storage which will be used in further functions.
//This javascript is connected to sign-in-forms or future called register.html.

//First we initialize a new array called users, where we will be storing the information from the html.
var users = [];

//Submit is referring to the submit button in html.
var submit = document.getElementById("submit");

//Now that the system is listening to the button "submit" in the html, once its clicked it begins the function.
submit.addEventListener("click",

//The function begins, and we add the preventDefault to avoid the function storing the information in the URL.
function storeUser(event){
    event.preventDefault() //We do this so all the information is not just added to the url.

    //First we tell the systemm to find the values in the html that we want to store.
    var inputGivenName = document.getElementById('givenName').value;
    var inputFamilyName = document.getElementById('familyName').value;

    //In the case of this value, we tell the system to englobe all the values in one variable with a specific format.
    var inputBirthdate = document.getElementById('dayBirthdate').value + '/' + document.getElementById('monthBirthdate').value + '/' + document.getElementById('yearBirthdate').value;
    var inputGender = document.getElementById('gender').value;
    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;
    var inputRepeatPassword = document.getElementById('repeatPassword').value;

    //Different of the case of the other variables, we look here not for the value of inputPassword, but for the length in order to make a password check.
    var passwordLength = inputPassword.length;

    //Here we add a variable to make a email check. With this, the email will need to have normal characters and numbers, an @, a ". (dot)", and at least two characters to end it.
    var emailFilter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-])+.+([a-zA-Z0-9]{2,4})+$/; //Email validation: it requires any character from a-z 0-9 caps or no caps, an @, an address hotmail a " . " and then at least two to four characters.
    // var passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/

    //First we tell the system to make a check on the email's format.
    if(!emailFilter.test(inputEmail)){
        alert("Please enter a valid email address.")
    }
    else{

        //If the email check throws false, the system proceed to check the password length.
        if(passwordLength<8){
            alert("Password must contain at least 8 characters.")
        }else {
            //If also the second check throws false again, now the system check that the filled in password and the repeat password match.
            if(inputPassword !== inputRepeatPassword){
                alert("Passwords doesn't match.")
        }else {
            //Now the system checks that all the fields in the html are filled in.
            if(inputGivenName && inputFamilyName && inputBirthdate && inputGender && inputEmail && inputPassword && inputRepeatPassword){

                //After the check throws true, the system proceeds to store all the values into one variable "user".
                var user = {inputGivenName, inputFamilyName, inputBirthdate, inputGender, inputEmail, inputPassword, inputRepeatPassword};

                //Now that we have the variable user, we tell the system to push it to our array "users".
                users.push(user);

                //JSON has two functions: stringify(Type:Any) AND parse(Type:String)
                //JSON Stringify is making all the objecs into a string so it can store it in the local storage.
    
                var usersString = JSON.stringify(users);
                //Now that we have a string created by JSON, we tell the system to store it in local storage under the key "users".
                localStorage.setItem('users', usersString);

                //Once it finishes, we tell the system to forwards us to the page succesfullregistration.hmtl
                document.location.href = 'successfullregistration.html';
            } else{
                alert("Please fill out all the fields to register.");
            }   

        }
        }

    }

}
);