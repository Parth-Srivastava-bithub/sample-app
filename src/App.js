import React, { Component } from 'react'
import News from './Components/News'
import Navbar from './Components/Navbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News />

      </div>
    )
  }
}
