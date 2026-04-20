// ── Referencias al DOM ──────────────────────────────────────────
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const themeToggle = document.getElementById("themeToggle");

// ── Inicialización del tema ─────────────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const defaultTheme = prefersDark ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", defaultTheme);
    updateThemeIcon(defaultTheme);
  }
}

// ── Cambiar icono del botón ─────────────────────────────────────
function updateThemeIcon(theme) {
  if (!themeToggle) return;

  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

// ── Toggle de tema ──────────────────────────────────────────────
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  updateThemeIcon(newTheme);
}

// ── Evento del botón de tema ────────────────────────────────────
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

// ── Evento de búsqueda ──────────────────────────────────────────
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Ingresa una ciudad");
    return;
  }

  fetch(`http://localhost:3000/weather?city=${city}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").textContent = data.name;

      document.getElementById("temperature").textContent =
        data.main.temp + " °C";

      const desc = data.weather[0].description;
      document.getElementById("description").textContent =
        desc.charAt(0).toUpperCase() + desc.slice(1);

      document.getElementById("humidity").textContent =
        "Humedad: " + data.main.humidity + "%";

      const countryCode = data.sys.country;

      const flagImg = document.getElementById("countryFlag");
      flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
      flagImg.alt = `Bandera de ${countryCode}`;
      flagImg.style.display = "block";
    })
    .catch((error) => {
      alert(error.message);
    });
});

// ── Inicializar al cargar ───────────────────────────────────────
document.addEventListener("DOMContentLoaded", initTheme);
