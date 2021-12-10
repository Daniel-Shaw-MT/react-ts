import React, { useState } from 'react';
import './main.css';
import {TextField} from './component/TextField';
import {Label} from './component/Label';
import Dashboard from './views/Dashboard';
import { Link } from 'react-router-dom';
import { Navigation } from './component/Navigation';

function App() {
  
  return (
    <div className="App">
      <Navigation PageTitle='Home'/>
      <div>
      <h1>Welcome to my site</h1>
        <h1>App Component</h1>
      </div>

    </div>
  );
}

export default App;
