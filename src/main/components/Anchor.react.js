import React, {PropTypes} from 'react'
import {Base} from 'rebass'

const Anchor = ({id, ...other}) => (
  <Base id={id} tagName={'a'} {...other} />
)

Anchor.propTypes = {
  id: PropTypes.string.isRequired
}

export default Anchor
