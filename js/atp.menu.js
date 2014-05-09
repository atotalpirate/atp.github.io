//Problem: Not cool with no mobile menu on this bitch
//Solution: Use jquery to build another separate mnav menu based on current nav items

//create small nav that is hidden
var $ul = $("<ul></ul>");
$ul.addClass("smallnav").hide();

//build small nav version of existing nav
  //append list item to smallNav for each existing link
  //append anchor to each list item
$("#menu a").each(function(){
  var $anchor = $(this);
  //create a new list item
  var $li = $("<li></li>");
  //create a new anchor tag
  var $a = $("<a></a>");
  //give new anchor tag correct href and text
  $a.attr("href", $anchor.attr("href")).text($anchor.text());
  //insert anchor tag inside list item
  $li.append($a);
  $ul.append($li);
});

//append list item with new anchor tag to $ul
$(".header").append($ul);

//Hokay. So now we have a some jquery that creates a new,
//separate copy of the whatever ul li a we have in the #menu wrapper

//Research how to create a css ONLY, responsive drop down
// menu with a hamburger.
  //or not css only. Maybe a little jquery toggle action?
