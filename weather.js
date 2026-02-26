document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        alert("Ingresa una ciudad");
        return;
    }

    fetch(`http://localhost:3000/weather?city=${city}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ciudad no encontrada");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("cityName").textContent = data.name;
            document.getElementById("temperature").textContent = data.main.temp + " °C";
            document.getElementById("description").textContent = data.weather[0].description;
            document.getElementById("humidity").textContent =
                "Humedad: " + data.main.humidity + "%";
        })
        .catch(error => {
            alert(error.message);
        });
});