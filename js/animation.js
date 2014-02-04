// var $win = $(window);
// var $icon = $('.icon');

// $win.on('scroll', function () {
//   // console.log($win.scrollTop());

// });



// $('.icon-section').waypoint(function () {
//   $icon.addClass('js-icon-animate');
// }, { offset: '60%' });

var $icon = $('.icon img');

$('.icon-section').waypoint(function () {
  $icon.eq(0).addClass('js-icon-delay-3');
  $icon.eq(2).addClass('js-icon-delay-1');
  $icon.eq(3).addClass('js-icon-delay-2');
  $icon.addClass('js-icon-animate');
}, { offset: '60%'});
