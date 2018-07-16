import React from "react";

import {NavLink} from "react-router-dom";


const Navigation = () => {

    return (
      <div>
        <NavLink to="/">Homebase</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/Game1">Game</NavLink>
      </div>
    );
  };

  export default Navigation;