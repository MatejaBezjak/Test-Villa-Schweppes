var header = document.getElementById('header');
var sticky = header.offsetTop;



$(window).scroll(function(){
    event.preventDefault();
    if(window.pageYOffset > sticky){
        $('.b-header').addClass('b-header--sticky');
    }
    else{
        $('.b-header').removeClass('b-header--sticky');
    }
});