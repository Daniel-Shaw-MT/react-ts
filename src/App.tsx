import React, { useState } from 'react';
import './main.css';
import TextField from './component/TextField';
import Label from './component/Label';

function App() {
  
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Label text="Username"/>
      <TextField DefaultText="John Doe"/>
      <Label text="Password"/>
      <TextField DefaultText="Password1234!!"/>
    </div>
  );
}

export default App;
