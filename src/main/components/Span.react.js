import React from 'react'
import {Base} from 'rebass'

const baseStyle = {
  display: 'inline-block'
}

const Span = (props) => (
  <Base {...props} tagName={'span'} baseStyle={baseStyle} />
)

export default Span
