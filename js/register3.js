var users = [];
// storing input from register-form
function store() {
    var inputGivenName = document.getElementById('givenName').value;
    var inputFamilyName = document.getElementById('familyName').value;
    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;
    var inputRepeatPassword = document.getElementById('repeatPassword');

    if(inputGivenName && inputFamilyName && inputEmail && inputPassword && inputRepeatPassword){
//Eh aqui el problema. Ver que funcione bien el if.
    // Create a new user object var user1 = new User(firstName, lastName.....)
    var user = {inputGivenName, inputFamilyName, inputEmail, inputPassword, repeatPassword};
     
 // JSON has two functions: stringify(Type:Any) AND parse(Type:String)
    // var user = JSON.stringify(newuser); //create new type of user (newuser)
    //NOT inside this function: 
    //Use JSON.parse(*insert your string from locatStorage) and then assign the return value to a user object
    users.push(user);
    
    var usersString = JSON.stringify(users);
    
    localStorage.setItem('users', usersString);

    document.location.href = "login.html";
    }
    else{
        alert("Fill out all the fields to register, and/or make sure the passwords match.");
    }
  }

    // window.location.href= "login.html" //Ver como le puedo hacer para que meta varios.