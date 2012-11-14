$(function() {

  start();

  $(window).resize(resize);

  $('.speedometer li').click(function() {
    // toggle nav classes
    $('.speedometer li').removeClass('active');
    $(this).addClass('active');

    // toggle modal classes
    $('aside').hide();
    var this_id = $(this).data('modal');
    $('aside[data-modal='+this_id+']').show();

    // set star speed
    var index = $(this).index() + 1;
    set_speed(index * 4);

    // set overlay color
    $('.overlay').css('opacity', star_speed * .01);
  });

});
