/* =========================
   TEXT SCRAMBLE (HERO)
========================= */
(function scrambleText() {
  const element = document.getElementById("scramble-text");
  const original = element.textContent;
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let frame = 0;

  const update = () => {
    const output = original
      .split("")
      .map((char, i) => {
        if (i < frame) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    element.textContent = output;

    if (frame <= original.length) {
      frame++;
      requestAnimationFrame(update);
    } else {
      element.textContent = original;
    }
  };

  update();
})();

/* =========================
   MOBILE MENU
========================= */
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

/* =========================
   BACK TO TOP
========================= */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
