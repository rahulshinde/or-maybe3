$(document).ready( function(){
  var root_size = Math.sqrt($(window).height() * $(window).width()) * 0.017;
  $('html').css({ 'font-size': root_size });

  $(window).resize(changeRootFontSize);
})

changeRootFontSize = function(el) {
  root_size = Math.sqrt($(window).height() * $(window).width()) * 0.017;
  $('html').css({ 'font-size': root_size });
}