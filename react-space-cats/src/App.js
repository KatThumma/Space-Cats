import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

import homeBase from "./components/Homebase/Homebase";
import login from "./components/Login/Login";
import gameOne from "./components/Game1/Game1";
import pageError from "./components/Error/Error";
import Navigation from "./components/Navigation/Navigation";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
      <Switch>
        <Route path="/" component={homeBase} exact />

        <Route path="/login" component={login} />

        <Route path="/Game1" component={gameOne} />

        <Route component={pageError} />

      </Switch>
      </div>
      </BrowserRouter>
  
    );
  }
}

export default App;
