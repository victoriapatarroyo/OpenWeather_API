require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");

const app = express();
const PORT = 3000;

// Seguridad básica (CSP incluida)
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

// CORS
app.use(cors());

// Servir frontend
app.use(express.static(path.join(__dirname, "../public")));

// Endpoint API
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

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
    res.status(404).json({ error: "Ciudad no encontrada" });
  }
});

// Ruta principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
