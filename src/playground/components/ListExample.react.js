import React from 'react'
import Div from '../../main/components/Div.react'
import List from '../../main/components/List.react'
import ListItem from '../../main/components/ListItem.react'
import {Heading, Space, Pre} from 'rebass'

const ListExample = () => (
  <Div>
    <Heading level={2}> Lists </Heading>
    <Pre> &lt;List&gt; ... </Pre>
    <List>
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
    <Space y={1} />
    <Pre> &lt;List itemType="circle"&gt; ... </Pre>
    <List itemType="circle">
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
    <Space y={1} />
    <Pre> &lt;List ordered&gt; ... </Pre>
    <List ordered>
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
    <Pre> &lt;List ordered itemType="lower-alpha"&gt; ... </Pre>
    <List ordered itemType="lower-alpha">
      <ListItem> item 1 </ListItem>
      <ListItem> item 2 </ListItem>
      <ListItem> item 3 </ListItem>
      <ListItem> item 4 </ListItem>
    </List>
  </Div>
)

export default ListExample
