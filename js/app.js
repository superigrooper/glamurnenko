$(document).ready(function() {

  // Прокрутка окна и фиксация меню
  const $window = $(window);
  const $header = $('.header');
  const $height = document.documentElement.clientHeight;

  $window.on('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $height) {
      $header.addClass('header--fixed');
    } else {
      $header.removeClass('header--fixed');
    }
  });

  // Бургер и мобильное меню
  $('.header__burger').click(function () {
    $(this).toggleClass('header__burger--active');
    $('.header__nav').toggleClass('header__nav--mobile');
    $('body').toggleClass('stop-scroll');
  })

  $('.header__nav-link').each(function(index, elem) {
    $(this).click(function () {
      $('.header__burger').toggleClass('header__burger--active');
      $('.header__nav').toggleClass('header__nav--mobile');
      $('body').toggleClass('stop-scroll');
    })
  })

  // Кнопка "наверх"
  $(".to-up").bind('click', function(e){
    e.preventDefault();
    $('body,html').animate({scrollTop: 0}, 600);
  });

  // Дата в футере
  $('.footer__now').html(new Date().getFullYear());
});

// Плагин fancybox
Fancybox.bind("#grouped-images img", {
  groupAll: true,
});
