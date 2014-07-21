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
    var newContent, ID, $toolsWrap;
    //Get and cache ID attribute of clicked icon for use in looping
    ID = this.id.toUpperCase();

    //Declare empty variable for creating new elements
    newContent = ' ';
    //Loop through JSON data to create new elements
    var title, logo, desc, link;
    for (var i = 0; i < icons[ID].length; i++) {

      title = icons[ID][i].title;
      logo = icons[ID][i].logo;
      desc = icons[ID][i].desc;
      link = icons[ID][i].link;

      newContent += '<a target="_blank" class="' + title.toLowerCase() + '" href="' + link + '">';
      newContent += '<div class="thing" style="background: url(' + logo + ');">';
      newContent += '<div class="thing-content"><div><span>' + title + '</span></div></div>';
      newContent += '</div>';
      newContent += '</a>';

    }

    //Cache $toolsWrap
    $toolsWrap = $('.toolswrap');
    //Find existing JSON data and fade out and remove it
    $toolsWrap.remove();
    //Build markup that hosts data drawn from JSON via ajax and inject newContent
    $('<div class="toolswrap">' + newContent + '</div>').insertAfter('.trio').hide().show('drop', 500);


    //Remove active class attribute from other icons
    $('.trio .active').removeClass('active');
    $(this).addClass('active');
  });
});
