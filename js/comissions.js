$(document).ready( function(){
  var root_size = Math.sqrt($(window).height() * $(window).width()) * 0.017;
  $('html').css({ 'font-size': root_size });

  $('.index_button').on('click', toggleIndex)

  $(window).resize(changeRootFontSize);
})

toggleIndex = function(){
  $('#project_index').toggleClass('show');
  $('.index_button').toggleClass('show');
}

changeRootFontSize = function(el) {
  root_size = Math.sqrt($(window).height() * $(window).width()) * 0.017;
  $('html').css({ 'font-size': root_size });
}