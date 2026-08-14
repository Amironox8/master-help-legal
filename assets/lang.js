(function () {
  var KEY = "mh-lang";
  var stored = null;

  try {
    stored = window.localStorage.getItem(KEY);
  } catch (e) {
    stored = null;
  }

  var initial = stored === "en" || stored === "ru"
    ? stored
    : ((navigator.language || "en").toLowerCase().indexOf("ru") === 0 ? "ru" : "en");

  function apply(lang) {
    document.body.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);

    var buttons = document.querySelectorAll(".lang button");

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", String(buttons[i].dataset.lang === lang));
    }

    try {
      window.localStorage.setItem(KEY, lang);
    } catch (e) {
      /* storage disabled — language still applies for this page view */
    }
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest(".lang button");

    if (button) {
      apply(button.dataset.lang);
    }
  });

  apply(initial);
})();
