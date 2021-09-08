import React from 'react';
import ReactDOM from 'react-dom';

import { Canvas } from '@react-three/fiber';

import World from './World.jsx';

function App() {
  return (
    <>
      <Canvas>
        <World />
      </Canvas>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
