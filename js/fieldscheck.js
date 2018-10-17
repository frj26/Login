var inputGivenName = document.getElementById('givenName');
  var inputFamilyName = document.getElementById('familyName');
  var inputEmail = document.getElementById('email');
  var inputPassword = document.getElementById('password');
  
function fieldscheck() {
var submit = true;
if (inputGivenName == null || inputGivenName == "") {
    givenNameError = "Please enter your Given Name."
    document.getElementById(givenName_error).innerHTML = nameError;
    submit = false;
    }
if (inputFamilyName == null || inputFamilyName == "") {
    familyNameError = "Please enter your Family Name."
    document.getElementById(familyName_error).innerHTML = familyNameError;
    submit = false;
    }
if (inputEmail == null || inputEmail == "") {
   emailError = "Please enter your Email."
    document.getElementById(email_error).innerHTML = emailError;
    submit = false;
    }
if (inputPassword == null || inputPassword == "") {
    passwordError = "Please enter your Email."
     document.getElementById(password_error).innerHTML = passwordError;
     submit = false;
    }
}

 function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("givenName").onkeyup = removeWarning;
document.getElementById("familyName").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("password").onkeyup = removeWarning;