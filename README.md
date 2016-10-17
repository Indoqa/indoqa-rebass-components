# Indoqa Rebass Components

A collection of additional rebass components:

  * `<List>` and `<ListItem>`: Ordered and unordered lists with default padding/margin settings and configurable listStyleType. 
  * `<Anchor />` and `<AnchorLink />`: Jump to anchors on the same page.
  * `<FontAwesome />`: FontAwesome icons with configurable color and size. 
  * `<Div />` and `<Span />`: Simple div/span components with the benefits of `withRebass()`

## Live Demo

see [https://indoqa.github.io/indoqa-rebass-components/](https://indoqa.github.io/indoqa-rebass-components/)

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

### Anchor/AnchorLinks

```javascript
import React from 'react'
import {Anchor. AnchorLink, Div} from 'indoqa-rebass-components'

const Page = () => (
  <Div>
    <AnchorLink to="section2"> Jump to section 2 </AnchorLink>
    .......
    .......
    .......
    <Anchor id="section2"/>
    Here starts section 2!
  </Div>
)

export default Page
```

### FontAwesome

```javascript
import React from 'react'
import {FontAwesome} from 'indoqa-rebass-components'

import 'font-awesome/css/font-awesome.css'

const ThumbsUpBigRedIcon = () => (
  <FontAwesome icon="thumbs-o-up" color="red" size="30px" />
)

export default ThumbsUpBigRedIcon
```

Note: The font-awesome css is treated as optional provided dependency. It is not included in indoqa-rebass-components. Use npm package 'font-awesome' in your app.

## Playground

Play around with our live demo locally: 
```bash
git clone git@github.com:Indoqa/indoqa-rebass-components.git
cd indoqa-rebass-components
npm install
npm start
```
Point your browser to [http://localhost:3000](http://localhost:3000) and edit pages in src/playground. Hot reloading is enabled by default.
