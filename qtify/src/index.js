import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  </React.StrictMode>
);