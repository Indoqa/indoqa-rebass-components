import React from 'react'
import {render} from 'react-dom'
import DemoApp from './DemoApp.react.js'

const renderDemo = () => {
  render(
    <DemoApp />,
    document.getElementById('app')
  )
}

const enableHotReloading = () => {
  if (module.hot) {
    module.hot.accept()
  }
}

const main = () => {
  enableHotReloading()
  renderDemo()
}

main()
