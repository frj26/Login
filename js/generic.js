// Navigation bar + webshop title used for a lot of pages - therefore we prefer to call it rather than using the same code in various pages.
// The IF-statement is done in order to failure handle. If we don't do it there will be a TypeError:
// It is a long line since it needs to be a string. Could've also have made it into more lines by using (+).

var navbar = document.getElementById("navbar");
if(navbar !== null) { // If there is no navigation bar, it will be car. 
  navbar.innerHTML = "<h1>SHOES</h1> <div class='navbar'> <a class='active' href='../Login/frontpage.html'>Home</a> <div class='dropdown'> <button id='loginbutton' class='dropbtn'>Log in / Sign up</button> <div class='dropdown-content'> <a href='login.html'>Log in</a> <a href='register.html'>Sign Up</a> </div> </div> <div class='dropdown'> <button class='dropbtn'>Men</button> <div class='dropdown-content'> <a href='../Login/menboots.html'>Boots</a> <a href='../Login/menloafers.html'>Loafers</a> <a href='../Login/mensneakers.html'>Sneakers</a> </div> </div> <div class='dropdown'> <button class='dropbtn'>Women</button> <div class='dropdown-content'> <a href='#'>Boots</a> <a href='#'>Heels</a> <a href='#'>Loafers</a> <a href='#'>Sneakers</a> </div> </div>";
}
