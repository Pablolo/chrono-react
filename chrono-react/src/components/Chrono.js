import React, { Component } from 'react';

class Chrono extends Component {

  state = {
    seconds: 0,
    mins: 0,
    hours: 0,
    intervalId: undefined,
    isButtonDisabled: false,
  }
  
  init = () => {
    this.setState({
      isButtonDisabled: !this.state.isButtonDisabled,
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
        isButtonDisabled: false,
      })
    }
  }

  reset = () => {
    this.setState({
      seconds: 0,
      mins: 0,
      hours: 0,
      isButtonDisabled: false,
    })
    this.stop();
  }

  twoDigits(number) {
    return (number / 100).toFixed(2).split('.')[1];
  }

  render() {
    const { seconds, mins, hours } = this.state;
    return (
      <div>
        <p>{ this.twoDigits(hours) }:{ this.twoDigits(mins) }:{ this.twoDigits(seconds) }</p>
        <button className='btns' onClick={this.init} disabled={this.state.isButtonDisabled}>Start</button>
        <button className='btns' onClick={this.stop}>Stop</button>
        <button className='btns' onClick={this.reset}>Reset</button>       
      </div>
    );
  }
}

export default Chrono;