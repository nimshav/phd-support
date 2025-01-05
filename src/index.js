import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated for React 18+
import './index.css'; // Optional: Remove if you don't use this file
import App from './App'; // Ensure this file exists and exports a React component

// Create the root for React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Remove the next section if `reportWebVitals` is not needed

