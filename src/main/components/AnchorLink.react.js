import React, {PropTypes} from 'react'
import {Base} from 'rebass'

const AnchorLink = ({to, ...other}) => (
  <Base href={`#${to}`} tagName={'a'} {...other} />
)

AnchorLink.propTypes = {
  to: PropTypes.string.isRequired
}

export default AnchorLink
