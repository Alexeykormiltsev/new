$(function () {
    $('.menu__btn').on('click', function () {
        $('.header__top-nav').toggleClass('header__top-nav--active');
        $('.header__nav').toggleClass('header__nav--active');
        $('.menu__btn').toggleClass('menu__btn--active');
        $('body').toggleClass('hidden');
        $('.main').toggleClass('main--active');
      });



    $('.slider').slick({
        dots: false,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1200,

        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',

        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    });
});