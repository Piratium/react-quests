import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const value = "Общий план моего роста";
const items = ["Потрогать реакт, понять как его использовать и зачем", "Отдать всё время на бэк, в частности .NET;", "Попасть в ряды бэкендеров."];
const now = new Date();

function getItems(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    array[i] = <li>{array[i]}</li>;
  }
  return array;
}

root.render(
  <div>
    <h1>{value}</h1>
    <ul>
        {getItems(items)}
    </ul>
    <p>&#169; Авторские права мои {now.getFullYear()}</p>
  </div>
);
