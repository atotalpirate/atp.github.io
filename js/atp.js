 $(function(){

  var $introClick, $introWrap;

  $introClick = $('.introclick');
  $introWrap = $('.introwrap');

  //Add event listener to clicked icon
  $introClick.on('click', function(){
    //remove active attribute on all siblings
    $(this).siblings().removeClass('active');
    //add active attribute to clicked icon and the content container next to it
    $(this).addClass('active');
    $(this).next().addClass('active');
  });

  //Remove active attribute from adjacent elements

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
