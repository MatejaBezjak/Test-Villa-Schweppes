console.log('Yeeeeesh!');
$(document).ready(function(){
    $('.b-slider').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
        rows: 0,
        arrows: false
    });
});

function mobileOnly(){
        $('.b-evenements__slider').slick({
            autoplay: false,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            dots: true,
            adaptiveHeight: true,
            infinite: true,
            arrows: false
        });
}

if(window.innerWidth < 768){
    mobileOnly();
}
else{
    if($('.b-evenements__slider').hasClass('slick-initialized')){
        $('.b-evenements__slider').slick('unslick');
    }
    console.log('yay')

}

$(window).resize(function(e){
    if(window.innerWidth < 768){
        if(!$('.b-evenements__slider').hasClass('slick-initialized')){
            this.mobileOnly();
        }
    }else{
        if($('.b-evenements__slider').hasClass('slick-initialized')){
            $('.b-evenements__slider').slick('unslick');
        }
    }
});