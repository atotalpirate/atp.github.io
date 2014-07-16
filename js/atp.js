//jQuery ready state function in short hand
$(function(){
  //Declare variables
  var $introClick;

  //Cache click event locations
  $introClick = $('.introclick');

  //Add event listener to clicked icon
  $introClick.on('click', function(){
    //remove active attribute on all siblings
    $(this).siblings().removeClass('active');
    //add active attribute to clicked icon and the content container next to it
    $(this).addClass('active');
    $(this).next().addClass('active');
  });

  //Declare icons global variable
  var icons;
  //Setup request
  $.ajax({
    //Before requesting data
    beforeSend: function(xhr){
      //If supported, set MIME to prevent errors
      if (xhr.overrideMimeType){
        xhr.overrideMimeType("application/json");
      }
    }
  });

  //Function that collects data from the json file
  function loadIconInfo(){
    //Getting JSON file
    $.getJSON('js/front.json')
    //If successful, cache json data into icons variable
    .done(function(data){
      icons = data;
    //If there's a problem, display an error message
    }).fail(function(){
      var errorMessage = document.createElement('div').addClass('error').html('<em>SHIT!</em> Something went wrong. I\'m working on it.' );
      $('#middle').append(errorMessage);
    });

  }

  //Fire loadIconInfo();
  loadIconInfo();

  //Create on click event handler for front page icons
  $('.trioitem').on('click', function(){

    //Declare variables
    var newContent;
    //Get and cache ID attribute of clicked icon for use in looping
    var ID = this.id.toUpperCase();

    //Declare empty variable for creating new elements
    newContent = ' ';
    //Loop through JSON data to create new elements
    for (var i = 0; i < icons[ID].length; i++) {

      newContent += '<div class="thing ' + icons[ID][i].title.toLowerCase() + '">';
      newContent += '<div class="thing-content" style="background-image: url("' + icons[ID][i].logo.replace("[:space:]", "/") + '");"><div><span>' + icons[ID][i].title + '</span></div></div>';
      newContent += '</div>';

    }

    //Find existing JSON data and remove it
    $('.toolswrap').remove();
    //Build markup that hosts data drawn from JSON via ajax and inject newContent
    $(".trio").after('<div class="toolswrap">' + newContent + '</div>');

    //Remove active class attribute from other icons
    $('.trio .active').removeClass('active');
    $(this).addClass('active');
  });
});
