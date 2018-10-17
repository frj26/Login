   // Name and Password from the register-form
  var inputGivenName = document.getElementById('givenName');
  var inputFamilyName = document.getElementById('familyName');
  var inputEmail = document.getElementById('email');
  var inputPassword = document.getElementById('password');

  // storing input from register-form
  function store() {
      localStorage.setItem('givenName', inputGivenName.value);
      localStorage.setItem('familyName', inputFamilyName.value);
      localStorage.setItem('email', inputEmail.value);
      localStorage.setItem('password', inputPassword.value);
  }

//Should add Repeat password, and password check...
