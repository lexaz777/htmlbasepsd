// When we click on the 'menu-link'
$("li").click(function(){
  // If this isn't already active
  if (!$(this).hasClass("menu-link-active")) {
    // Remove the class from anything that is active
    $("li.menu-link-active").removeClass("menu-link-active");
    // And make this active
    $(this).addClass("menu-link-active");
  }
});

