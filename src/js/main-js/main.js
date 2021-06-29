import fetchData from '../fetch-data';

const key = '03fb54ebf904aeecf7fbb0e169f0c7ad';
const urlWeather5 = `https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=${key}`;

fetchData('GET', urlWeather5)
  .then((response) => {
    // console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
