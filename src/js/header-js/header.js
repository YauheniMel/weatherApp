import fetchData from '../fetch-data';
import TodayData from './today-data';

const key = '03fb54ebf904aeecf7fbb0e169f0c7ad';
const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=${key}`;

fetchData('GET', urlWeather)
  .then((response) => {
    const data = JSON.parse(response);

    new TodayData(data);
  })
  .catch((error) => {
    console.error(error);
  });
