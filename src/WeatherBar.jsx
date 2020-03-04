import React from "react";
import Weather from "./Weather";
import "./WeatherBar.css";

class WeatherBar extends React.Component {
  render() {
    return (
      <div className="weather-bar">
        {this.props.weathers.map((w, i) => (
          <Weather weather={w} key={i} />
        ))}
      </div>
    );
  }
}

export default WeatherBar;
