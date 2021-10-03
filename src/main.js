import config from "./config.js";
const kelvinToCelsius = require('kelvin-to-celsius');

async function getData(input) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${config.API_KEY}`
  );
  const data2 = await data.json();

  console.log(data2)

  city.innerHTML = data2.name
  degree.innerHTML = kelvinToCelsius(data2.main.temp) + '°'
  
  // const data3 = {
  //   name: data2.name,
  //   temp: data2.main.temp,
  //   weather: {
  //     main: data2.weather[0].main,
  //     description: data2.weather[0].description
  //   },
  //   wind: {
  //     degree: data2.wind[0],
  //     speed: data2.wind.speed
  //   }
  // }
}

getData('london')

const city = document.querySelector('#city')
const degree = document.querySelector('#degree')