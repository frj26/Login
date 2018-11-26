var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides"); //ByClasNname is the same as ById, the div in html is just given a class name instead of an ID
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} // This if statement resets the slideIndex back to one, once the last slide is reached.
  if (n < 1) {slideIndex = slides.length} // This if statement make sure the last image is shown as the next one if the user clicks on the left arrow when the first slide is showing.
  for (i = 0; i < slides.length; i++) { //The images start at picture 1. When clicking on the next button, the picture count is increased with 1 which results in showing next image.
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; //This is needed so only one image is shown at a time.
  dots[slideIndex-1].className += " active";
} 
