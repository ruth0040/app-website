// Carousel items
var $win = $(window);
var $items = $('.items img');
var $videoDialog = $('dialog');
// var $icon = $('.icon img');

dialogPolyfill.registerDialog($videoDialog.get(0));

var switchItem = function (current, incoming) {
  $items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
    $items.eq(current).hide().attr('data-state', '');
    $items.eq(incoming).attr('data-state', 'current')
  });
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
  var current = $items.filter('[data-state="current"]').index();
  var next = current + 1;

  if (next > $items.length - 1) {
    next = 0;
  }

  switchItem(current, next);

});

$('.previous').on('click', function () {
  var current = $items.filter('[data-state="current"]').index();
  var previous = current - 1;

// another option for making it count backwards
//  if (previous < 0)
//  previous = $items.length - 1;

  switchItem(current, previous);

});


//  Video Box
$('.btn-open').on('click', function () {
  $videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/81312446?autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> ');

  /* when triggering built in javascript functions we need to bypass jQuery in order to get to the raw javascript element we can use .get()

  example: $videoDialog.show() - will tigger jQuerys show function not the raw Javascript show function

        $videoDialog.get(0).show() - will get the first raw javascript element and trigger its native show function

  */
  $videoDialog.get(0).showModal();

  /*
  .show() allows users to interact with stuff behind the dialog
  .showModal() disables user interact with stuff behind the dialog
  */

});

$('.btn-close').on('click', function () {
  $videoDialog.get(0).close();
  $videoDialog.children('.video').html('');
});


// animating features


// $('.features-section').waypoint(function () {
//   $ships.eq(0).addClass('js-icon-delay-3');
//   $ships.eq(2).addClass('js-icon-delay-1');
//   $ships.eq(3).addClass('js-icon-delay-2');
//   $ships.addClass('js-icon-animate');
// }, { offset: '60%'});
