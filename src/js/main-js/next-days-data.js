import TodayData from '../header-js/today-data.js';
import renderMainElement from './render-main-element.js';

class NextDaysData extends TodayData {
  tempValues = [];
  icons = [];
  dateValues = [];

  constructor(data) {
    super();
    this.data = data.list;

    this.parseData();
  }

  parseData() {
    if (this.data) {
      for (let i = 0; i < 40; i += 8) {
        this.tempValues.push(super.getTemperature(this.data[i].main.temp));
        this.icons.push(this.data[i].weather[0].icon);
        this.dateValues.push(this.getDate(this.data[i].dt));
      }

      renderMainElement(this.tempValues, this.icons, this.dateValues);
    }
  }

  getDate(d) {
    const dateObj = new Date(d * 1000);

    let day = dateObj.getDate();
    day < 10
      ? day = `0${day}`
      : day;
    let month = dateObj.getMonth();
    month < 10
      ? month = `0${month}`
      : month;

    return `${day}.${month} ${super.getTime(d)}`;
  }
}

export default NextDaysData;
