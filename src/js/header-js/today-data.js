import renderHeaderElements from './render-header-element.js';

class TodayData {
  data = {};

  constructor(data) {
    this.data = data;

    // this.init();
    this.parseData();

  }

  parseData() {
    const city = this.data.name;
    const { country } = this.data.sys;
    const dateValue = this.data.dt;
    const { temp } = this.data.main;
    const { icon } = this.data.weather[0];
    const windDirection = this.data.wind.deg;
    const windSpeed = this.data.wind.speed;

    this.prepareData({
      city, country, dateValue, temp, icon, windDirection, windSpeed,
    });
  }

  prepareData(obj) {
    obj.time = this.getTime(obj.dateValue);
    obj.temp = this.getTemperature(obj.temp);
    obj.windDirectionValue = this.getWindDirectionValue(obj.windDirection);

    renderHeaderElements(obj);
  }

  getTime(d) {
    const dateObj = new Date(d * 1000);

    let minutes = dateObj.getMinutes();
    minutes < 10
      ? minutes = `0${minutes}`
      : minutes;
    let hours = dateObj.getHours();
    hours < 10
      ? hours = `0${hours}`
      : hours;

    return `${hours}:${minutes}`;
  }

  getTemperature(t) {
    return `${Math.round(t - 273)}°C`;
  }

  getWindDirectionValue(w) {
    let direction;

    if (w === 0) {
      direction = 'North';
    } else if (w > 0 && w < 90) {
      direction = 'North-east';
    } else if (w === 90) {
      direction = 'East';
    } else if (w > 90 && w < 180) {
      direction = 'South-east';
    } else if (w === 180) {
      direction = 'South';
    } else if (w > 180 && w < 270) {
      direction = 'South-west';
    } else if (w === 270) {
      direction = 'West';
    } else direction = 'North-west';

    return direction;
  }
}

export default TodayData;
