// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Mengimpor CSS global
import App from './App'; // Mengimpor komponen utama

// Membuat root React untuk me-render aplikasi
const root = ReactDOM.createRoot(document.getElementById('root'));

// Me-render komponen <App /> ke DOM
root.render(
  // Menyalakan mode ketat untuk pemeriksaan potensi masalah
  <React.StrictMode>
    <App />
  </React.StrictMode>
);