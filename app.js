$(function() {

  start();

  $(window).resize(resize);

  $('.speedometer li').click(function() {
    var index = $(this).index() + 1;
    set_speed(index * 4);
  });
});
