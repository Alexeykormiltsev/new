$(function(){
    $('.menu__btn').on('click', function () {
        $('.header__menu-inner').toggleClass('header__menu-inner--active');
        $('.menu__btn').toggleClass('menu__btn--active');
        $('body').toggleClass('hidden');
      });
});