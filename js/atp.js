$(document).ready(function(){

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
