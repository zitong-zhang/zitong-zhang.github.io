// Language Switcher for al-folio
(function () {
  const STORAGE_KEY = "preferred-lang";
  const defaultLang = "zh";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || defaultLang;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    // Toggle content visibility
    document.querySelectorAll(".lang-zh").forEach(function (el) {
      el.style.display = lang === "zh" ? "" : "none";
    });
    document.querySelectorAll(".lang-en").forEach(function (el) {
      el.style.display = lang === "en" ? "" : "none";
    });

    // Update nav links text
    document.querySelectorAll("[data-lang-zh]").forEach(function (el) {
      el.textContent = lang === "zh" ? el.getAttribute("data-lang-zh") : el.getAttribute("data-lang-en");
    });

    // Update toggle button text
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.textContent = lang === "zh" ? "EN" : "中文";
      btn.setAttribute("data-current", lang);
    }
  }

  // Initialize on DOM ready
  document.addEventListener("DOMContentLoaded", function () {
    var lang = getLang();
    applyLang(lang);

    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var current = btn.getAttribute("data-current") || defaultLang;
        setLang(current === "zh" ? "en" : "zh");
      });
    }
  });
})();
