import React, {PropTypes} from 'react'
import {Base} from 'rebass'

const FontAwesome = ({icon, className, color, size, ...other}) => {
  const baseStyle = {}

  if (size) baseStyle['fontSize'] = size
  if (color) baseStyle['color'] = color

  return (
    <Base
      baseStyle={baseStyle}
      className={`FontAwesomeIcon fa fa-${icon} ${className}`}
      tagName="li"
      {...other}
    />
  )
}

FontAwesome.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
}

FontAwesome.contextTypes = {
  rebass: React.PropTypes.object
}

export default FontAwesome
