import React from 'react';
import './App.css';
import {Item, Item2} from './Item.js'

function App() {
  return (
    <div className="App">
     <Item idItem="Uno"/>
     <Item idItem="Dos"/>   
     <Item2 idItem="Tres"/>
    </div>
  );
}

export default App;
