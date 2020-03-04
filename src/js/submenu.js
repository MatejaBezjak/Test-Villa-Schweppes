console.log('ajmo submenu');

$(document).ready(function(){
    $('.b-header__navigation-link').hover(
        function(){
        $('.b-header__submenu').slideDown('medium') && $('.b-header__submenu').css('color', 'yellow');
        e.stopPropagation()
        console.log('down');
        },
        function(){
        $('.b-header__submenu').slideUp('medium');
        e.stopPropagation()
        console.log('up');

        }
    );
});