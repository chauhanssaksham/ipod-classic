import React from 'react';
import './styles/main.scss'
import Screen from './components/layout/screen'
import Controls from './components/layout/controls'

function App() {
  return (
    <div className="ipod">
        <Screen />
        <Controls />
    </div>
  );
}

export default App;
