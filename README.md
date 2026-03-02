# 🌦 Weather App – Full Stack Application

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express.js-API-lightgrey)
![Axios](https://img.shields.io/badge/Axios-HTTP-purple)
![OpenWeather](https://img.shields.io/badge/API-OpenWeather-blue)
![Status](https://img.shields.io/badge/Status-Production--Ready-success)

Full Stack web application that consumes the OpenWeather API to display real-time weather data based on a city name entered by the user.

---

## 📸 Preview

> (Add a screenshot inside an `/assets` folder and replace the file name below)

![App Screenshot](./assets/screenshot.png)

---

## 🎯 Project Overview

This project demonstrates client-server architecture, RESTful API integration, asynchronous programming, and secure environment variable management.

The application allows users to:

- Enter a city name in Spanish
- Retrieve current weather data
- View temperature in Celsius
- Display humidity and weather description

---

## 🏗 Architecture

### 🔹 Frontend
- Semantic HTML5
- CSS3 styling
- Vanilla JavaScript (ES6)
- Fetch API
- Dynamic DOM manipulation

### 🔹 Backend
- Node.js
- Express.js
- Axios for HTTP requests
- Dotenv for environment variables
- CORS configuration
- REST endpoint implementation

---

## 🔄 Application Flow

1. User enters a city name.
2. Frontend validates the input.
3. A GET request is sent to:


4. Backend calls the OpenWeather API.
5. JSON response is returned.
6. Frontend dynamically updates the UI.

---

## 📡 API Endpoint

| Method | Endpoint   | Description                |
|--------|------------|----------------------------|
| GET    | /weather   | Get weather data by city   |

### Example Request


### Example Response
```json
{
  "name": "Bogota",
  "main": {
    "temp": 18,
    "humidity": 65
  },
  "weather": [
    {
      "description": "overcast clouds"
    }
  ]
}

### Installation
git clone https://github.com/yourusername/weather-app.git
cd weather-app

### Install dependencies
npm install

### Create .env file
OPENWEATHER_API_KEY=your_api_key_here

### Start the server
node server.js
http://localhost:3000
Open index.html in your browser.

Technical Skills Demonstrated
Full Stack development fundamentals
RESTful API integration
Asynchronous programming (async/await)
Client-server communication
HTTP error handling
Secure API key management
Separation of concerns
Dynamic DOM manipulation

🔮 Future Improvements
🌎 Display country flag
📅 5-day weather forecast
🌙 Dark mode
📍 Geolocation detection

👩‍💻 Author
Victoria Eugenia Patarroyo Villamil
Aspiring Full Stack Developer focused on building scalable and practical web applications.
