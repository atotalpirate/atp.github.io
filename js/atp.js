// Header style change on scroll

var vh = $(window).height();

$(function(){
 var shrinkHeader = vh / 2;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
           $('.header').addClass('shrink');
        }
        else {
            $('.header').removeClass('shrink');
        }
  });
function getCurrentScroll() {
    return window.pageYOffset;
    }
});
