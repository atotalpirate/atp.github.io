//jquery is ready
$(function() {

//push and slide menu variables
var $contactForm = $('.contact-form'),
    $pushHorizontal = $('.push-horizontal'),
    $showContact = $('#show-contact'),
    $desktopLogo = $('.logo-desktop'),
    $mobileLogo = $('.logo-mobile');


    $showContact.on('click', function(e){
      e.preventDefault();
      $(this).toggleClass('on');
      if ($(this).hasClass('on')) {
        $(this).text("Back");
      } else {
        $(this).text("Contact");
      }
      $contactForm.toggleClass('contact-form-on');
      $pushHorizontal.toggleClass('push-horizontal-on');
    });

    $desktopLogo.on('click', function(e){
      e.preventDefault();

      if ($contactForm.hasClass('contact-form-on')){
        $contactForm.toggleClass('contact-form-on');
        $pushHorizontal.toggleClass('push-horizontal-on');
      }
    });

    $mobileLogo.on('click', function(e){
      e.preventDefault();

      if ($("#contact").hasClass('contact-form-on')){
        $contactForm.toggleClass('contact-form-on');
        $pushHorizontal.toggleClass('push-horizontal-on');
      }
    });


    // $(window).scroll(function(){
    //   $showRightPush.removeClass('on');
    //   $menuRight.removeClass('cbp-spmenu-open');
    //   $body.removeClass('push-toleft');
    // });
});
