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

/* Fonction pour changer le thème */
function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark");

  // Si le thème sombre est activé, stocke-le dans le Local Storage
  if (element.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  }
  // Sinon, stocke le thème par défaut (clair) dans le Local Storage
  else {
    localStorage.setItem("theme", "light");
  }
}

/* Récupère le thème actuel à partir du Local Storage */
var currentTheme = localStorage.getItem("theme");

/* Si le thème est défini sur "sombre", active le thème sombre */
if (currentTheme === "dark") {
  document.body.classList.add("dark");

  /* Change l'icône du bouton en mode sombre */
  var image = document.getElementById("mode-toggle");
  image.src = "public/icon/icon_sun.svg";
  image.alt = "public/icon/icon_moon.svg";
}
else {
  /* Change l'icône du bouton en mode clair */
  var image = document.getElementById("mode-toggle");
  image.src = "public/icon/icon_moon.svg";
  image.alt = "public/icon/icon_sun.svg";
}

/* Applique le thème sauvegardé lorsqu'une nouvelle page est chargée */
window.addEventListener("load", function() {
  var currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    document.body.classList.add("dark");
  }
  else {
    document.body.classList.remove("dark");
  }
});

/* Enregistre le thème actuel dans le Local Storage avant de quitter la page */
window.addEventListener("beforeunload", function() {
  var element = document.body;
  if (element.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  }
  else {
    localStorage.setItem("theme", "light");
  }
});





