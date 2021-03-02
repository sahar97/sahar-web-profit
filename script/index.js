
$(document).ready(function() {
    $("#panel ").css("display", "none");
  
    $("#flip , #close").click(function() {
        $("#panel").slideToggle("slow");
    });
  });
  



var slideIndex = 1;
         showSlides(slideIndex);
         
         // Next/previous controls
         function plusSlides(n) {
           showSlides((slideIndex += n));
         }
         
         function minusSlides(n) {
           showPrevSlides((slideIndex -= n));
         }
         
         // Thumbnail image controls
         function currentSlide(n) {
           showSlides((slideIndex = n));
         }
         
         function showSlides(n) {
           var i;
           var slides = document.getElementsByClassName("mySlides");
         
           var dots = document.getElementsByClassName("dot");
           if (n > slides.length) {
             slideIndex = 1;
             slides[slideIndex].className += "fade";
             slides[slideIndex].classList.remove("fade1");
           }
           if (n < 1) {
             slideIndex = slides.length;
           }
           for (i = 0; i < slides.length; i++) {
             slides[i].className += " fade";
             slides[i].classList.remove("fade1");
         
             slides[i].style.display = "none";
           }
           for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
           }
           slides[slideIndex - 1].style.display = "block";
           dots[slideIndex - 1].className += " active";
         }
         
         function showPrevSlides(n) {
           var i;
           var slides = document.getElementsByClassName("mySlides");
         
           var dots = document.getElementsByClassName("dot");
           if (n > slides.length) {
             slideIndex = 1;
             slides[slideIndex].className += "fade1";
             slides[slideIndex].classList.remove("fade");
           }
           if (n < 1) {
             slideIndex = slides.length;
           }
           for (i = 0; i < slides.length; i++) {
             slides[i].className += " fade1";
             slides[i].classList.remove("fade");
         
             slides[i].style.display = "none";
           }
           for (i = 0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace(" active", "");
           }
           slides[slideIndex - 1].style.display = "block";
           dots[slideIndex - 1].className += " active";
         }