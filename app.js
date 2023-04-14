const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '2ee2537d4032b71b12f8ce1cee83f2dd';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { forecasts: null, city: null, error: null });
});

app.post('/', function(req, res) {
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  request(url, function(error, response, body) {
    if (error) {
      // handle error
      res.render('index', { forecasts: null, city: null, error: 'Error fetching weather data. Please try again later.' });
    } else {
      const weatherData = JSON.parse(body);
      if (!weatherData.list) {
        // handle error
        res.render('index', { forecasts: null, city: null, error: 'City not found. Please enter a valid city name.' });
      } else {
        // extract current weather data
        const weather = weatherData.list[0].weather[0].main;
        const icon = weatherData.list[0].weather[0].icon;
        const description = weatherData.list[0].weather[0].description;
        const temperature = Math.round(weatherData.list[0].main.temp);
        const humidity = weatherData.list[0].main.humidity;
        const windSpeed = weatherData.list[0].wind.speed;

        // create array of forecast data for the next 5 days
        const forecasts = [];
        const today = new Date();
        for (let i = 1; i <= 5; i++) {
          const forecast = {};
          const date = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
          const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          forecast.day = dayNames[date.getDay()];
          forecast.weather = weatherData.list[i * 8 - 1].weather[0].main;
          forecast.icon = weatherData.list[i * 8 - 1].weather[0].icon;
          forecast.description = weatherData.list[i * 8 - 1].weather[0].description;
          forecast.temperature = Math.round(weatherData.list[i * 8 - 1].main.temp);
          forecast.humidity = weatherData.list[i * 8 - 1].main.humidity;
          forecast.windSpeed = weatherData.list[i * 8 - 1].wind.speed;
          forecasts.push(forecast);
        }

        // render the index page with weather and forecast data
        res.render('index', {
          forecasts,
          city,
          error: null,
          weather,
          icon,
          description,
          temperature,
          humidity,
          windSpeed,
          graph: true
        });
      }
    }
  });
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});
