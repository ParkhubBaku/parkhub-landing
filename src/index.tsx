// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/tailwind.css';
import App from './App';
import './i18n';

// Get the root element from the DOM
const container = document.getElementById('root');

if (!container) {
  throw new Error("Failed to find the root element with id 'root'.");
}

// Create a React root.
const root = ReactDOM.createRoot(container);

// Render the application within React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
