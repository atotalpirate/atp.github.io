$(document).ready(function(){

// Header style change on scroll

// var vh = $(window).height();
  var intro = $("#intro").height();
  var declaration = $("#declaration").height();

  $(function(){
   var changeHeader = intro - 20;
    $(window).scroll(function() {
      var scroll = getCurrentScroll();
        if ( scroll >= changeHeader ) {
             $('.header').addClass('dark');
          }
          else {
              $('.header').removeClass('dark');
          }
    });
  function getCurrentScroll() {
      return window.pageYOffset;
      }
  });


});
