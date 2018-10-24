    // storing input from register-form
var users = [];

var submit = document.getElementById("submit");
    //This starts the function when click in submit.
submit.addEventListener("click",
    //Calling the values from the html.
function store(){
    var inputGivenName = document.getElementById('givenName').value;
    var inputFamilyName = document.getElementById('familyName').value;
    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;
    var inputRepeatPassword = document.getElementById('repeatPassword').value;
    var passwordLength = inputPassword.length;
    //For the password length check.
    if(passwordLength<8){
        alert("Password must contain at least 8 characters.")
        }
    else{
    //Password check.
    if(inputPassword !== inputRepeatPassword){
        alert("Passwords doesn't match.")
        }
    else{
    //All fields filled out check.
    if(inputGivenName && inputFamilyName && inputEmail && inputPassword && inputRepeatPassword){

    var user = {inputGivenName, inputFamilyName, inputEmail, inputPassword, repeatPassword};
    // JSON has two functions: stringify(Type:Any) AND parse(Type:String)
    // var user = JSON.stringify(newuser); //create new type of user (newuser)
    //NOT inside this function: 
    //Use JSON.parse(*insert your string from locatStorage) and then assign the return value to a user object
    users.push(user);
    //JSON Stringidy is making all the objecs into a string so it can store it in the local storage.
    var usersString = JSON.stringify(users);
    //Saving the string into the local storage. "users" is the key, and userString is what is going to be saving.
    localStorage.setItem('users', usersString);

    document.location.href = "successfullregistration.html";
    }
    else{
        alert("Please fill out all the fields to register.");
        }
    }
  }
}
  );