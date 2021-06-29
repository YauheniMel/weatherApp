class WeatherToday {
  constructor(data) {
    this.data = data;

    this.init();
  }

  init() {
    this.parseData();
  }

  parseData() {
    console.log(this.data);
  }
}

export default WeatherToday;
