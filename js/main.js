var root_size;
var slideIndex = 0;

$(document).ready( function(){
  root_size = Math.sqrt($(window).height() * $(window).width()) * 0.017;
  $('html').css({ 'font-size': root_size });

  $('#about_link').mouseenter(addShow);
  $('#about_link').mouseleave(removeShow);

  $(window).resize(changeRootFontSize);
  carousel();
})

carousel = function() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > x.length) {slideIndex = 1} 
      x[slideIndex-1].style.display = "block"; 
      setTimeout(carousel,400); // Change image every 2 seconds
  }

changeRootFontSize = function(el) {
  root_size = Math.sqrt($(window).height() * $(window).width()) * 0.017;
  $('html').css({ 'font-size': root_size });
}

addShow = function() {
  $('#about_long_description').addClass('show');
}

removeShow = function() {
  $('#about_long_description').removeClass('show');
}