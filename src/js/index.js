$('.card').on('mousemove', function(e) {
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
  
    $(this).css({
      transform: 'translate(-' + x / 20 + '%, -' + y / 20 + '%)'
    });
  });


/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
(function($) {
  var s,
  spanizeLetters = {
    settings: {
      letters: $('.js-spanize'),
    },
    init: function() {
      s = this.settings;
      this.bindEvents();
    },
    bindEvents: function(){
      s.letters.html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
    },
  };
  spanizeLetters.init();
})(jQuery);





var toggle_btn = document.getElementById('theme-btn');
var body = document.getElementsByTagName('body')[0];
var light_theme_class = 'light';

toggle_btn.addEventListener('click', function() {
 if (body.classList.contains(light_theme_class)) {
 body.classList.remove(light_theme_class);
}
 else {
 body.classList.add(light_theme_class);
}
});