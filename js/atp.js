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

 var itemMid = $('.trio div');
   itemMid.on("click", function(){
     //remove active class attribute from siblings
     $(this).siblings().removeClass('active');
     //add active class attribute to clicked group
     $(this).addClass('active');
     //traverse and add active class attribute
     $(this).next().addClass('active');
   });
});
