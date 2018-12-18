var slideIndex = 1; //the index is 1 because we want to show the first picture first
showSlides(slideIndex); //this displays the first image

// Next/previous controls
function plusSlides(n) { //the keyword plusSlides refers to the keyword defined in the html product files.
  showSlides(slideIndex += n); // the slideindex will either be increased or decreased by 1. E.g. if the user clicks 'next', 1 will be added. 
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) { // The showSlides(n) function hides (display="none") all elements with the class name "mySlides", and displays (display="block") the element with the given slideIndex. 
  var i;
  var slides = document.getElementsByClassName("mySlides"); //ByClasNname is the same as ById, the div in html is just given a class name instead of an ID
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // This if statement resets the slideIndex back to one, once the last slide is reached.
  if (n < 1) {slideIndex = slides.length} // This if statement make sure the last image is shown as the next one if the user clicks on the left arrow when the first slide is showing.
  for (i = 0; i < slides.length; i++) { //The images start at picture 1. When clicking on the next button, the picture count is increased with 1 which results in showing next image.
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) { //the dots also start with one. When clicking on the next, the next dot gets highlighted
      dots[i].className = dots[i].className.replace(" active", ""); // the active refers to css, where we style the active dot in another color. If the dot is not used, it is empty and therefore in a default color.
  }
  slides[slideIndex-1].style.display = "block"; //This is needed so only one image is shown at a time.
  dots[slideIndex-1].className += " active";
} 
