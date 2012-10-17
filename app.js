$(function() {

  start();

  $(window).resize(resize);

  $(document).mousedown(function() {
    context.fillStyle='rgba(0,0,0,'+opacity+')';
  });

  $(document).mouseup(function() {
    context.fillStyle='rgb(0,0,0)';
  });
});
