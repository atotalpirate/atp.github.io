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
var $contactForm = $('.contact-form'),
    $pushHorizontal = $('.push-horizontal'),
    $showContact = $('#show-contact');


    $showContact.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('on');
      if ($(this).hasClass('on')) {
        $(this).text("Back").fadeIn();
      } else {
        $(this).text("Contact").fadeIn();
      }
      $contactForm.toggleClass('contact-form-on');
      $pushHorizontal.toggleClass('push-horizontal-on');
    });


    // $(window).scroll(function(){
    //   $showRightPush.removeClass('on');
    //   $menuRight.removeClass('cbp-spmenu-open');
    //   $body.removeClass('push-toleft');
    // });
});
