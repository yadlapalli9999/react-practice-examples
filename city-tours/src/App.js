import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList/TourList'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h3 className="App-logo" alt="logo" >City Tours</h3>
    //   </header>
    // </div>
    <React.Fragment>
      <Navbar/>
      <TourList/>
    </React.Fragment>
  );
}

export default App;
