var navbar = document.getElementById("navbar");
if(navbar !== null) {
  navbar.innerHTML = "<div class='navbar'> <a class='active' href='home'>Home</a> <div class='dropdown'> <button id='loginbutton' class='dropbtn'>Log in / Sign up</button> <div class='dropdown-content'> <a href='login.html'>Log in</a> <a href='sign-in-forms.html'>Sign Up</a> </div> </div> <div class='dropdown'> <button class='dropbtn'>Men</button> <div class='dropdown-content'> <a href='../menboots.html'>Boots</a> <a href='../menloafers.html'>Loafers</a> <a href='../mensneakers.html'>Sneakers</a> </div> </div> <div class='dropdown'> <button class='dropbtn'>Women</button> <div class='dropdown-content'> <a href='../womenboots.html'>Boots</a> <a href='../womenheels.html'>Heels</a> <a href='../womenloafers.html'>Loafers</a> <a href='../womensneakers.html'>Sneakers</a> </div> </div>";
}

// Footer that is used for various pages - easier to call this than make a new one.
// If the footer is undefined - this footer will be called (in case we use it)??
// The IF-statement is done in order to failure handle. If we don't do it there will be a TypeError:
var footer =  document.getElementById("footer");
if(footer !== null){
  footer.innerHTML = "<p class='footer-p'>This is our footer</p>";
}