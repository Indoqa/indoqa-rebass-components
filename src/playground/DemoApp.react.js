import React from 'react'
import DemoPage from './DemoPage.react'

class DemoApp extends React.Component {
  getChildContext() {
    return {
      rebass: {
        fontFamily: 'Arial, Helvetica, sans-serif'
      }
    }
  }

  render() {
    return (
      <DemoPage />
    )
  }
}

DemoApp.childContextTypes = {
  rebass: React.PropTypes.object
}

export default DemoApp
