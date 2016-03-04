$(document).ready(function () {

$('.readmore').click(function (e) {
    e.preventDefault();
    $('#show-this-on-click').slideDown();
    $('.readmore').hide();
    $('.readless').show();
});

$('.readless').click(function (e) {
    e.preventDefault();
    $('#show-this-on-click').slideUp();
    $('.readless').hide();
    $('.readmore').show();
    });

$('.learnmore').click(function (e) {
    e.preventDefault();
    $('#learnmoretext').slideDown();
    $('.learnmore').hide();
    });

});