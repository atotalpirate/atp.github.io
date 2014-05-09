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

 var item = $(".trio div");
   item.click(function() {

    var trioItem = $(".trioitem");
    var trioAdjacent = $(".trioitem + .triospan");

     if(trioItem.hasClass("active") || trioAdjacent.hasClass("active")){
       trioItem.removeClass("active");
       trioAdjacent.removeClass("active");
     }

    $(this).addClass("active");
    $(this).next().addClass("active");

  });

});
