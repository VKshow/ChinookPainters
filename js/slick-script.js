$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
       autoplay: true,
//        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<button type="button" class="slick-prev"><img class="slider__arrow" src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img class="slider__arrow" src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});