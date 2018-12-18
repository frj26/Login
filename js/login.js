// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(firstname, lastname, email, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
  }
}

// Initialize an empty array
var users = [];

// Fill it up with a few users
users.push(new User("Mie", "Høiby", "mh@gmail.com", "123123"));
users.push(new User("Marcelo", "Javelly", "mj@mail.com", "123123"));
users.push(new User("Frederik", "Rysgaard", "fr@mail.com", "123123"));

// Bind the button to a variable for later use
var submit = document.getElementById('submit');

// States that the user only has three attempts to login.
var counter = 3;

// Bind the span for result text for later use
var resultSpan = document.getElementById('loginResult');

// Bind the onClick-function to our own function called authUser. When the user clicks, the function starts
submit.onclick = function authUser(){
  
  var inputEmail = document.getElementById('email');
  var inputPassword = document.getElementById('password');
  
  if (!localStorage.getItem("users")){
    // We loop through all our users and return true if we find a match
    for (var i = 0; i < users.length; i++) {
    
      // Bind user to a variable for easy use (what does this mean)
      var user = users[i];

      if (user.email == inputEmail.value && user.password == inputPassword.value){
        window.location = "../login/frontpage.html";
      }
    }
  }
  else {
  
// Bind the two input fields and get the value
var inputUserProfile = localStorage.getItem("users");
var profileInfo = JSON.parse(inputUserProfile); 
var emailCheck = profileInfo[0].inputEmail;
var passwordCheckEncr = profileInfo[0].inputPassword;
var passwordCheck = window.atob(passwordCheckEncr);

  // The user is not able to leave the email or password fields blank
  if(inputEmail.value.length == 0 || inputPassword.value.length == 0){
    
    // We set the resultspan with a new text and return false to get out of this function
    resultSpan.innerText = "You need to enter an email and password in order to use the system";
    return false;
  }

    // If username and password matches one from our loop
    if(emailCheck == inputEmail.value && passwordCheck == inputPassword.value) {  
      
      // Relocates to the front-page (you are logged in)
      window.location = "../login/frontpage.html";

      
      // Return true to jump out of the function, since we now have all we need.
      return true;
    }
  }

  // We check if the user has tried to enter a wrong username and password too many times
  if(counter == 0){
    // Since the user has tried three times, we let the user know that he's been banned
    resultSpan.innerText = "You've entered the wrong email or password three times. You've been banned from our system";

    // Disable the two input fields and the button in order for the user to not make any trouble
    inputEmail.disabled = true;
    inputPassword.disabled = true;
    submit.disabled = true;

    // Return false to stop us from doing anything further.
    return false;

  }
  
  else {
    // Since we did not find a match, we know that the user has typed a wrong password and username
    resultSpan.innerText = "You've entered an email or password that does not match our stored credentials";

    // Update the counter with an attempt of logging in.
    counter--;

    // Return false, since we do not have anything more to do
    return false;
    }
  };
// This function is for resetting the password
function resetPassword() {
    var emailFilter = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9-])+.+([a-zA-Z0-9]{2,4})+$/; //requirements for writing a email
    var txt;
    var email = prompt("If you want a new password sent to your email, please enter your email below:"); //this text appears in the pop-up box
    if (email == null || email == ""){
      txt = "No email was sent"; //if the users doesn't fill in text or closes the pop-up box, a text with 'no mail was sent' will appear
    } else if (!emailFilter.test(email)) {
        alert("Please enter a valid email address.")
        txt = "No email was sent"; //if the user don't meet the email requirements, the text will also say no email was sent
    } else {
        txt = "An email was sent to " + email; //if the user fill in the email, this text will appear + the email the user wrote
    }
    document.getElementById("passwordReset").innerHTML = txt;
  }