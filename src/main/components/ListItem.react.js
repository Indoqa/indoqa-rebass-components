import React from 'react'
import {Base} from 'rebass'

const baseStyle = {
  margin: '0',
  padding: '0px 0px 0px 5px'
}

const ListItem = (props) => (
  <Base {...props} tagName={'li'} baseStyle={baseStyle} />
)

export default ListItem
