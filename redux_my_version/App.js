import React, { Component } from 'react'
import Action from './Components/Action/Action'
import Stats from './Components/Stats/Stats'
import Person from './Components/Person/Person'

export default class App extends Component {

  render() {
    return (
      <div>
        <Action />
        <Stats />
        <Person />
      </div>
    )
  }
}
