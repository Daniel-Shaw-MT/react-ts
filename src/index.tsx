import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import Dashboard from './views/Dashboard';
import List from './views/List';



ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />}/>
      <Route path="Dashboard" element={<Dashboard />}/>
      <Route path="List" element={<List />}/>
    </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);


