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

## 🎯 Project Overview

This project demonstrates:

- Client-server architecture  
- RESTful API integration  
- Asynchronous programming  
- Secure environment variable management  

The application allows users to:

- Enter a city name in Spanish  
- Retrieve current weather data  
- View temperature in Celsius  
- Display humidity and weather description  

---

## 💡 Why I Built This Project

I built this application to strengthen my understanding of Full Stack development fundamentals, particularly the interaction between frontend and backend systems.

My main goals were:

- To practice building a RESTful API using Express  
- To securely manage API keys using environment variables  
- To integrate a third-party API (OpenWeather)  
- To reinforce asynchronous programming concepts (`async/await`)  
- To apply clean separation of concerns between client and server  

This project reflects my commitment to building practical applications that simulate real-world development scenarios.

---

## 🚧 Challenges & Learnings

During the development of this project, I faced several practical challenges that helped me strengthen my technical foundation.

### 🔹 Handling Asynchronous Operations

Managing asynchronous requests between the frontend and backend required proper implementation of `async/await` and structured error handling.  
This reinforced my understanding of Promises and JavaScript’s non-blocking execution model.

### 🔹 Secure API Key Management

Instead of exposing the OpenWeather API key in the frontend, I implemented a backend layer using Express and managed the key with environment variables (`dotenv`).  
This deepened my understanding of security best practices in web applications.

### 🔹 Client-Server Communication

Designing and consuming a custom REST endpoint (`/weather`) improved my understanding of HTTP methods, status codes, and structured JSON responses.

### 🔹 Error Handling Strategy

Handling invalid city names and API errors required implementing appropriate HTTP status codes (404) and user-friendly frontend feedback.  
This strengthened my approach to building resilient applications.

### 🔹 Separation of Concerns

Structuring the project with a clear division between frontend and backend reinforced scalable architecture principles and clean code practices.

---

Through these challenges, I gained hands-on experience building a real-world web application and strengthened my Full Stack development foundation.

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


/weather?city=CityName


4. Backend calls the OpenWeather API.  
5. JSON response is returned.  
6. Frontend dynamically updates the UI.  

---

## 📡 API Endpoint

| Method | Endpoint  | Description                |
|--------|----------|----------------------------|
| GET    | /weather | Get weather data by city   |

### Example Request


http://localhost:3000/weather?city=Bogota


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
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/victoriapatarroyo/weather-app.git
cd weather-app
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create .env file
```
OPENWEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Start the server
```bash
node server.js
```

Server runs at: `http://localhost:3000`

Open `index.html` in your browser.

---

## 🧠 Technical Skills Demonstrated

- ⚙️ Full Stack development fundamentals
- 🔗 RESTful API integration
- ⏳ Asynchronous programming (async/await)
- 🖧 Client-server communication
- 🚨 HTTP error handling
- 🔐 Secure API key management
- 🗂️ Separation of concerns
- 🖱️ Dynamic DOM manipulation

---

## 🔮 Future Improvements

- 🌎 Display country flag
- 📅 5-day weather forecast
- 🌙 Dark mode
- 📍 Geolocation detection
- 🐳 Docker containerization
- ☁️ Cloud deployment

---

## 👩‍💻 Author

**Victoria Eugenia Patarroyo Villamil**  
Aspiring Full Stack Developer focused on building scalable and practical web applications.
