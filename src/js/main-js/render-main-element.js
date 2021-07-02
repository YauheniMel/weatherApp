function renderMainElement(arrTemp, arrIcon, arrDate) {
  const daysWrapEl = document.querySelector('.days');

  for (let i = 0; i < 5; i++) {
    const template = `
      <div class="day">
        <p class="day__temperature">
          ${arrTemp[i]}
        </p>
        <img src="http://openweathermap.org/img/wn/${arrIcon[i]}@2x.png" alt="" class="day__icon">
        <p class="day__value">
          ${arrDate[i]}
        </p>
      </div>
    `;

    daysWrapEl.innerHTML += template;
  }
}

export default renderMainElement;
