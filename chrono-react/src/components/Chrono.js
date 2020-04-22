import React, { Component } from 'react';

class Chrono extends Component {

  state = {
    seconds: 0,
    mins: 0,
    hours: 0,
    start: false,
    stop: false,
    reset: false,
    intervalId: undefined,
  }

  init = () => {
    this.setState({
      intervalId: setInterval(() => {
        this.setState({
          seconds: this.state.seconds + 1,
        })
        if (this.state.seconds === 60) {
          this.setState({
            seconds: 0,
            mins: this.state.mins + 1,
          })
        }
        if (this.state.mins === 60) {
          this.setState({
            mins: 0,
            hours: this.state.hours + 1,
          })
        }
      }, 1000)
    })
  }

  stop = () => {
    if (!!this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({
        intervalId: undefined,
      })
    }
  }

  render() {
    const { seconds, mins, hours } = this.state;
    return (
      <div>
        <p>{ hours }:{ mins }:{ seconds }</p>
        <button onClick={this.init}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button>Reset</button>       
      </div>
    );
  }
}

export default Chrono;