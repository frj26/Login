// Footer that is used for various pages - easier to call this than make a new one.
// If the footer is undefined - this footer will be called (in case we use it)??
// The IF-statement is done in order to failure handle. If we don't do it there will be a TypeError:
var footer =  document.getElementById("footer");
if(footer !== null){
  footer.innerHTML = "<p class='footer-p'>This is our footer</p>";
}

var navbar = document.getElementById("navbar");
if(navbar !== null){
  navbar.innerHTML = "<p class='navbar-p'></p>";
    
}
