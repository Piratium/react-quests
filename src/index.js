import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
// import HomePage from './Layout/HomePage/HomePage';
import MyComponent from './Layout/Hooks/MyComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div className=''>
    {/* <HomePage /> */}
    <MyComponent />
  </div>
);
