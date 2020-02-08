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



// $(window).ready(function() {

//     var winHeight = $(window).height();
//     var topLimit = winHeight * 0.2;
//     var bottomLimit = winHeight * 0.8;
//     $('body')
//         .height(winHeight)
//         .scrollie({

//         })
// })

// $(window).scroll(function(){
//     if($(this).scrollTop().offset().top - 200){
//         $('html, body').addClass('bkgr--black')
//     }
//     if($(this).scrollTop().offset().top - 1000){
//         $('html, body').removeClass('bkgr--black')
//     }
// });

// $(window).load(function() {
//     $("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
//     $(window).scroll(function(){
//         if($(window).height() >700){
//             $('html, body').addClass('bkgr--black')
//         }
//         if($(window).height() >= 7000){
//             $('html, body').removeClass('bkgr--black')
//         }
//     });
//   });


// $(window).scroll(function() {
    
//         if($(window).height().top -50){
//             $('html, body').addClass('bkgr--black')
//         }
//         if($(window).height().bottom -50){
//             $('html, body').removeClass('bkgr--black')
//         }
//   });





