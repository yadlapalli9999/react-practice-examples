import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Add from './components/add';
import logo from './logo.svg';
import './App.css';
import List from './components/list';
import Edit from './components/edit';
import Delete from './components/delete'

function App() {
  return (
    <BrowserRouter>
    <div className="">
        <div className="jumbotron">
       <h1 className="display-4">CRUD User Application with REDUX Using Multiple Components</h1>
        <p className="lead">This is a simple crud and  a simple component base application </p>
        <hr className="my-4"/>
        
        <Link className="btn btn-primary btn-lg" to="/add" role="button">ADD</Link>
    </div>
    <div className="container">
        <Route path="/" exact component={List}></Route>
        <Route path="/add" exact component={Add}></Route>
        {/* <Route path="/list" exact component={List}></Route> */}
        <Route path="/edit/:id"  exact component={Edit}></Route>
        <Route path="/delete" exact component={Delete}></Route>
    
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
