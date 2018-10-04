var submit = document.getElementById('submit');
var attempt = 3; // States that there is 3 attempts to login

submit.onclick = function(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  if(username === "123" && password === "123123"){
    window.location = "success.html"; // Relocates to the success-page (you are logged in)
    return false;
  }
  else{
  attempt --; // Decrementing by one (one less attempt):

  document.getElementById("loginResult").innerText = "Something was wrong. You have "+attempt+" attempt left.";
  

  if( attempt == 0){
  document.getElementById("username").disabled = true;
  document.getElementById("password").disabled = true;
  document.getElementById("submit").disabled = true;
  window.location = "resetpassword.html"; // Relocates to a page, where you can reset password.
  return false;
  }
  }

  console.log("Button is clicked");
    
};
