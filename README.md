
# Weather App

This is a web application that allows users to get the current weather and a 5-day forecast for a city. The application uses the OpenWeatherMap API to fetch the weather data.




#### Video Demo:

https://youtu.be/CUNRs72Tm0Q



#### Description:

Hi! I am Soumyadeb Batabyal and This my final poject for CS50. A web app called Weather App. This is actually a Node.js web application that allows users to get the current weather and 5-day forecast for a specific city. The app uses the OpenWeatherMap API to fetch the weather data and displays it in a user-friendly format using HTML, CSS, and EJS templating engine.

The front-end of the app is built using HTML and CSS. It has a simple form that takes a city name as input and a submit button to fetch the weather data for that city. The app displays the current weather conditions, including temperature, humidity, wind speed, and weather icon. It also displays a 5-day weather forecast, including the day of the week, weather conditions, temperature, humidity, and wind speed.

The back-end of the app is built using Node.js and the Express framework. It uses the request library to fetch the weather data from the OpenWeatherMap API. The app parses the weather data and extracts the required information, such as the current weather conditions and the 5-day forecast. The app then renders the data using the EJS templating engine and sends it to the client as an HTML page.

The app has error handling in place to handle cases where the user enters an invalid city name or if there is an error in fetching the weather data. The app displays an error message in such cases and prompts the user to try again.

Overall, this is a simple yet useful web application that allows users to get the weather forecast for any city in the world.

**The Weather App has the following features:

- User-friendly interface with a simple and intuitive design.
- Ability to enter any city name and retrieve weather data for that location.
- Display of current weather information, including temperature, humidity, and wind speed.
- Display of weather icons and descriptions to provide a visual representation of the weather conditions.
- Display of a 5-day weather forecast, including the day of the week, weather icon, temperature, humidity, and wind speed.
- Error handling for cases where the city name is not found or the weather data cannot be retrieved.

**The Weather App uses the following technologies:

- HTML - to create the structure of the web page.
- CSS - to style the web page and make it visually appealing.
- JavaScript - to add interactivity and functionality to the web page.
- Express - to handle server-side logic and routing.
- EJS - to render dynamic content on the web page.
- Request - to make API requests and retrieve weather data.


**If you wonder how to use this app follow these steps:

- Navigate to the Weather App web page i.e.,  https://64e6-116-206-201-212.ngrok-free.app/
- Enter the name of the city you would like to get weather data for in the input field provided.
- Click the "Get Forecast" button to retrieve the weather data.
- The current weather information and 5-day weather forecast will be displayed on the page.


**Implementation Details:

The Weather App is implemented as a Node.js application using the Express framework. The application uses the OpenWeatherMap API to retrieve weather data and displays the information on the web page.

**Server-side Logic:

The server-side logic for the Weather App is implemented in the app.js file. This file contains the following code:

```const express = require('express');
   const bodyParser = require('body-parser');
   const request = require('request');
```





