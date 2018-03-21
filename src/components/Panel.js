import React from 'react';

const Panel = props => (
  <div style={{ backgroundColor: props.color, color: 'white' }}>
    { props.text }
  </div>
);

export default Panel;