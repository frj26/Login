function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i; //initializing the variables
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUl");
  li = ul.getElementsByTagName("li");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
    } else {
        li[i].style.display = "none";
    }
  }
}