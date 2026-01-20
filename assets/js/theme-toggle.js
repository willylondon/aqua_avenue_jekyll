(() => {
  const root = document.documentElement;
  const key = "theme";
  const btn = document.getElementById("theme-toggle");
  const icon = document.querySelector(".theme-toggle-icon");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (icon) icon.textContent = theme === "light" ? "☀️" : "🌙";
  }

  function getPreferredTheme() {
    const saved = localStorage.getItem(key);
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  // init
  applyTheme(getPreferredTheme());

  // toggle
  if (btn) {
    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme") || "dark";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem(key, next);
      applyTheme(next);
    });

    // keyboard accessibility
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  }
})();
