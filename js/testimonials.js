var $testimonialsData = $.ajax('testimonials.json', {
  dataType: 'json'
});

$testimonialsData.done(function (data) {

  var rand = Math.round(Math.random() * (data.length -1) );

  $('.testimonials-name').html( data[rand].name );
  $('.testimonials-stars').html( data[rand].stars );
  $('.testimonials-para').html( data[rand].para );


});
