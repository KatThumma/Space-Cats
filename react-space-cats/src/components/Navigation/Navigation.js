import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {

    return (
      <div>
        <Navbar className="nav">
          <Navbar.Header>

            <Navbar.Brand className="homebase">
              <NavLink to="/">Homebase</NavLink>
            </Navbar.Brand>

          </Navbar.Header>
              <Nav>
                <NavItem>
                <NavLink eventKey={1} to="/login">
                  Login
                </NavLink>
                </NavItem>

                <NavItem>
                <NavLink eventKey={2} to="/Game1">
                  Game
                </NavLink>
                </NavItem>

              </Nav>
          </Navbar>
      </div>
    );
  };

  export default Navigation;