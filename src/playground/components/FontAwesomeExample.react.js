import React from 'react'
import Div from '../../main/components/Div.react'
import FontAwesome from '../../main/components/FontAwesome.react'
import {Heading, Space, Pre} from 'rebass'

import 'font-awesome/css/font-awesome.css'

const FontAwesomeExample = () => (
  <Div>
    <Heading level={2}> FontAwesome </Heading>
    <Div>
      <Pre> &lt;FontAwesome icon="thumbs-o-up" /&gt; </Pre>
      <FontAwesome icon="thumbs-o-up" />
      <Space y={1} />
      <Pre> &lt;FontAwesome icon="thumbs-o-up" color="red" /&gt;</Pre>
      <FontAwesome icon="thumbs-o-up" color="red" />
      <Space y={1} />
      <Pre> &lt;FontAwesome icon="thumbs-o-up" color="red" size="30px" /&gt; </Pre>
      <FontAwesome icon="thumbs-o-up" color="red" size="30px" />
      <Space y={1} />
    </Div>
    <Div>
      <Pre> A lot of different icons </Pre>
      <FontAwesome icon="play" />
      <Space x={1} />
      <FontAwesome icon="pause" />
      <Space x={1} />
      <FontAwesome icon="bars" />
      <Space x={1} />
      <FontAwesome icon="refresh" />
      <Space x={1} />
      <FontAwesome icon="camera" />
      <Space x={1} />
      <FontAwesome icon="car" />
      <Space x={1} />
      <FontAwesome icon="check" />
      <Space x={1} />
      <FontAwesome icon="eraser" />
      <Space x={1} />
      <FontAwesome icon="download" />
      <Space x={1} />
      <FontAwesome icon="exchange" />
      <Space x={1} />
      <FontAwesome icon="external-link" />
      <Space x={1} />
      <FontAwesome icon="female" />
      <Space x={1} />
      <FontAwesome icon="history" />
      <Space x={1} />
      <FontAwesome icon="heart-o" />
      <Space x={1} />
      <FontAwesome icon="level-up" />
    </Div>
  </Div>
)

export default FontAwesomeExample
