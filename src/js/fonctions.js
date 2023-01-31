$('a').click(function() {
    $('body').fadeOut(500, function() {
      window.location.href = $(this).attr('href');
    });
    return false;
  });
