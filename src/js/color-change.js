console.log('gimme color!');

var body = document.getElementById('body');

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 2000) {
          $(body).addClass('colorChange');
       }
       if ($(this).scrollTop() < 2000) {
          $(body).removeClass('colorChange');
       }
    });
 });