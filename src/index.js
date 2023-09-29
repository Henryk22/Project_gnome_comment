import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import App from './App'; 
import { BrowserRouter } from 'react-router-dom'; 
import { Provider } from 'react-redux'; 
import { store } from './store'; 

// Создаем корневой элемент для рендеринга 
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим компоненты внутри Provider, чтобы предоставить доступ к Redux Store
root.render(
  <Provider store={store}> {/* Оборачиваем все компоненты в Provider и передаем в него Redux Store */}
    <BrowserRouter> {/* Используем BrowserRouter для настройки маршрутизации */}
      <App /> {/* Рендерим главный компонент App */}
    </BrowserRouter>
  </Provider>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { store } from './store'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <BrowserRouter>  
//       <App />
//     </BrowserRouter>
//   </Provider>
  
// );


