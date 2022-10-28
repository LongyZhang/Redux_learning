import React, { Component } from 'react'
import Action from './Components/Action/Action'
import Stats from './Components/Stats/Stats'

export default class App extends Component {
  render() {
    return (
      <div>
        <Action />
        <Stats />
      </div>
    )
  }
}
