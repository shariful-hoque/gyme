$(function () {
    'use strict';

    //Banner Slider Start
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        prevArrow: '<i class="fas fa-angle-left prv_arrow"></i>',
        nextArrow: '<i class="fas fa-angle-right nxt_arrow"></i>',
        speed: 1500,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                }
    },
  ]


    });

    //Manu Fix
    var navoffs = $('.main_menu').offset().top;

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoffs) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix');
        }

    });

    //Scroll Smooth
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1500, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });


    $('.venobox').venobox();

    //testi Part
    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 1500,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
  ]

    });
    //Counter Up
    $('.counter_up').counterUp({
        delay: 10,
        time: 1500
    });

    // theme Part

    $('.theme_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-angle-left prv_arrow_one"></i>',
        nextArrow: '<i class="fas fa-angle-right nxt_arrow_two"></i>',
        centerMode: true,
        centerPadding: '0px',

        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                }
    },
  ]
    });

    //Back To Top
    $('.bk_to_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000);
    });

    $(window).on('scroll', function () {
        var pagla = $(this).scrollTop();

        if (pagla > 500) {
            $('.bk_to_top').fadeIn()
        } else {
            $('.bk_to_top').fadeOut()
        }
    });






})
