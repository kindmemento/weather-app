import getData from './getData';

const submit = document.querySelector('submit');
const input = document.querySelector('input');
const icon = document.querySelector('[data-img]');
const status = document.querySelector('[data-status]');
const location = document.querySelector('[data-location]');
const wind = document.querySelector('[data-wind]');
const temperature = document.querySelector('[data-temperature]');
const humidity = document.querySelector('[data-humidity]');

function displayResults() {
  getData(input.value).then((data) => {
    icon.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
    status.innerText = data.weather[0].main;
    location.innerText = data.name;
    wind.innerText = Math.round(data.wind.speed) + ' kmh';
    temperature.innerText = data.main.temp + '°C';
    humidity.innerText = data.main.humidity + '%';
    input.value = '';
  });
}

submit.onclick = () => {
  displayResults();
};


document.body.addEventListener('keydown', (e) => {
  if (input.value !== '' && e.key === 'Enter') {
    displayResults();
  }
},
);
