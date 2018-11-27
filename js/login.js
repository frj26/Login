// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

  // The constructor for our class, which will allow us to create new objects of our class
  constructor(firstname, lastname, email, password) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password; //this.hashPassword(password)
}

// // Simple function to hash passwords in order for us not to store them in clear text
// hashPassword(rawPassword){
//   var a = 1, c = 0, h, o;
//   if (rawPassword) {
//     a = 0;
//     // Jshint plusplus:false - This option prohibits the use of unary increment and decrement operators (++ , --)
//     // Jshint bitwise:false - This option prohibits the use of bitwise operators such as ^,| and others
//       for (h = rawPassword.length - 1; h >= 0; h--) {
//       o = rawPassword.charCodeAt(h);
//       a = (a<<6&268435455) + o + (o<<14);
//       c = a & 266338304;
//       a = c!==0?a^c>>21:a;
//     }
//   }else {
//     // If the password is not valid, we'll throw and error we're able to catch
//     throw new Error("The password supplied is not valid");
//   }
//   return String(a);
// }
}

// We set a debug variable in order to switch on or off debug mode of our small program
var debug = 1;

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
  
// Bind the two input fields and get the value
var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');
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
  // We loop through all our users and return true if we find a match
  for(var i = 0; i < users.length; i++) {

    // Bind user to a variable for easy use (what does this mean)
    var user = users[i];

    // // If debug mode is enabled, we console.log the user object from the list (not sure what this means)
    // if(debug == 1){
    //   console.log(user);
    // }

    // // We use a try-catch for the hash-password function, since something could go wrong.
    // try {

    //   // We try to create a variable with the hashed version of the inputPassword
    //   var hashedInputPassword = user.hashPassword(inputPassword.value);
    // } catch(error){

    //   // We console log any error that might have been thrown
    //   console.log(error);
    // }

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

  }else {
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

