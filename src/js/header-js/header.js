import fetchData from '../fetch-data';

const key = '03fb54ebf904aeecf7fbb0e169f0c7ad';
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`;

fetchData('GET', urlWeather)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
