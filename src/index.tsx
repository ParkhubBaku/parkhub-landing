// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/tailwind.css';
import App from './App';
import './i18n';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
if (!container) {
  throw new Error("Failed to find the root element with id 'root'.");
}
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
