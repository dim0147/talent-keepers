import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { init } from './init.ts';

init();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
);
