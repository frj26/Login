var users = [];
// storing input from register-form
function store() {
    var inputGivenName = document.getElementById('givenName').value;
    var inputFamilyName = document.getElementById('familyName').value;
    var inputEmail = document.getElementById('email').value;
    var inputPassword = document.getElementById('password').value;
    // Create a new user object var user1 = new User(firstName, lastName.....)
    var user = {inputGivenName, inputFamilyName, inputEmail, inputPassword};
     
 // JSON has two functions: stringify(Type:Any) AND parse(Type:String)
    // var user = JSON.stringify(newuser); //create new type of user (newuser)
    //NOT inside this function: 
    //Use JSON.parse(*insert your string from locatStorage) and then assign the return value to a user object
    users.push(user);
    
    var usersString = JSON.stringify(users);
    
    localStorage.setItem('users', usersString);

}