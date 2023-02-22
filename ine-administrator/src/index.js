import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Crea un objeto ReactDOM.Root para el elemento raíz de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro del elemento raíz usando ReactDOM.Root
root.render(
  // Componente de React que activa el "modo estricto" de la aplicación
  <React.StrictMode>
    {/* Componente de la aplicación principal */}
    <App />
  </React.StrictMode>
);