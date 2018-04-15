import React from 'react';
import styled from 'styled-components';
import {
  elements,
  channels,
} from '../constants';
import PanelView from './PanelView';

const PageWrap = styled(elements.Page)`
  display: flex;
`

const Panel = styled(PanelView)`
  flex: 1 0 auto;
`

const Text = styled(elements.Text)`
  color: white;
  font-family: sans-serif;
`;

const shows = [
  {
    title: 'Home and Away',
    graphic: '/tile.jpg',
    channel: channels.SEVEN,
  },
];

export default props => (
  <PageWrap>
    {
      shows.length
        ? shows.map((show, i) => <Panel key={i} {...show} /> )
        : <Text>Stay tuned for more shows</Text>
    }
  </PageWrap>
);
