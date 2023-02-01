$('.card').on('mousemove', function(e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
  
    $(this).css({
      transform: 'translate(-' + x / 20 + '%, -' + y / 20 + '%)'
    });
  });