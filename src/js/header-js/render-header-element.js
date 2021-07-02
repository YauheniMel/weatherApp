import valueSRC from '../../css/icons/compas.png';

function renderHeaderElements({
  city, country, time, temp, icon, windDirection, windDirectionValue, windSpeed,
}) {
  const template = `
    <div class="info">
      <p class="info__location">
        ${city}, ${country}
      </p>
      <p class="info__date">
        ${time}
      </p>
    </div>
    <div class="temperature">
      <p class="temperature__value">
        ${temp}
      </p>
      <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="icon weather" class="temperature__icon">
    </div>
    <div class="wind">
      <div class="wind__direction">
        <p style="display: inline-block;">
          ${windDirectionValue}
        </p>
        <img src="${valueSRC}" alt="wind ${windDirectionValue}" style="width: 20px; transform:  rotate(${90 + windDirection}deg);">
      </div>
      <p class="wind__value">
        ${windSpeed} m/s
      </p>
    </div>
  `;

  const headerContEl = document.querySelector('.container');
  headerContEl.innerHTML = template;
}

export default renderHeaderElements;
