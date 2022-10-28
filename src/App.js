import React, { Component } from 'react'
import Action from './Components/Action/Action'
import Stats from './Components/Stats/Stats'

export default class App extends Component {
  state = { total: 0 }

  updateAction = (total) => {
    this.setState({ total: total })
    console.log(total, 'app');
  }

  render() {
    return (
      <div>
        <Action totalTimes={this.state.total} />
        <Stats passBack={this.updateAction} />
      </div>
    )
  }
}
