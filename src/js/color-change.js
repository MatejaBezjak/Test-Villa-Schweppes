//work in progress

var firstPosition = $('#firstPoint');
var secondPosition = $('#secondPoint');
var firstTopPos = firstPosition.offset().top + Math.round((firstPosition.height()/100) * 30);
var secondTopPos = secondPosition.offset().top + Math.round((secondPosition.height()/100) * 55);
var lastScrollPos = 0;
var bodyHasClass = false;
// console.log(firstPosition.height(), secondPosition.height());


$(window).scroll(function () {
    var pos = $(this).scrollTop();

    if(pos > lastScrollPos){
        console.log('scrolling down');
        if (pos > firstTopPos && pos < secondTopPos) {
            if(!bodyHasClass){
                $('body').addClass('colorChange');
                bodyHasClass = true;
                console.log('add black');

            }

        }
        if (pos > secondTopPos) {
            if(bodyHasClass){
                $('body').removeClass('colorChange');
                bodyHasClass = false;
                console.log('remove black');
            }
        }
    }else{
        if (pos < secondTopPos && pos > firstTopPos) {
            if(!bodyHasClass){
                $('body').addClass('colorChange');
                console.log('add black');
                bodyHasClass = true;
            }
            
        }
        if (pos < firstTopPos) {
            if(bodyHasClass){
                $('body').removeClass('colorChange');
                bodyHasClass = false;
                console.log('remove black');
            }
        }
        console.log('scrolling up');
        
    }


    lastScrollPos = pos;

});

