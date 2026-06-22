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
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Accordion (Technology "How it works") ---- */
  document.querySelectorAll(".accordion__trigger").forEach(function (trigger) {
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    if (!panel) return;
    trigger.addEventListener("click", function () {
      const expanded = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
  });

  /* ---- Footer year (every .year span across pages) ---- */
  const y = String(new Date().getFullYear());
  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = y;
  });

  /* ---- Contact form (Web3Forms, AJAX submit) ---- */
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("form-status");
    const key = form.querySelector('input[name="access_key"]');
    const FALLBACK_EMAIL = "connect@levisens.tech";
    const keyConfigured =
      key && key.value && key.value.indexOf("REPLACE_WITH") === -1;

    function setStatus(msg, type) {
      if (!status) return;
      status.textContent = msg;
      status.className = "form-status" + (type ? " form-status--" + type : "");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Until the owner pastes a real access key, guide visitors to email us.
      if (!keyConfigured) {
        setStatus(
          "Our form isn’t live yet — please email us directly at " +
            FALLBACK_EMAIL + ".",
          "error"
        );
        return;
      }

      const submitBtn = form.querySelector(".form-submit");
      const original = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }
      setStatus("Sending your message…", "");

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (res) {
          return res.json().then(function (data) {
            return { ok: res.ok, data: data };
          });
        })
        .then(function (result) {
          if (result.ok) {
            form.reset();
            setStatus(
              "Thanks! Your message has been sent — we’ll be in touch soon.",
              "success"
            );
          } else {
            setStatus(
              (result.data && result.data.message) ||
                "Something went wrong. Please email us at " + FALLBACK_EMAIL + ".",
              "error"
            );
          }
        })
        .catch(function () {
          setStatus(
            "Network error. Please email us directly at " + FALLBACK_EMAIL + ".",
            "error"
          );
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = original;
          }
        });
    });
  }
})();
