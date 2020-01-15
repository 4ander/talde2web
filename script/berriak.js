var HasierakoIrudia = 1;
irudiaErakutsi(HasierakoIrudia);

function HurrengoIrudira(n) {
  irudiaErakutsi(HasierakoIrudia += n);
}

function irekitakoIrudia(n) {
  irudiaErakutsi(HasierakoIrudia = n);
}

function irudiaErakutsi(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {HasierakoIrudia = 1}    
  if (n < 1) {HasierakoIrudia = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[HasierakoIrudia-1].style.display = "block";  
  dots[HasierakoIrudia-1].className += " active";
}