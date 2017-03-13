import React, { Component } from 'react';

export default class OnlineMinutes extends Component {
  constructor() {
    super();

    this.state = {minutesSinceMount: 0};
  }
  componentDidMount() {
    setInterval(() => {      
      let { minutesSinceMount } = this.state;
      minutesSinceMount++;
      this.setState({ minutesSinceMount });
    }, 1000 * 60);
  }
  render() {
    const { minutesSinceMount } = this.state;
    return (
      <h4>Online for {minutesSinceMount} minutes</h4>
    )  
  }
}
