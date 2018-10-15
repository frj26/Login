// Footer that is used for various pages - easier to call this than make a new one.
// If the footer is undefined - this footer will be called (in case we use it)

var footer =  document.getElementById("footer");
if(footer !== null){
  footer.innerHTML = "<p>En rigtig fint tekst</p>";
}

