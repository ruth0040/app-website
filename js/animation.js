var $win = $(window);
var $icon = $('.icon');

$win.on('scroll', function () {
  // console.log($win.scrollTop());

});


$('.icon-section').waypoint(function () {
  $icon.addClass('js-icon-animate');
}, { offset: '60%' });
