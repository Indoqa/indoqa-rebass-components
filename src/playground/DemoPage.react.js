import React from 'react'
import {Divider, Heading, Space} from 'rebass'
import Anchor from '../main/components/Anchor.react'
import AnchorLink from '../main/components/AnchorLink.react'
import Div from '../main/components/Div.react'
import List from '../main/components/List.react'
import ListItem from '../main/components/ListItem.react'

import FontAwesomeExample from './components/FontAwesomeExample.react'
import ListExample from './components/ListExample.react'
import DivSpanExample from './components/DivSpanExample.react'

const DemoPage = (props, {rebass}) => (
  <Div style={{fontFamily: rebass.fontFamily}} p={1}>
    <Heading level={1}> indoqa-rebass-components examples </Heading>
    <Space y={2} />
    <List>
      <ListItem> <AnchorLink to="lists">Lists </AnchorLink> </ListItem>
      <ListItem> <AnchorLink to="font-awesome">FontAwesome </AnchorLink> </ListItem>
      <ListItem> <AnchorLink to="div-span">Div/Span </AnchorLink> </ListItem>
    </List>
    <Div mb={4}>
      <Anchor id="lists" />
      <Divider />
      <ListExample />
      <Divider />
    </Div>
    <Div mb={4}>
      <Anchor id="font-awesome" />
      <FontAwesomeExample />
      <Divider />
    </Div>
    <Div mb={4}>
      <Anchor id="div-span" />
      <DivSpanExample />
    </Div>
  </Div>
)

DemoPage.contextTypes = {
  rebass: React.PropTypes.object
}

export default DemoPage
