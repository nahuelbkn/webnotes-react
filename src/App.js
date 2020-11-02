import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";

export default class App extends React.Component
{
  render()
  {
    return (
      <div className="App">
        

        <Router>
          <NavBar title="tareas"/>
          <Switch>
            <Route exact path="/"></Route>
          </Switch>
        </Router>





        <img src={logo} className="App-logo" alt="react-logo" />

        <header className="App-header"/>
      </div>
    )
  }
  
}


