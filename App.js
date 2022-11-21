import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Info from './components/Info';
import Reasons from './components/Reasons';
import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Info />
      <Reasons />
      <Slider />
    </div>
  );
}

export default App;
