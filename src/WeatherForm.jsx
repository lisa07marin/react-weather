import React, { Component } from 'react'

export default class WeatherForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          day: '',
          month: '',
          hour: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.onDate = this.onDate.bind(this);
      }



    render() {
        return (
            <div>
                <input type="number" name="day" value={this.state.day} onChange={this.handleChange}/>
                <input type="number" name="month" value={this.state.month} onChange={this.handleChange}/>
                <input type="number" name="hour" value={this.state.hour} onChange={this.handleChange}/>
                <button onClick={this.onDate}></button>
            </div>
        )
    }
}
