# Indoqa Rebass Components

A collection of additional rebass components:

  * Div: A simple div component, useful for structuring view code without any plain html tags.
  * List/ListItem: Ordered and unordered lists with default padding/margin settings and configurable listStyleType. 

## Usage

### Lists

```javascript
import React from 'react'
import {Space} from 'rebass'
import {Div, List, ListItem} from 'indoqa-rebass-components'

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
```

## Playground

Start the demo app (src/playground) for a live example:
```bash
git clone git@github.com:Indoqa/indoqa-rebass-components.git
cd indoqa-rebass-components
npm install
npm start
```
