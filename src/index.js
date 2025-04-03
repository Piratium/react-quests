import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import HomePage from './Layout/HomePage/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div className='container col-10'>
    <HomePage />
  </div>
);
