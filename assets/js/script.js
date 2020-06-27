// y-scroll portfolio
var pos = 0;
$(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0) {
        pos = pos + 50;
    }
    else {
        if (pos > 1) {

            pos = pos - 50;
        }
    }
    $('#yscroll').scrollLeft(pos)

});

// add 'active' class to active nav element
$(function () {
    $('nav a[href^="/templates' + location.pathname.split("/templates")[1] + '"]').addClass('active');
});