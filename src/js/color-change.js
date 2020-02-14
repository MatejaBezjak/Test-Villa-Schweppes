console.log('gimme color!');
//work in progress


// var body = document.getElementById('body');

// $(function() {
//     $(window).scroll(function () {
//        if ($(this).scrollTop() > 2000) {
//           $(body).addClass('colorChange');
//        }
//        if ($(this).scrollTop() < 2000) {
//           $(body).removeClass('colorChange');
//        }
//     });
//  });

// var firstPosition = document.getElementById('firstPoint');
// var secondPosition = document.getElementById('secondPoint');
// var firstTopPos = $(firstPosition).height();
// var secondTopPos = $(secondPosition).height();


//    $(window).scroll(function () {
//          if ($(window).height() > firstTopPos) {
//             $('body').addClass('colorChange');
//             console.log('add black');
   
//          }
//          if ($(window).height() > secondTopPos) {
//             $('body').removeClass('colorChange');
//             console.log('remove black');
//          }else{
//            if ($(window).height() < secondTopPos) {
//               $('body').addClass('colorChange');
//               console.log('readd black');
   
//            }
//            if ($(window).height() < firstTopPos) {
//               $('body').removeClass('colorChange');
//               console.log('readd white');
//            }
//         }
//    });




// var firstPosition = document.getElementById('firstPoint');
// var secondPosition = document.getElementById('secondPoint');
// var firstTopPos = $(firstPosition).offset().top + Math.round(($(firstPosition).height()/100) * 0.7);
// var secondTopPos = $(secondPosition).offset().top + Math.round(($(secondPosition).height()/100) * 0.7);


//    $(window).scroll(function () {
//          if ($(window).offset().top > firstTopPos) {
//             $('body').addClass('colorChange');
//             console.log('add black');
   
//          }
//          if ($(window).offset().top > secondTopPos) {
//             $('body').removeClass('colorChange');
//             console.log('remove black');
//          }else{
//            if ($(window).offset().top < secondTopPos) {
//               $('body').addClass('colorChange');
//               console.log('readd black');
   
//            }
//            if ($(window).offset().top < firstTopPos) {
//               $('body').removeClass('colorChange');
//               console.log('readd white');
//            }
//         }
//    });