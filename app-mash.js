$(function() {

  start();

  $(window).resize(resize);

  var key_count = 0;
  var last_key = '';
  var flash_frequency = 0;

  function starfield_react() {
    if (key_count * 4 > 0) {
      set_speed(key_count * 7);
      $('.overlay').css('opacity', star_speed * .01);
      $('h1.mash').blink({ delay : 400 });
    }
    else {
      set_speed(1);
      $('.overlay').css('opacity', 0);
    }
  }

  $(document).keydown(function(key) {
    if (key.keyCode !== last_key.keyCode) {
      key_count++;
    }
    last_key = key;
    starfield_react();
  });

  $(document).keyup(function() {
    key_count--;
    starfield_react();
  });

});
