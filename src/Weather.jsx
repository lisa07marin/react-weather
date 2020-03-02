import React from "react";

function Weather(props) {
  return (
    <div className="weather-card">
      <div className="weather-icon"></div>
      <div className="weather-day">
        <h3>{props.weather.day}</h3>
        <h6>{props.weather.max}°</h6>
        <h6>{props.weather.min}°</h6>
      </div>
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

    </div>
  );
}
export default Weather;
