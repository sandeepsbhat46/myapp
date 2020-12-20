import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './parentComponent';
import MyComponent from './files/derivedcomp';
import Calu from './files/calu'


function App() {
  return (
    <div className="App">
    <MyComponent name="Thor" />
    <Calu />
  {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
