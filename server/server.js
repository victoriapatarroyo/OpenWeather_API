// Carga las variables de entorno definidas en el archivo .env (ej: OPENWEATHER_API_KEY)
require("dotenv").config();

// Importación de dependencias
const express = require("express"); // Framework para crear el servidor HTTP
const axios = require("axios"); // Cliente HTTP para consumir APIs externas
const cors = require("cors"); // Permite peticiones desde otros orígenes (Cross-Origin)
const path = require("path"); // Utilidad para manejar rutas de archivos del sistema
const helmet = require("helmet"); // Agrega cabeceras de seguridad HTTP automáticamente

const app = express();
const PORT = 3000;

// Configura Helmet con una política de seguridad de contenido (CSP) personalizada,
// controlando desde qué orígenes el navegador puede cargar cada tipo de recurso
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"], // Por defecto, solo recursos del propio servidor
        connectSrc: ["'self'", "https://api.openweathermap.org"], // Permite fetch/XHR hacia OpenWeather
        imgSrc: [
          "'self'",
          "https://flagsapi.com", // Permite cargar banderas de países
          "https://openweathermap.org", // Permite cargar íconos del clima
        ],
        scriptSrc: ["'self'", "'unsafe-inline'"], // Permite scripts propios e inline
        styleSrc: ["'self'", "'unsafe-inline'"], // Permite estilos propios e inline
      },
    },
  }),
);

// Habilita CORS para permitir que el frontend se comunique con el backend
// aunque estén en puertos o dominios distintos
app.use(cors());

// Sirve los archivos estáticos del frontend (HTML, CSS, JS) desde la carpeta /public
app.use(express.static(path.join(__dirname, "../public")));

// Endpoint principal: recibe el nombre de una ciudad y retorna su clima actual
app.get("/weather", async (req, res) => {
  const city = req.query.city; // Lee el parámetro ?city= de la URL
  const apiKey = process.env.OPENWEATHER_API_KEY; // Lee la API key desde las variables de entorno

  try {
    // Hace la petición a OpenWeather con la ciudad, la API key,
    // unidades métricas (°C) y respuestas en español
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: city,
          appid: apiKey,
          units: "metric", // Temperatura en Celsius
          lang: "es", // Descripción del clima en español
        },
      },
    );

    // Retorna al frontend los datos del clima tal como los entrega la API
    res.json(response.data);
  } catch (error) {
    // Si la ciudad no existe o la API falla, responde con un error 404
    res.status(404).json({ error: "Ciudad no encontrada" });
  }
});

// Ruta de fallback: sirve el index.html para cualquier ruta no definida
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Inicia el servidor y confirma en consola que está corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
