import React, { Component } from 'react';

const possibleClocks = [
  '🕛',
  '🕐',
  '🕑',
  '🕒',
  '🕓',
  '🕔',
  '🕕',
  '🕖',
  '🕗',
  '🕘',
  '🕙',
  '🕚',
]

export default class Spinner extends Component {
  state = { clockTime: 0 }

  componentDidMount() {
    this.updateInterval = setInterval(() => {
      let { clockTime } = this.state
      // increment time
      if (clockTime === possibleClocks.length - 1) clockTime = 0
      else clockTime = clockTime + 1

      this.setState({ clockTime: clockTime })
    }, 250)
  }
  componentWillUnmount() {
    clearInterval(this.updateInterval)
  }
  render() {
    return (<span>{ possibleClocks[this.state.clockTime] }</span>)
  }
}
