import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from 'react-dom/client' for React 18
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));  // New method for React 18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
