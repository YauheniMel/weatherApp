class WeatherToday {
  constructor(data) {
    this.data = data;

    this.init();
  }

  init() {
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
    const date = this.getDate(obj.dateValue);
    const temperature = this.getTemperature(obj.temp);
    const windDirectionValue = this.getWindDirectionValue(obj.windDirection);

    console.log(date, temperature, windDirectionValue);
  }

  getDate(d) {
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

export default WeatherToday;
