import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import homebase from "./pages/Homebase/Homebase";
import login from "./pages/Login/Login";
import gameOne from "./pages/Game1/Game1";
import pageError from "./pages/Error/Error";
import Navigation from "./components/Navigation/Navigation";


const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
        <Switch>
          <Route exact path="/" component={homebase}/>
          <Route exact path="/login" component={login} />
          <Route exact path="/Game1" component={gameOne} />
          <Route component={pageError} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default App;
