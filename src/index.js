import React from 'react';
import ReactDOM from 'react-dom/client'; // Required for React 18+
import './index.css'; // CSS for styling (optional)
import App from './App'; // Main app component

const root = ReactDOM.createRoot(document.getElementById('root')); // React 18 entry point

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

