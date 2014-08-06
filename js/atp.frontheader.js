//jQuery ready state function in short hand
$(function(){

    var intro = $("#intro").height();

    $(function(){
     var changeHeader = intro - 20;
      $(window).scroll(function() {
        var scroll = getCurrentScroll();
          if ( scroll >= changeHeader ) {
               $('.header').addClass('dark').removeClass('light');
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
