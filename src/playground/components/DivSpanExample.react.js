import React from 'react'
import Div from '../../main/components/Div.react'
import Span from '../../main/components/Span.react'
import {Heading, Pre} from 'rebass'

const ListExample = () => (
  <Div>
    <Heading level={2}> Div/Span </Heading>
    <Div>
      <Pre> &lt;Span style=&#123;&#123;backgroundColor: 'red'&#125;&#125;&gt; text &lt;/Span&gt; x2 </Pre>
      <Span style={{backgroundColor: 'red'}}> text </Span>
      <Span style={{backgroundColor: 'red'}}> text </Span>
    </Div>
    <Div>
      <Pre> &lt;Span m={1} style=&#123;&#123;backgroundColor: 'red'&#125;&#125;&gt; text &lt;/Span&gt; x2 </Pre>
      <Span m={1} style={{backgroundColor: 'red'}}> text </Span>
      <Span m={1} style={{backgroundColor: 'red'}}> text </Span>
    </Div>
    <Div>
      <Pre> &lt;Span p={1} style=&#123;&#123;backgroundColor: 'red'&#125;&#125;&gt; text &lt;/Span&gt; x2 </Pre>
      <Span p={1} style={{backgroundColor: 'red'}}> text </Span>
      <Span p={1} style={{backgroundColor: 'red'}}> text </Span>
    </Div>
    <Div>
      <Pre> &lt;Span p={1} m={1} style=&#123;&#123;backgroundColor: 'red'&#125;&#125;&gt; text &lt;/Span&gt; x2 </Pre>
      <Span p={1} m={1} style={{backgroundColor: 'red'}}> text </Span>
      <Span p={1} m={1} style={{backgroundColor: 'red'}}> text </Span>
    </Div>
  </Div>
)

export default ListExample
