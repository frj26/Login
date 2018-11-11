    // storing input from register-form
    //This is initializing an empty array to store the user.
var users = [];
//submit is referring to the submit button in html.
var submit = document.getElementById("submit");
    //This starts the function when click in submit.
submit.addEventListener("click",
    //Calling the values from the html.
function storeUser(event){
    event.preventDefault() //We do this so all the information is not just added to the url.
    var inputGivenName = document.getElementById('givenName').value;
    var inputFamilyName = document.getElementById('familyName').value;
    var inputBirthdate = document.getElementById('dayBirthdate').value + '/' + document.getElementById('monthBirthdate').value + '/' + document.getElementById('yearBirthdate').value;
    var inputGender = document.getElementById('gender').value;
    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;
    var inputRepeatPassword = document.getElementById('repeatPassword').value;
    var passwordLength = inputPassword.length;
    var emailFilter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-])+.+([a-zA-Z0-9]{2,4})+$/; //Email validation: it requires any character from a-z 0-9 caps or no caps, an @, an address hotmail a " . " and then at least two to four characters.
    // var passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/
    
    if(!emailFilter.test(inputEmail)){
        alert("Please enter a valid email address.")
    }
    else{
    
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
    if(inputGivenName && inputFamilyName && inputBirthdate && inputGender && inputEmail && inputPassword && inputRepeatPassword){

    var user = {inputGivenName, inputFamilyName, inputBirthdate, inputGender, inputEmail, inputPassword, inputRepeatPassword};
    // JSON has two functions: stringify(Type:Any) AND parse(Type:String)
    // var user = JSON.stringify(newuser); //create new type of user (newuser)
    //NOT inside this function: 
    //Use JSON.parse(*insert your string from locatStorage) and then assign the return value to a user object
    users.push(user);
    //JSON Stringidy is making all the objecs into a string so it can store it in the local storage.
    var usersString = JSON.stringify(users);
    //Saving the string into the local storage. "users" is the key, and userString is what is going to be saving.
    localStorage.setItem('users', usersString);

    document.location.href = 'successfullregistration.html';
    }
    else{
        alert("Please fill out all the fields to register.");
        }
            }
        }
    }
}
  );