// Carga las variables de entorno
require("dotenv").config();

// Importación de dependencias
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");

const app = express();
const PORT = 3000;

// ── Seguridad con Helmet ───────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        connectSrc: ["'self'", "https://api.openweathermap.org"],
        imgSrc: [
          "'self'",
          "https://flagsapi.com",
          "https://openweathermap.org",
        ],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
      },
    },
  }),
);

// ── CORS ───────────────────────────────────────────────────────
app.use(cors());

// ── Archivos estáticos ─────────────────────────────────────────
app.use(express.static(path.join(__dirname, "../public")));

// ── Endpoint de clima ──────────────────────────────────────────
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  // Validación básica
  if (!city) {
    return res.status(400).json({ error: "Debe proporcionar una ciudad" });
  }

  if (!apiKey) {
    return res.status(500).json({ error: "API key no configurada" });
  }

  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: apiKey,
          units: "metric",
          lang: "es",
        },
      },
    );

    res.json(response.data);
  } catch (error) {
    // 🔥 Manejo de errores mejorado
    console.error(
      "Error en OpenWeather:",
      error.response?.data || error.message,
    );

    if (error.response) {
      return res.status(error.response.status).json({
        error: error.response.data.message || "Error al consultar el clima",
      });
    }

    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
});

// ── Ruta principal ─────────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// ── Inicialización del servidor ────────────────────────────────
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
