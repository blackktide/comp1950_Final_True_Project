$(function() {
    var menuVisible = false;
    $('hamburger-menu').click(function() {
      if (menuVisible) {
        $('hamburger-menu').css({'display':'none'});
        menuVisible = false;
        return;
      }
      $('hamburger-menu').css({'display':'block'});
      menuVisible = true;
    });
    $('hamburger-menu').click(function() {
      $(this).css({'display':'none'});
      menuVisible = false;
    });
  });