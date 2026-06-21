/* LeviSens — site interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    // Close the menu after tapping a link (mobile)
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Accordion (Technology "How it works") ---- */
  document.querySelectorAll(".accordion__trigger").forEach(function (trigger) {
    const panel = document.getElementById(
      trigger.getAttribute("aria-controls")
    );
    if (!panel) return;

    trigger.addEventListener("click", function () {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
  });

  /* ---- Footer year ---- */
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
