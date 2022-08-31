import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Clock, ClockUpdated} from './Clock';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// const tick = () => {
  root.render(
    <React.StrictMode>
      <ClockUpdated>
        <h1>Hello, world!</h1>
      </ClockUpdated>
      <Clock date = {new Date()} />
    </React.StrictMode>
  );
// }

// setInterval(tick, 1000)

