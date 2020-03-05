console.log('ajmo submenu');

var submenu = $('.b-header__submenu');
var submenuHeight = submenu.height();
var currentMousePos = 0;

$(document).mousemove(function(event) {
    currentMousePos = event.pageY;
});


// $(document).ready(function(){
//     $('.b-header__navigation-link').hover(
//         function(){
//         $(submenu).addClass('active');
//         console.log('down');
//         },
//         function(){
//             // if(currentMousePos > submenuHeight){
//                 $(submenu).removeClass('active');
//                 console.log(currentMousePos);
//                 console.log(submenuHeight);

//             // }
            

//         }
//     );
// });


$(document).ready(function(){
    $('.b-header__navigation-link-submenu').hover(
        function(){
        $(submenu).addClass('active');
        console.log('down');
        }
    );
    // $('.b-header__navigation-link-submenu').mouseout(
    //     function(){
    //     $(submenu).removeClass('active');
    //     console.log('down');
    //     }
    // );
    $(submenu).mouseleave(
        function(){
            $(submenu).removeClass('active');
            console.log(currentMousePos);
            console.log(submenuHeight);

        }
    );
});


