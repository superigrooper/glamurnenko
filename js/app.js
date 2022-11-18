$(document).ready(function() {
  var $window = $(window);
  var $header = $('.header');
  var $height = document.documentElement.clientHeight;

  $window.on('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $height) {
      $header.addClass('header--fixed');
    } else {     
      $header.removeClass('header--fixed');
    }
  });
});