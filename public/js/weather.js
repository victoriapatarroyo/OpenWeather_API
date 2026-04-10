// Escucha el clic en el botón de búsqueda
document.getElementById("searchBtn").addEventListener("click", () => {
  // Obtiene el valor del input y elimina espacios en blanco al inicio y al final
  const city = document.getElementById("cityInput").value.trim();

  // Valida que el campo no esté vacío antes de hacer la petición
  if (!city) {
    alert("Ingresa una ciudad");
    return;
  }

  // Hace la petición al backend local, pasando el nombre de la ciudad como parámetro
  fetch(`http://localhost:3000/weather?city=${city}`)
    .then((response) => {
      // Si el servidor responde con un error (ej: ciudad no encontrada), lanza una excepción
      if (!response.ok) {
        throw new Error("Ciudad no encontrada");
      }
      // Convierte la respuesta a formato JSON para poder usar los datos
      return response.json();
    })
    .then((data) => {
      // Muestra el nombre de la ciudad retornado por la API
      document.getElementById("cityName").textContent = data.name;

      // Muestra la temperatura actual en grados Celsius
      document.getElementById("temperature").textContent =
        data.main.temp + " °C";

      // Capitaliza la primera letra de la descripción del clima (ej: "nublado" → "Nublado")
      const desc = data.weather[0].description;
      document.getElementById("description").textContent =
        desc.charAt(0).toUpperCase() + desc.slice(1);

      // Muestra el porcentaje de humedad
      document.getElementById("humidity").textContent =
        "Humedad: " + data.main.humidity + "%";

      // Obtiene el código ISO del país desde la respuesta (ej: "MX", "ES", "CO")
      const countryCode = data.sys.country;

      // Construye la URL de la bandera usando Flags API y la asigna a la imagen
      const flagImg = document.getElementById("countryFlag");
      flagImg.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
      flagImg.alt = `Bandera de ${countryCode}`;

      // Hace visible la imagen de la bandera (por defecto está oculta en el HTML)
      flagImg.style.display = "block";
    })
    .catch((error) => {
      // Muestra el mensaje de error si la petición falla o la ciudad no existe
      alert(error.message);
    });
});
