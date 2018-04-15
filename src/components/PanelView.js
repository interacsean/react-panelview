import React from 'react';
import styled from 'styled-components';
import {
  elements,
  channelLogos,
} from '../constants';
import Image from './web/Image';

const PanelImg = styled(Image)`
  width: 315px;
`

const PanelView = styled(elements.Panel)`
  position: relative;
  `;
  
const PanelCaption = styled(elements.PanelCaption)`
  position: absolute;
  display: flex;
  align-items: center;  
  padding: 10px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  `;
  
  const Text = styled(elements.Panel)`
  position: relative;
  font-family: sans-serif;
  `;
  
  const NetworkLogo = styled(Image)`
  max-height: 40px;
  margin-right: 10px;
  `;
  
  export default props => (
    <PanelView>
    { props.graphic && <PanelImg src={props.graphic}/> }
    { props.title && (
      <PanelCaption>
        {
          props.channel
          && channelLogos[props.channel]
          && <NetworkLogo src={channelLogos[props.channel]} /> 
        }
        {
          <Text>{ props.title }</Text>
        }
      </PanelCaption>
    )}
  </PanelView>
);
