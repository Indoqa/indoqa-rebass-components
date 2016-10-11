import React from 'react'
import Div from '../../main/components/Div.react'
import List from '../../main/components/List.react'
import ListItem from '../../main/components/ListItem.react'
import {Space} from 'rebass'

const ListExample = () => (
  <Div>
    <List>
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
    <Space y={1} />
    <List itemType="circle">
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
    <Space y={1} />
    <List ordered>
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
    <Space y={1} />
    <List ordered itemType="lower-alpha">
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
  </Div>
)

export default ListExample
