$(document).ready(function(){

  var itemIntro = $(".introclick");
    itemIntro.click(function() {

     var trioItem = $(".introclick");
     var trioAdjacent = $(".introclick + .introwrap");

      if(trioItem.hasClass("active") || trioAdjacent.hasClass("active")){
        trioItem.removeClass("active");
        trioAdjacent.removeClass("active");
      }

     $(this).addClass("active");
     $(this).next().addClass("active");

   });

 var itemMid = $(".trio div");
   itemMid.click(function() {

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
