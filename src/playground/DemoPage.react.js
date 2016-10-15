import React from 'react'
import Div from '../main/components/Div.react'
import {Divider, Heading, Space} from 'rebass'
import List from '../main/components/List.react'
import ListItem from '../main/components/ListItem.react'

import FontAwesomeExample from './components/FontAwesomeExample.react'
import ListExample from './components/ListExample.react'

const DemoPage = (props, {rebass}) => (
  <Div style={{fontFamily: rebass.fontFamily}}>
    <Heading level={1}> indoqa-rebass-components examples </Heading>
    <Space y={2} />
    <List>
      <ListItem> <a href="#lists">Lists </a> </ListItem>
      <ListItem> <a href="#font-awesome">FontAwesome </a> </ListItem>
    </List>
    <Space y={4} />
    <a name="lists"></a>
    <Divider />
    <ListExample />
    <Space y={2} />
    <Divider />
    <a name="font-awesome"></a>
    <FontAwesomeExample />
  </Div>
)

DemoPage.contextTypes = {
  rebass: React.PropTypes.object
}

export default DemoPage
