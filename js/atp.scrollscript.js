$(document).ready(function(){

  // Header style change on scroll
  var lastScrollTop = 0, delta = 5;
   $(window).scroll(function(event){
      var st = $(this).scrollTop();

      if(Math.abs(lastScrollTop - st) <= delta)


      if (st > lastScrollTop){
          // downscroll code
          $( "#desktopmenuwrap" ).addClass("scrolldown").removeClass("scrollup");
      } else {
         // upscroll code
           $( "#desktopmenuwrap" ).addClass("scrollup").removeClass("scrolldown");
      }
      lastScrollTop = st;
   });
   
 });
