import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = "Общий план моего роста"
const items = ["Потрогать реакт, понять как его использовать и зачем", "Отдать всё время на бэк, в частности .NET;", "Попасть в ряды бэкендеров."]

root.render(
  <div>
    <h1>{value}</h1>
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
    </ul>
  </div>
);
