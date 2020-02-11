console.log('sticky!');

var header = document.getElementById('header');
var sticky = header.offsetTop;



$(window).scroll(function(){
    if(window.pageYOffset > sticky){
        $('.b-header').addClass('b-header--sticky');
        console.log('visible');
    }
    else{
        $('.b-header').removeClass('b-header--sticky');

        console.log('invisible');
    }
});