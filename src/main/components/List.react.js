import React, {PropTypes} from 'react'
import {Base} from 'rebass'

const baseStyle = {
  margin: '0',
  padding: '0px 0px 0px 20px'
}

const List = (props) => {
  const {itemType, ordered, ...other} = props

  const tag = (ordered) ? 'ol' : 'ul'
  const defaultItemType = (ordered) ? 'decimal' : 'square'
  const itemStyleType = itemType || defaultItemType

  const style = {
    listStyleType: itemStyleType,
    ...baseStyle
  }

  return (
    <Base {...other} tagName={tag} baseStyle={style} />
  )
}

List.propTypes = {
  itemType: PropTypes.string,
  ordered: PropTypes.bool
}

List.defaultProps = {
  ordered: false
}

export default List
