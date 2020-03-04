import React, { Component } from "react";
import WeatherApi from "./WeatherApi";
import { cargarClima } from "./apiClima";
import "./WeatherBar.css";

export default class WeatherBarApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //inicializo el state
      data: []
    };
  }
  componentDidMount() {
    //se invoca ...?
    cargarClima().then(data => {
      this.setState({
        data: data
      });
    });
  }

  render() {
    return (
      <div className="weather-bar">
        {this.state.data.map((d, index) => (
          <WeatherApi key={index} weather={d} />
        ))}
      </div>
    );
  }
}
