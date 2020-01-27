console.log('Yeeeeesh!');
$(document).ready(function(){
    $('.b-slider').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        rows: 0,
        // arrows: true,
        nextArrow: $('b-slider__arrows--right'),
        prevArrow: $('b-slider__arrows--left')
    });
});