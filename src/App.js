import React from 'react';

import Panel from './components/Panel';

const panelData = [
    {
        color: 'red',
        text: 'The quick brown fox jumps over the lazy dog',
    },
    {
        color: 'green',
        text: 'Pack my box with five dozen liquor jugs',
    },
    {
        color: 'blue',
        text: 'Several fabulous dixieland jazz groups played with quick tempo',
    },
];

const App = () => (
    <div id="app">
        <h1>My app</h1>
        <img src="/static/something.svg" />
        {
            panelData.map(
                panel => <Panel {...panel} key={panel.color}/>
            )
        }
    </div>
);

export default App;
