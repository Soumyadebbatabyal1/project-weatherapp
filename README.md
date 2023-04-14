
# Weather App

This is a web application that allows users to get the current weather and a 5-day forecast for a city. The application uses the OpenWeatherMap API to fetch the weather data.




## Video Demo

https://youtu.be/CUNRs72Tm0Q


## URL of my weather-app

https://64e6-116-206-201-212.ngrok-free.app/


## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- EJS
- Request


## Features
- body-parser
- ejs
- express
- request 



## Code Overview

**The HTML file** 

`index.ejs`contains a form for users to enter a city name and a section to display the current weather and 5-day forecast. The CSS file `style.css` styles the HTML elements.


**JavaScript**

The JavaScript code (`app.js`) is responsible for handling the HTTP requests and responses. The Express.js framework is used to create an HTTP server. The EJS template engine is used to render the HTML file with dynamic data.

**Dependencies**
The `body-parser` package is used to parse the HTTP request body. The `request` package is used to make HTTP requests to the OpenWeatherMap API.

**Routes**

The `GET /` route serves the HTML file with empty data.

The `POST /` route receives the city name from the form, makes an HTTP request to the OpenWeatherMap API, and renders the HTML file with the weather and forecast data.

**OpenWeatherMap API**

The OpenWeatherMap API is used to fetch the weather data. The API key is stored in a constant variable `apiKey`. The API returns a JSON object with weather data for the specified city.

**Error Handling**

The application handles errors by rendering the HTML file with an error message if an error occurs while fetching the weather data or if the city is not found.

## Conclusion

 This weather application uses OpenWeather API to fetch data and rendering it in a web page. With further development, the application could be extended to include more features and functionality, such as allowing users to select units of measurement and displaying weather alerts for severe weather conditions.

