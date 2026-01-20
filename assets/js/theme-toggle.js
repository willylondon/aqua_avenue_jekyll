(() => {
  const root = document.documentElement;
  const key = "theme";

  const btn = document.getElementById("theme-toggle");
  const icon = document.querySelector(".theme-toggle-icon");

  const heroToggle = document.getElementById("hero-theme-toggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (icon) icon.textContent = theme === "light" ? "☀️" : "🌙";
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(key);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(key, next);
    applyTheme(next);
  }

  // init
  applyTheme(getPreferredTheme());

  // top-right toggle button
  if (btn) {
    btn.addEventListener("click", toggleTheme);

    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  // hero dark mode card toggle
  if (heroToggle) {
    heroToggle.addEventListener("click", toggleTheme);

    heroToggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleTheme();
      }
    });
  }
})();
