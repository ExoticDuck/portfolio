import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Works/>
    </div>
  );
}

export default App;
