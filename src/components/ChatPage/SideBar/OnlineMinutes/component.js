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
    const minuteString = minutesSinceMount === 1 ? 'minute' : 'minutes';
    return (
      <h6 className="u-fontWeight--300 u-marginTop--sm">Online for {minutesSinceMount} {minuteString}</h6>
    )  
  }
}
