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

    var lastScrollTop = 0, delta = 5;
     $(window).scroll(function(){
        var st = $(this).scrollTop();

        if(Math.abs(lastScrollTop - st) <= delta) {
          if (st > lastScrollTop){
              // downscroll code
              $showRightPush.removeClass('on');
              $menuRight.removeClass('cbp-spmenu-open');
              $body.removeClass('cbp-spmenu-push-toleft');
          } else {
            // upscroll code
            $showRightPush.removeClass('on');
            $menuRight.removeClass('cbp-spmenu-open');
            $body.removeClass('cbp-spmenu-push-toleft');
          }
          lastScrollTop = st;
        }



     });


    // showTop.onclick = function() {
    //     classie.toggle( this, 'active' );
    //     classie.toggle( menuTop, 'cbp-spmenu-open' );
    //     disableOther( 'showTop' );
    // };
    //
    // showRightPush.onclick = function() {
    //     classie.toggle( this, 'active' );
    //     classie.toggle( body, 'cbp-spmenu-push-toleft' );
    //     classie.toggle( menuRight, 'cbp-spmenu-open' );
    //     disableOther( 'showRightPush' );
    // };

//     function disableOther( button ) {
//     if( button !== 'showLeft' ) {
//         classie.toggle( showLeft, 'disabled' );
//     }
//     if( button !== 'showRight' ) {
//         classie.toggle( showRight, 'disabled' );
//     }
//     if( button !== 'showTop' ) {
//         classie.toggle( showTop, 'disabled' );
//     }
//     if( button !== 'showBottom' ) {
//         classie.toggle( showBottom, 'disabled' );
//     }
//     if( button !== 'showLeftPush' ) {
//         classie.toggle( showLeftPush, 'disabled' );
//     }
//     if( button !== 'showRightPush' ) {
//         classie.toggle( showRightPush, 'disabled' );
//     }
// }

});
