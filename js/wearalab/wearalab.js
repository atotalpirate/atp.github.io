//jquery is ready
$(function() {

  $('a[href^="#"]').click(function(e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
      'scrollTop': $target.offset().top
  }, 1000, function () {
      window.location.hash = target;
  });
 });

//push and slide menu variables
var $menuRight = $('#cbp-spmenu-s2'),
    $menuTop = $('#cbp-spmenu-s3'),
    $showTop = $('#showTop'),
    $showRightPush = $('#showRightPush'),
    $body = $('body');


    $showRightPush.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('on');
      $menuRight.toggleClass('cbp-spmenu-open');
      $body.toggleClass('cbp-spmenu-push-toleft');
    });

    $showTop.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $menuTop.toggleClass('cbp-spmenu-open');
      $showRightPush.fadeToggle(300);
    });

    $(window).scroll(function(){
      $showRightPush.removeClass('on');
      $menuRight.removeClass('cbp-spmenu-open');
      $body.removeClass('cbp-spmenu-push-toleft');
    });
});
