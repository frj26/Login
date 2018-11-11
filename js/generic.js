// Navigation bar used for a lot of pages - therefore we prefer to call it rather than using the same code in various pages.
// The IF-statement is done in order to failure handle. If we don't do it there will be a TypeError:
// It is a long line since it needs to be a string (as far as we know).

var navbar = document.getElementById("navbar");
if(navbar !== null) {
  navbar.innerHTML = "<div class='navbar'> <a class='active' href='../Login/frontpage.html'>Home</a> <div class='dropdown'> <button id='loginbutton' class='dropbtn'>Log in / Sign up</button> <div class='dropdown-content'> <a href='login.html'>Log in</a> <a href='sign-in-forms.html'>Sign Up</a> </div> </div> <div class='dropdown'> <button class='dropbtn'>Men</button> <div class='dropdown-content'> <a href='../Login/menboots.html'>Boots</a> <a href='../Login/menloafers.html'>Loafers</a> <a href='../Login/mensneakers.html'>Sneakers</a> </div> </div> <div class='dropdown'> <button class='dropbtn'>Women</button> <div class='dropdown-content'> <a href='../Login/womenboots.html'>Boots</a> <a href='../Login/womenheels.html'>Heels</a> <a href='../Login/womenloafers.html'>Loafers</a> <a href='../Login/womensneakers.html'>Sneakers</a> </div> </div>";
}



// Footer that is used for various pages - easier to call this than make a new one.
// If the footer is undefined - this footer will be called (in case we use it)?
// The IF-statement is done in order to failure handle. If we don't do it there will be a TypeError:
